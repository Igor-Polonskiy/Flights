import React, { useState } from "react";
import "./styles/App.css";
import flightList from "./flights.json";
import FlightList from "./components/FlightList";
import Filter from "./components/Filter/Filter";

function App() {
  const [flights] = useState(flightList.result.flights);
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
      { filterFlights.length ? 
        <FlightList flights={filterFlights}></FlightList>
        :
        <h1 style={{width: '600px', textAlign: 'center', marginTop: '40px'}}>Нет рейсов по заданным параметрам</h1>
      }
      </main>
    </div>
  );
}

export default App;
