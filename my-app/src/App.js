import React, { useState } from "react";
import "./styles/App.css";
import flightList from "./flights.json";
import FlightList from "./components/FlightList";
import Filter from "./components/Filter/Filter";

function App() {
  const [flights, setFlights] = useState(flightList.result.flights);
  const [filterFlights, setFilterFlights] = useState(flights);
 
 
  const getFilterFlights = (resp) => {   
    setFilterFlights(resp)
  };

  return (
    <div className="App">
      <aside>
        <Filter getSortedFlights={getFilterFlights} flights={flights}></Filter>
      </aside>
      <main>
        <FlightList flights={filterFlights}></FlightList>
      </main>
    </div>
  );
}

export default App;
