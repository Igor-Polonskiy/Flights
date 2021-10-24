import React, { useState, useEffect } from "react";

export default function PriceFilter(props) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(40000);

  useEffect(() => {
    props.getPrice(minPrice, maxPrice)
  }, [minPrice, maxPrice])

  return (
    <div>
    <div>Цена</div>
      <label>
        от <input type="number"  min="0"  value= {minPrice}  onChange={e => setMinPrice(e.target.value )}></input>
      </label>
      <label>
        до <input type="number"  min="0" value= {maxPrice}  onChange={e => setMaxPrice(e.target.value )}></input>
      </label>
    </div>
  );
}
