import React from 'react';

import DisplayPackages from '../molecules/DisplayPackages';
import Maps from '../molecules/Map';

import information from '../../data/data.json';

export default function GoogleMap({ long, lat }) {
  console.log(`information: ${information}`);

  return (
    <>
      <h1>This is the Location Page</h1>
      <Maps longitude={long} latitude={lat} />
    </>
  );
}
