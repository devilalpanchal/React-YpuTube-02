import React, { useEffect, useState } from 'react'

const ApiFEtching = () => {
    const [data, setData] = useState([])
    const [value, setValue] = useState([])
    function handleChange(e) {
        setValue(e.target.value)
    }
    useEffect(() => {
        fetch(`https://disease.sh/v3/covid-19/countries/${value}`).then((result) =>
            result.json().then((res) => {
                setData(res)
            })
        )
    }, [value])
    return (
        <div className='App'>
            <h3>
                COVID - 19 CASES COUNTRY WISE
            </h3>
            <input className='input' type='text' placeholder='Enter Country name' onChange={handleChange} value={value} /> <br />
            <button> Search </button>
            {
                <div className='name' >
                    <h5>Country Name: {data.country}</h5>
                    <p>Cases : {data.cases}</p>
                    <p>Deaths :  {data.deaths}</p>
                    <p>Recoverd :  {data.recovered}</p>
                    <p>Today Cases :  {data.todayCases}</p>
                    <p>Today Deaths :  {data.todayDeaths}</p>
                    <p>Today Recovered :  {data.todayRecovered}</p>
                </div>
            }
        </div>
    )
}

export default ApiFEtching