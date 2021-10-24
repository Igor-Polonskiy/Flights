import React, { useState, useEffect } from "react";

export default function PriceFilter() {
  const [price, setPrice] = useState([0, 0]);

  return (
    <div>
    <div>Цена</div>
      <label>
        от <input type="text" value="0"></input>
      </label>
      <label>
        до <input type="text" value="40000"></input>
      </label>
    </div>
  );
}
