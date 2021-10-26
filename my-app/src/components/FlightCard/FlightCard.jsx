import React, { useState } from "react";
import classes from "./FlightCard.module.css";
import FlightDirection from "../FlightDirection/FlightDirection";

export default function FlightCard(flight) {
  const [curFlight] = useState(flight.flight.flight);

  return (
    <div>
      <div className={classes.cardHeader}>
        <div>{curFlight.carrier.caption}</div>
        <div className={classes.headerLeft}>
          <div className={classes.headerPrice}>
            {curFlight.price.total.amount}
            {curFlight.price.total.currency}
          </div>
          <div className={classes.headerPasangers}>
            Стоимость для одного взрослого пассажира
          </div>
        </div>
      </div>
      <FlightDirection leg={curFlight.legs[0]} />
      <div className={classes.bluLine}></div>
      <FlightDirection leg={curFlight.legs[1]} />
      <button className={classes.selectBtn}>ВЫБРАТЬ</button>
    </div>
  );
}
