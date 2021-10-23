import React, { useState, useEffect } from "react";
import SortFilter from "../SortFilter/SortFilter";

export default function Filter(props) {
  

  return (
    <div>
    <SortFilter  props = {props.getFilterFlights} flights={props.flights}/>
    </div>
  );
}
