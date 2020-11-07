import React, { useState, useEffect } from 'react';

import logo from '../../artwork//markus-spiske-BPxkU4uPq6Y-unsplash.jpg';
import '../../css/styles.css';

export default function Home() {
  //custom hook from useState and useEffect hooks
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
     let x = fetch('/Users/leefowler/Documents/VSCode/SDA8-webdev/reactsda/delivery-app/src/data/data.json')
     .then(res => res.json())
     .then(data => console.log(data))

    
    return setItems(x);
  };

  return (
    <>
      <div className="pageStyle">
        <p> Welcome to Express Delivery </p>

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
        <input placeholder="packageID" />
        <button />

        <div>
          {fet}
        </div>
      </div>
    </>
  );
}
