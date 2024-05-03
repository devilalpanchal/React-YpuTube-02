import React, { useState } from 'react'

const StateWithObject = () => {
    const [data,setData] =useState({name:'devilal',age:23})
    return (
        <div className='app'>
            <h1> State With Object</h1>
            <input type='text' value={data.name} onChange={(e)=>setData({...data,name:e.target.value})} /> <br/> <br/>
            <input type='text' value={data.age}  onChange={(e)=>setData({...data,age:e.target.value})} />  <br/> <br/>
            

            {/* another way it is complex
            <input type='text' value={data.name} onChange={(e)=>setData({age:data.age,name:e.target.value})} /> <br/> <br/>
            <input type='text' value={data.age}  onChange={(e)=>setData({name:data.name,age:e.target.value})} />  <br/> <br/> */}
            <h2>{data.name}</h2>
            <h2>{data.age}</h2>
        </div>
    )
}

export default StateWithObject