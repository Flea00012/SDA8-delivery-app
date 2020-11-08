//react core
import { fetchPackages } from '../molecules/CardReader';
import { useEffect, useState, useRef } from 'react';

//import styles and pictures
import logo from '../../artwork/markus-spiske-BPxkU4uPq6Y-unsplash.jpg';
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
        // const endpoint = 'https://my.api.mockaroo.com/orders.json?key=e49e6840';
        const endpoint =
          '/Users/leefowler/Documents/VSCode/SDA8-webdev/reactsda/delivery-app/src/data/data.json';
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
          <h4x>Searching for your package, please be patient.</h4x>
          =======
          <h4>We are searching for your package, please be patient</h4>
          {status === 0 ? <p>Loading...</p> : null}
          {status === 1 &&
            information &&
            information.map((i) => {
              return (
                <div key={i.id}>
                  {`Package current location is ${i.location_id} and time of delivery is ${i.eta}`}
                </div>
              );
            })}
          {status === 2 ? <p>Sorry we cannot find that package</p> : null}
        </div>
      </div>
    </>
  );
}
