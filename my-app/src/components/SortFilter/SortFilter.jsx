import React, { useState, useEffect }from "react";
import classes from "./SortFilter.module.css";

export default function SortFilter(props) {
  const [sortValue, setSortValue] = useState("priceUp");
  const [sortFlights, setSortFlights] = useState(props.flights);

  useEffect(() => {
    let flights = [...sortFlights];
    filter(flights);
    setSortFlights(flights);
  }, [sortValue]);

  useEffect(() => {
    props.props(sortFlights);
  }, [sortFlights]);

  const onChange = (e) => {
    setSortValue(e.target.value);
  };
  const filter = (sortFlights) => {
    if (sortValue === "priceUp") {
      console.log("priceUp");
      sortFlights.sort(
        (a, b) => a.flight.price.total.amount - b.flight.price.total.amount
      );
    }
    if (sortValue === "priceDown") {
      console.log("priceDown");
      sortFlights.sort(
        (a, b) => b.flight.price.total.amount - a.flight.price.total.amount
      );
    }
    if (sortValue === "time") {
      console.log("time");
      sortFlights.sort(
        (a, b) => a.flight.legs[0].duration - b.flight.legs[0].duration
      );
    }
  };

  return (
    <div className={classes.sort}>
      <div>Сортировать</div>

      <label for="contactChoice1">
        <input
          type="radio"
          id="priceUp"
          name="sort"
          value="priceUp"
          checked={sortValue === "priceUp"}
          onChange={onChange}
        />{" "}
        - По возростанию цены
      </label>

      <label for="contactChoice2">
        <input
          type="radio"
          id="priceDown"
          name="sort"
          value="priceDown"
          checked={sortValue === "priceDown"}
          onChange={onChange}
        />{" "}
        - По убыванию цены
      </label>

      <label for="contactChoice3">
        {" "}
        <input
          type="radio"
          id="time"
          name="sort"
          value="time"
          checked={sortValue === "time"}
          onChange={onChange}
        />{" "}
        - По времени в пути
      </label>
    </div>
  );
}
