import React, { useState } from 'react'

const PostMethodAPI = () => {
    const [name,setName] = useState(" ")
    const [email,setEmail] = useState(" ")
    const [mobile,setMobile] = useState(" ")
    function saveUser()
    {
        console.log(name)
        console.log(email)
        console.log(mobile)

        let data = {name,email,mobile}
        fetch("https://dummyjson.com/products",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            console.log("result")
        })
    }
  return (
    <div className='App'>
        <h2>
        Post API Example

        </h2>
        <input type='text' name='name' value={name}   onChange={(e)=>{setName(e.target.value)}} /> <br/> <br/>
        <input type='text' name='name' value={email}  onChange={(e)=>{setEmail(e.target.value)}} /> <br/> <br/>
        <input type='text' name='name' value={mobile} onChange={(e)=>{setMobile(e.target.value)}} /> <br/> <br/>
        <button type='button' onClick={saveUser}>Save New User </button>
        </div>
  )
}

export default PostMethodAPI