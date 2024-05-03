import React, { useState } from 'react'

const PreFilledForm = () => {
    const Student = [
        { id:'1', name: "devilal", contact: 25852255, email: "DEvila@gmai;l.com" },
        { id:'2', name: "jeet", contact: 25852255, email: "DEvila@gmai;l.com" },
        { id:'3', name: "devi", contact: 25852255, email: "DEvila@gmai;l.com" },
        { id:'4', name: "mayank", contact: 25852255, email: "DEvila@gmai;l.com" },
        { id:'5', name: "navneet", contact: 25852255, email: "DEvila@gmai;l.com" },
        { id:'6', name: "dk", contact: 25852255, email: "DEvila@gmai;l.com" },
        { id:'7', name: "satsh", contact: 25852255, email: "DEvila@gmai;l.com" },
    ]
    const [name,setName] = useState()
    const [email,setEmail] = useState(" ")
    const [mobile,setMobile] = useState(" ")

    fetch("https://dummyjson.com/products",{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
        },
        body:JSON.stringify()
    }).then((result)=>{
        // result.JSON().then((resp)=>{
        //     console.log("resp",resp)

        // })
    })
  return (
    <div className='app'>
        <h1>
            Pre Filled Form
        </h1>
        <table style={{marginLeft:350}} className="app " border={1}>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Contact</td>
                    <td>Email</td>
                    <td>Operation</td>
                </tr>
                {
                    Student.map((item) =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.contact}</td>
                            <td>{item.email}</td>
                            <td><button > delete </button> </td>
                        </tr>
                    )
                }

            </table>
<div>
    <input type='text' value={name} /> <br/> <br/>
    <input type='text'/> <br/> <br/>
    <input type='text'/> <br/> <br/>
    <button>User Update  </button>
</div>

    </div>
  )
}

export default PreFilledForm