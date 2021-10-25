import React, { useState } from "react";
import AirlineCheckbox from "../AirlineCheckbox";
import classes from "./AirlineFilter.module.css";

export default function AirlinesFilter(props) {
  let arr = [...props.allFlights];
  const unique = arr.map((item) => (item = item.flight.carrier.caption));
  let airlines = [...new Set(unique)];
  let airobj = {};
  airlines.forEach((item) => {
    airobj[item] = false;
  });

  const [air, setAirlines] = useState(airobj);

  const isChecked = (airline, check) => {
    const obj = air;
      obj[airline] = check
    setAirlines(obj);
    console.log(obj);
  };

  return (
    <div className={classes.AirlinesFilter}>
      <div>Авиалинии</div>
      {airlines.map((airline) => (
        <AirlineCheckbox
          airline={airline}
          key={airline}
          isChecked={isChecked}
        />
      ))}
    </div>
  );
}
