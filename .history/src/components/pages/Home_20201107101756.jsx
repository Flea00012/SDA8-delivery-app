//react core
import { fetchPackages, comparator } from '../molecules/CardReader';
import { useEffect, useState, useRef } from 'react';

//import styles and pictures
import logo from '../../artwork//markus-spiske-BPxkU4uPq6Y-unsplash.jpg';
import '../../css/styles.css';

// home page template contains searching components and data fetch
export default function Home() {
  //all the hooks for the data
  const [status, setStatus] = useState(0);
  const [information, setInformation] = useState([]);
  const [packageID, setPackageID] = useState(null);
  const inputPackageRef = useRef();

  //note status = 0 means loading data, status 1, means data found, status 2 means data not found
  useEffect(() => {
    async function fetchData() {
      try {
        setStatus(0);
        console.log(packageID);
        const endpoint = 'https://my.api.mockaroo.com/orders.json?key=e49e6840';
        const data = await fetchPackages(endpoint).filter(
          (value) => value.status === packageID
        );
        console.log(data);
        setInformation(data);
        setStatus(1);
      } catch {
        setStatus(2);
      }

      // here use the comparator to get the specific package id
    }

    fetchData();
  }, [packageID]);

  return (
    <>
      <div className="pageStyle">
        <p> Welcome to Express Delivery Mr Jhon Doe </p>

        <p>
          {' '}
          If you are expecting a delivery please enter your package ID and click
          "find"{' '}
        </p>
        <img
          className="picture"
          src={logo}
          alt="a logo for the transport company called express delivery"
        />
        <p> Please enter your package ID below </p>
        <input ref={inputPackageRef} placeholder="packageID" />
        <button
          onClick={() => {
            const pID = inputPackageRef.current.value;
            setPackageID(pID);
          }}
        />

        <div>
          <h3>React fetch is running{status}</h3>
          {status === 0 ? <p>Loading...</p> : null}
          {status === 1 &&
            information &&
            information.map((i) => {
              return (
                <div key={i.id}>`Package location is:{i.location_id}{i.eta}`</div>
          
                );
            })}
          {status === 2 ? <p>Sorry we cannot find data</p> : null}
        </div>
      </div>
    </>
  );
}
