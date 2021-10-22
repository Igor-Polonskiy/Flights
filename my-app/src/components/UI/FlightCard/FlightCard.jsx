import React, { useState, useEffect } from "react";
import classes from "./FlightCard.module.css";
import FlightDirection from "../FlightDirection/FlightDirection";

export default function FlightCard(flight) {
  const [curFlight] = useState(flight.flight.flight);
  const [segments] = useState(curFlight.legs[0].segments.length);
  const [depDate, setDepDate] = useState(
    new Date(curFlight.legs[0].segments[0].departureDate)
  );
  const [arrDate, setArrDate] = useState(
    new Date(
      { segments } > 1
        ? curFlight.legs[0].segments[1].arrivalDate
        : curFlight.legs[0].segments[0].arrivalDate
    )
  );

  console.log(flight);
  return (
    <div>
      <div className={classes.cardHeader}>
        <div>{flight.flight.flight.carrier.caption}</div>
        <div className={classes.headerLeft}>
          <div className={classes.headerPrice}>
            {curFlight.price.totalFeeAndTaxes.amount}
            {curFlight.price.totalFeeAndTaxes.currency}
          </div>
          <div className={classes.headerPasangers}>
            Стоимость для одного взрослого пассажира
          </div>
        </div>
      </div>
      <FlightDirection leg={curFlight.legs[0]} />
      <FlightDirection leg={curFlight.legs[1]} />
      <button className={classes.selectBtn}>ВЫБРАТЬ</button>
    </div>
  );
}
