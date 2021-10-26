import React from "react";
import classes from "./FlightDirection.module.css";

export default function FlightDirection(props) {
  const leg = props.leg;
  const segments = leg.segments.length;
  const depDate = new Date(leg.segments[0].departureDate);
  const arrDate = new Date(
    segments > 1 ? leg.segments[1].arrivalDate : leg.segments[0].arrivalDate
  );

  return (
    <div className={classes.flight}>
      <div className={classes.flightDirection}>
        <div className={classes.flightFrom}>
          {leg.segments[0].departureCity
            ? leg.segments[0].departureCity.caption
            : ""}
          , {leg.segments[0].departureAirport.caption}
          <span>({leg.segments[0].departureAirport.uid})&#129042;</span>
        </div>
        {segments > 1 ? (
          <div className={classes.flightTo}>
            {leg.segments[1].arrivalCity
              ? leg.segments[1].arrivalCity.caption
              : ""}
            ,{leg.segments[1].arrivalAirport.caption}
            <span>({leg.segments[1].arrivalAirport.uid})</span>)
          </div>
        ) : (
          <div className={classes.flightTo}>
            {leg.segments[0].arrivalCity.caption},
            {leg.segments[0].arrivalAirport.caption}
            <span>({leg.segments[0].arrivalAirport.uid})</span>
          </div>
        )}
      </div>
      <hr/>
      <div className={classes.time}>
        <div className={classes.depTime}>
          {depDate.getHours()}:{depDate.getMinutes() < 10 ? 0 : ""}
          {depDate.getMinutes()}
          <span>
            {" "}
            {depDate.toLocaleString("default", {
              weekday: "short",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>
        <div className={classes.duration}>
          {Math.floor(leg.duration / 60)} ч {(leg.duration % 60) < 10 ? 0:""}{leg.duration % 60} мин
        </div>
        <div className={classes.arrTime}>
          <span>
            {" "}
            {arrDate.toLocaleString("default", {
              weekday: "short",
              month: "short",
              day: "numeric",
            })}
          </span>
          {arrDate.getHours()}:{arrDate.getMinutes() < 10 ? 0 : ""}
          {arrDate.getMinutes()}
        </div>
      </div>
      <div className={classes.segments}>
        { segments  > 1 ?  <div>{segments - 1} пересадка</div>:<hr />}
      </div>
      <div className={classes.airlines}>
        Pейс выполняет: {leg.segments[0].airline.caption}
      </div>
    </div>
  );
}
