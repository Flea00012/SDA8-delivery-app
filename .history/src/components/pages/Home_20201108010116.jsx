//react core

import { useEffect, useState, useRef } from 'react';

//import styles and pictures
import logo from '../../artwork/markus-spiske-BPxkU4uPq6Y-unsplash.jpg';
import '../../css/styles.css';

// home page template contains searching components and data fetch
export default function Home() {
  //all the hooks for the data
  const [status, setStatus] = useState(0);
  const [information, setInformation] = useState([]);
  const [user, setUser] = useState(null);
  const inputUser = useRef();

  //note status 0: means loading data, status 1: means data found, status 2: means data not found
  useEffect(() => {
    async function fetchData() {
      try {
        setStatus(0);
        console.log(user);
        const endpoint = 'https://my.api.mockaroo.com/orders.json?key=e49e6840';

        const response = await fetch(endpoint, { mode: 'cors' });

        // Once the information is downloaded we transformed it to json
        const data = await response.json();

        const displayData = data.filter((value) => value.user_name === user);

        console.log(`data : ${data}`);
        console.log(`displayData : ${displayData}`);

        setInformation(displayData);
        setStatus(1);
      } catch {
        setStatus(2);
      }

      // here use the comparator to get the specific package id
    }

    fetchData();
  }, [user]);

  return (
    <>
      <div className="websiteStyle">
        <div className="introStyle">
          <div>
            <h2> Welcome to Express Delivery Jhon Doe </h2>
          </div>
          <div>
            <p>
              {' '}
              If you are expecting a delivery please enter your name and click
              the display packages button{' '}
            </p>
          </div>
          <div>
            <img
              className="picture"
              src={logo}
              alt="a logo for the transport company called express delivery"
            />
          </div>
          <div>
            <p> Please enter the name of the package owner </p>
          </div>
          <div>
            <input ref={inputUser} placeholder="try: Jhon Doe" />
            <button
              className="button"
              onClick={() => {
                const enteredUser = inputUser.current.value;
                setUser(enteredUser);
              }}
            >
              {' '}
              display packages{' '}
            </button>
          </div>
        </div>

        <div className="packageStyle">
          <div>
            <h3>Packages will be displayed here: </h3>
            <hr />
          </div>

          <div>
            {status === 0 ? <p>Loading...</p> : null}
            {status === 1 &&
              information &&
              information.map((item) => {
                return (
                  <div key={item.id}>
                    {`Package status is ${item.status}
                   and its location is ${item.location_name}
                    and time of delivery is ${item.eta} with a waybill number of ${item.id}`}
                    <p></p>
                  </div>
                );
              })}
            {status === 2 ? <p>Sorry we cannot find your package</p> : null}
          </div>
        </div>
      </div>
    </>
  );
}
