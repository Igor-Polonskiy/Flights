import React, { useState, useEffect } from "react";
import classes from "./SegmentFilter.module.css";

export default function SegmentFilter(props) {
  const [oneSegmentchecked, setOneSegmentChecked] = useState(false);
  const [twoSegmentchecked, setTwoSegmentChecked] = useState(false);

  useEffect(() => {
    props.getSegmetFilter(oneSegmentchecked, twoSegmentchecked);
  }, [oneSegmentchecked, twoSegmentchecked]);
  /*
  useEffect(() => {
      if(oneSegmentchecked || twoSegmentchecked){
        props.getFilterFlights(filterFlights)
      }else {
        props.getFilterFlights(flights)
      }
  }, [filterFlights, oneSegmentchecked,  twoSegmentchecked]);

  const filter = (flights) => {
      console.log('filter')
      
    if (oneSegmentchecked) {
        let arr = flights.filter((flight) =>flight.flight.legs[0].segments.length < 2)
        arr = arr.filter((flight) =>flight.flight.legs[1].segments.length < 2)
        setFilterFlights(arr)
      
    }
    if (twoSegmentchecked) {
        let arr = flights.filter((flight) =>flight.flight.legs[0].segments.length > 1)
        setFilterFlights(arr)
      
    }
    console.log( filterFlights[0].flight.legs[0].segments.length)
  };

  
  };*/

  const onChange0 = (e) => {
    setOneSegmentChecked(!oneSegmentchecked);
  };
  const onChange1 = (e) => {
    setTwoSegmentChecked(!twoSegmentchecked);
  };

  return (
    <div className={classes.segment}>
      <div>Фильтровать</div>
      <label>
        <input
          type="checkbox"
          id="twoOneSegmentChecked"
          checked={twoSegmentchecked}
          onChange={onChange1}
        />{" "}
        -1 пересадка
      </label>

      <label>
        <input
          type="checkbox"
          id="setOneSegmentChecked"
          checked={oneSegmentchecked}
          onChange={onChange0}
        />{" "}
        - без пересадок
      </label>
    </div>
  );
}
