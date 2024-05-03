import React, { useState } from 'react'
import Use from './Use'
const PreviousProps = () => {

    const [item, setItem] = useState(0)
    return (
        <div className='App'>
            <h1>
                PreviousProps {item}
            </h1>
            <button onClick={()=>setItem(Math.floor(Math.random()*10))}>Update PreProb</button>
            <Use count={item} />
        </div>
    )
}

export default PreviousProps