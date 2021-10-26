import React, { useState } from "react";
import classes from './PriceFilter.module.css'


export default function PriceFilter(props) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(40000);

  const submit = (e) =>{
    e.preventDefault()
    console.log('submit')
    props.getPrice(minPrice, maxPrice)
  }

  return (
    <form onSubmit={submit} className ={classes.form}>
    <div>Цена</div>
      <label>
        от <input type="number"  min="0"  value= {minPrice}  onChange={e => setMinPrice(e.target.value )}></input>
      </label>
      <label>
        до <input type="number"  min="0" value= {maxPrice}  onChange={e => setMaxPrice(e.target.value )}></input>
      </label>
      <input type="submit" style={{ whidth: 1,height:1, position: 'absolute', left: -9999  }} />
    </form>
  );
}
