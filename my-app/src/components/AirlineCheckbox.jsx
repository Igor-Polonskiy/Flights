import React, {useEffect, useState} from 'react'

export default function AirlineCheckbox({isChecked, airline}) {
    const [checked,setChecked] = useState(true)

    useEffect(() => {
        console.log('render')
        isChecked(airline, checked)
    }, [checked])

    const onChange = () =>{
        setChecked(!checked)
        isChecked(airline, checked)
    }

    return (
        <label style = {{marginTop: "10px"}}>
            <input type="checkbox" onChange={onChange} checked = {checked} ></input>
            {' '} {airline}
        </label>
    )
}
