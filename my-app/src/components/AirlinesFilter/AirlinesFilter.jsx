import React, { useEffect, useState } from "react";
import AirlineCheckbox from "../AirlineCheckbox";
import classes from "./AirlineFilter.module.css";

export default function AirlinesFilter(props) {
  
  const allFlights = [...props.allFlights];
  const unique = allFlights.map((item) => (item = item.flight.carrier.caption));
  let allAirlines = [...new Set(unique)];
  let allAirlinesCheck = {};
  allAirlines.forEach((item) => {
    allAirlinesCheck[item] = true;
  });

  const [allAirlinesState, setAllAirlinesState] = useState(allAirlinesCheck);

  useEffect(() => {
   props.getAirlinesFilter(allAirlinesState)
  }, [allAirlinesState])

  const isChecked = (airline, check) => {
    const obj = {...allAirlinesState};
      obj[airline] = check
      setAllAirlinesState(obj);
  };

  return (
    <div className={classes.AirlinesFilter}>
      <div>Авиалинии</div>
      {allAirlines.map((airline) => (
        <AirlineCheckbox
          airline={airline}
          key={airline}
          isChecked={isChecked}
        />
      ))}
    </div>
  );
}
