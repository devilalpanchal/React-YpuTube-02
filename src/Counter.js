import { useScrollTrigger } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    const [input, setInput] = useState(0)
    return (
        <>
            <div className='App'>
                <h1>
                    Counter {input}
                </h1>
                <button onClick={(() => setInput(input + 1))}>plus</button> <br />
                <button onClick={(() => setInput(input ? input - 1 : 0))}>minus</button> <br />
            </div>
        </>
    )
}

export default Counter