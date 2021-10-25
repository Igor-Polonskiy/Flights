import React, { useState, useEffect } from "react";
import AirlinesFilter from "../AirlinesFilter/AirlinesFilter";
import PriceFilter from "../PriceFilter/PriceFilter";
import SegmentFilter from "../SegmentFilter/SegmentFilter";
import SortFilter from "../SortFilter/SortFilter";
import classes from './Filter.module.css'


export default function Filter(props) {
  const [filterFlights, setFilterFlights] = useState(props.flights);
  const [sortValue, setSortValue] = useState("priceUp");
  const [sortedFlights, setSortedFlights] = useState(props.flights);
  const [oneSegmentchecked, setOneSegmentChecked] = useState(false);
  const [twoSegmentchecked, setTwoSegmentChecked] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(40000);
  const [airlinesFilter, setAirlinesFilter] = useState()

  useEffect(() => {
    let flights = [...filterFlights];
    sort(flights);
    setSortedFlights(flights);
  }, [sortValue]);

  useEffect(() => {
    let flights = [...filterFlights];
    sort(flights);
    setSortedFlights(flights);
  }, [filterFlights]);

  useEffect(() => {
    let flights = [...props.flights];
    filter(flights);
  }, [oneSegmentchecked, twoSegmentchecked, minPrice, maxPrice]);

  
  useEffect(() => {
    props.getSortedFlights(sortedFlights);
  }, [sortedFlights]);

  const sort = (flights) => {
    if (sortValue === "priceUp") {
      flights.sort(
        (a, b) => a.flight.price.total.amount - b.flight.price.total.amount
      );
    }
    if (sortValue === "priceDown") {
      flights.sort(
        (a, b) => b.flight.price.total.amount - a.flight.price.total.amount
      );
    }
    if (sortValue === "time") {
      flights.sort(
        (a, b) => a.flight.legs[0].duration - b.flight.legs[0].duration
      );
    }
  };

  const filter = (flights) => {
    console.log("filter");
    let filterflights = [...flights];

    
    if (oneSegmentchecked) {
      let arr = filterflights.filter(
        (flight) => flight.flight.legs[0].segments.length < 2
      );
      arr = arr.filter((flight) => flight.flight.legs[1].segments.length < 2);
      filterflights = [...arr];
    }
    if (twoSegmentchecked) {
      let arr = filterflights.filter(
        (flight) => flight.flight.legs[0].segments.length > 1
      );
      arr = arr.filter((flight) => flight.flight.legs[1].segments.length > 1)
      filterflights = [...arr];
    }
    if (oneSegmentchecked && twoSegmentchecked) {
      filterflights = [...flights];
    }

    filterflights = filterflights.filter(flight =>  +flight.flight.price.total.amount > minPrice);
    filterflights = filterflights.filter(flight =>  +flight.flight.price.total.amount < maxPrice)

    setFilterFlights(filterflights);
  };

 


  const getSortValue = (value) => {
    setSortValue(value);
  };
  const getSegmetFilter = (one, two) => {
    setOneSegmentChecked(one);
    setTwoSegmentChecked(two);
  };
  const getPrice = (min, max)=>{
    setMinPrice(min)
    setMaxPrice(max)
  }
const getAirlinesFilter = (airlines) =>{
  setAirlinesFilter(airlines)
}

  return (
    <div className={classes.filter}>
      <SortFilter getSortValue={getSortValue} />
      <SegmentFilter getSegmetFilter={getSegmetFilter}></SegmentFilter>
      <PriceFilter getPrice={getPrice}></PriceFilter>
      <AirlinesFilter allFlights = {props.flights} getAirlinesFilter={getAirlinesFilter}></AirlinesFilter>
    </div>
  );
}
