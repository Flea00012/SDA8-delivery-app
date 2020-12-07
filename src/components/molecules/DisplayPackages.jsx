import React, { useState } from 'react';

import DeliveryCard from '../atoms/DeliveryCard.jsx';

import Grid from '@material-ui/core/Grid';
import '../../css/styles.css';

export default function DisplayPackages({ data }) {
  const [fetchstatus, setFetchstatus] = useState(0);

  console.log('info: ' + data);
  console.log('fetchstatus: ' + fetchstatus);

  const Cards = data.map((item) => {
    return (
      <Grid container spacing={0.5} justify="center">
        <Grid item xs={12} sm={6} md={4}>
          <DeliveryCard key={item.id} data={item} />
        </Grid>
      </Grid>
    );
  });

  return (
    <>
      {/* <Grid container spacing={10} justify="center">
        <Grid item xs={4}>*/}

      <div className="deliveries">{Cards}</div>

      {/* </Grid>
  </Grid>*/}

      {/*<div className="packageStyle">
        <div>
          {status === 0 ? <p>Loading...</p> : null}
          {status === 1 &&
            information &&
            information.map((item, count) => {
              return (
                <div className="packages">
                  <div key={item.id}>
                    {`# ${count} - Package status is: ${item.status} `}
                    <p></p>
                    {`Waybill number is: ${item.id}  `}
                    <p></p>
                    {`Present Location is: ${item.location_name} `}
                    <p></p>
                    {`Date of delivery is ${item.eta}`}
                    <p></p>
                  </div>
                </div>
              );
            })}
          {status === 2 ? <p>Sorry we cannot find your package</p> : null}
        </div>
          </div>*/}
    </>
  );
}
