import React, { useState, useEffect } from 'react';

export default function Home() {
  //custom hook from useState and useEffect hooks

  return (
    <>
      <div className="pageStyle">
        <p> Welcome to Express Delivery </p>

        <p>
          {' '}
          If you are expecting a delivery please enter your package ID and click
          "find"{' '}
        </p>
        <img className="picture"
          src="../../artwork/7028de95-3f1c-4817-ac8e-846941592c57_200x200.png"
          alt="a logo for the transport company called express delivery"
         
        />
        <p> Please enter your package ID below </p>
        <input placeholder="packageID" />
        <button />
      </div>
    </>
  );
}
