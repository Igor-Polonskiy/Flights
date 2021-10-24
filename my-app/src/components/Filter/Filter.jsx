import React, { useState, useEffect } from "react";
import PriceFilter from "../PriceFilter/PriceFilter";
import SegmentFilter from "../SegmentFilter/SegmentFilter";
import SortFilter from "../SortFilter/SortFilter";

export default function Filter(props) {
  const [filterFlights, setFilterFlights] = useState(props.flights);
  const [sortValue, setSortValue] = useState("priceUp");
  const [sortedFlights, setSortedFlights] = useState(props.flights);
  const [oneSegmentchecked, setOneSegmentChecked] = useState(false);
  const [twoSegmentchecked, setTwoSegmentChecked] = useState(false);
  const [price,setPrice] = useState([0,0])

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
  }, [oneSegmentchecked, twoSegmentchecked]);

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
    let filterflights = flights;

    
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
      filterflights = flights;
    }

    setFilterFlights(filterflights);
  };

  const getSortValue = (value) => {
    setSortValue(value);
  };
  const getSegmetFilter = (one, two) => {
    setOneSegmentChecked(one);
    setTwoSegmentChecked(two);
  };
  const getPrice = (price)=>{
    setPrice(price)
  }


  return (
    <div>
      <SortFilter getSortValue={getSortValue} />
      <SegmentFilter getSegmetFilter={getSegmetFilter}></SegmentFilter>
      <PriceFilter getPrice={getPrice}></PriceFilter>
    </div>
  );
}
