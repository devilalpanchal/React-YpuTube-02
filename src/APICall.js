import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom'

const APICall = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products').then((results) =>
            results.json().then((res) => {
                setData(res)
            })
        )
    }, [])
    console.log(data)
    return (
        <div className='apnaUser'>
            <h3>Api Calling</h3>
            {/* {
                data.map((item,i) =>{
                    return(
                        <div key={i}> {item.id}</div>
                )
                }
                
                )
            } */}
        </div>
    )
}

export default APICall
