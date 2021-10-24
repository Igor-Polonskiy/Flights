import React, { useState, useEffect } from "react";
import classes from "./SortFilter.module.css";

export default function SortFilter(props) {
  const [sortValue, setSortValue] = useState("priceUp");

  useEffect(() => {
    console.log(props)
    props.getSortValue(sortValue);
  }, []);

  useEffect(() => {
    props.getSortValue(sortValue);
  }, [sortValue]);

  const onChange = (e) => {
    setSortValue(e.target.value);
  };

  return (
    <div className={classes.sort}>
      <div>Сортировать</div>

      <label>
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

      <label>
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

      <label>
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
