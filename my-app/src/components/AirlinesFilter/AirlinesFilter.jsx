import React, { useState, useEffect} from "react";
import AirlineCheckbox from "../AirlineCheckbox";
import classes from "./AirlineFilter.module.css";

export default function AirlinesFilter(props) {
  let arr = [...props.allFlights];
  const unique = arr.map((item) => (item = item.flight.carrier.caption));
  let airlines = [...new Set(unique)];
  let airobj = {};
  airlines.forEach((item) => {
    airobj[item] = true;
  });

  const [air, setAirlines] = useState(airobj);

  useEffect(() => {
    props.getAirlinesFilter(air)
  }, [air])

  const isChecked = (airline, check) => {
    const obj = air;
      obj[airline] = check
    setAirlines(obj);
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
