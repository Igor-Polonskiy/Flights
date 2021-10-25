import React, {useEffect, useState} from 'react'

export default function AirlineCheckbox(props) {
    const [checked,setChecked] = useState(false)

    useEffect(() => {
        props.isChecked(props.airline, checked)
    }, [checked])

    const onChange = () =>{
        setChecked(!checked)
    }


    return (
        <lable style = {{marginTop: "10px"}}>
            <input type="checkbox" onChange={onChange} checked = {checked} ></input>
            {' '} {props.airline}
        </lable>
    )
}
