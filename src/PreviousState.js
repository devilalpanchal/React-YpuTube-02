import React, { useState } from 'react'

const PreviousState = () => {
    const [data, setData] = useState(0)
    function previousValue() {
        let rand = Math.floor(Math.random() * 10)
        setData((pre) => {
            console.log(pre)
            if (pre < 5) {
                alert(" low value")
            }
            return rand;
        })
    }
    function prePlusValue() {

        for (let index = 0; index < 5; index++) {
            setData((pre) => pre + 1)
        }

    }
    return (
        <div className='App'>
            <h1>
                PreviousState {data}
            </h1>
            <button onClick={() => setData(data + 1)}>Update </button> <br /> <br />
            <button onClick={() => setData(Math.floor(Math.random() * 10))}>Update Random </button> <br /> <br />
            <button onClick={previousValue}>Check Previous Value</button>  <br /> <br />
            <button onClick={prePlusValue}>Check Pre plus current value</button> <br /> <br />
        </div>
    )
}

export default PreviousState
