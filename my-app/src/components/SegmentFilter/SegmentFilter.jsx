import React, { useState, useEffect } from "react";
import classes from "./SegmentFilter.module.css";

export default function SegmentFilter(props) {
  const [oneSegmentchecked, setOneSegmentChecked] = useState(false);
  const [twoSegmentchecked, setTwoSegmentChecked] = useState(false);

  useEffect(() => {
    props.getSegmetFilter(oneSegmentchecked, twoSegmentchecked);
  }, [oneSegmentchecked, twoSegmentchecked]);

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
