import React, {useState} from 'react'
import FlightCard from './FlightCard/FlightCard'

export default function FlightList({flights}) {
    const [items, setItems] = useState(3)

        const onClick= () =>{
        setItems(items+3)
    }
    
    return (
        <div>
            {flights.slice(0, items).map((flights) =>
                <FlightCard flight ={flights} key={flights.flightToken}></FlightCard>
            )}
                {flights.length > items ?
                    <button 
                    onClick={onClick}
                    style= {{width:'100%', height: '30px', margin: '-20px auto 30px'}}
                    >показать еще</button>
                    : null
                }
        </div>
    )       
}
