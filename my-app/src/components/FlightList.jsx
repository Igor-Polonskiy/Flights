import React from 'react'
import FlightCard from './UI/FlightCard/FlightCard'

export default function FlightList({flights}) {
    return (
        <div>
            {flights.map((flights) =>
                <FlightCard flight ={flights} key={flights.flightToken}></FlightCard>
            )}
        </div>
    )       
}
