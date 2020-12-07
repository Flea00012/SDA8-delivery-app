import React from 'react';

import DisplayPackages from '../molecules/DisplayPackages';

import information from '../../data/data.json';

export default function LandingPage() {
  console.log(`information: ${information}`);

  return (
    <>
      <h1>This is the LandingPage</h1>
      <DisplayPackages data={information} />
    </>
  );
}
