import React, { useState, useEffect } from 'react';

import logo from '../../artwork/7028de95-3f1c-4817-ac8e-846941592c57_200x200.png';
import '../../css/styles.css';

export default function Home() {
  //custom hook from useState and useEffect hooks
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      'https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get'
    );

    const items = await data.json();
      console.log(items.items)
    setItems(items.items);
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
        <>
          {items.map((item) => (
            <p key={item.itemid}> {item.name}</p>
          ))}
        </>
      </div>
    </>
  );
}
