import React, { useEffect, useRef } from 'react'

const Use = (props) => {

    const lastVal = useRef();
    useEffect(() => {
        lastVal.current = props.count
    })
    const preprobs = lastVal.current
    return (
        <div>
            <h2>Current Value {props.count}</h2>
            <h2>Previous Value {preprobs}</h2>
            <h1 style={{color:"blue"}}>Difference   {props.count-preprobs}</h1>
        </div>
    )
}

export default Use