import React from "react";
// import { Button } from "react-bootstrap";
import { Button } from "react-bootstrap";

function MapFucn() {
    const Student = [
        { id:'1', name: "devilal", contact: 25852255, email: "DEvila@gmai;l.com" },
        { id:'2', name: "jeet", contact: 25852255, email: "DEvila@gmai;l.com" },
        { id:'3', name: "devi", contact: 25852255, email: "DEvila@gmai;l.com" },
        { id:'4', name: "mayank", contact: 25852255, email: "DEvila@gmai;l.com" },
        { id:'5', name: "navneet", contact: 25852255, email: "DEvila@gmai;l.com" },
        { id:'6', name: "dk", contact: 25852255, email: "DEvila@gmai;l.com" },
        { id:'7', name: "satsh", contact: 25852255, email: "DEvila@gmai;l.com" },
    ]
    function HandleChange(id){
        alert(id)
        fetch('url/${id}',{
            method:'    DELETE'
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
            })
        })
    }
    return (

        <div className="Bpp">
            <h1>Map Method  Using Array</h1>
            <table className="app table" border={1}>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Contact</td>
                    <td>Email</td>
                </tr>
                {
                    Student.map((item) =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.contact}</td>
                            <td>{item.email}</td>
                            <td><button variant="secondary" onClick={()=>HandleChange(item.id)}> delete </button> {' '}</td>
                        </tr>
                    )
                }

            </table>
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="danger">Danger</Button>{' '}
            <Button variant="info">Info</Button>{' '}
            <Button variant="light">Light</Button>{' '}
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>
        </div>
    )
}
export default MapFucn;