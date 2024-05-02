import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import User from './User'
const DyanamicRoute = () => {
    const users = [
        { id: 1, name: "Devilal", email: "devi@heloogmail.com" },
        { id: 2, name: "Dharmendra", email: "DK@heloogmail.com" },
        { id: 3, name: "Mayank", email: "Garg@heloogmail.com" },
        { id: 4, name: "Anand", email: "Anand@heloogmail.com" },
        { id: 5, name: "Mohan", email: "Pk@heloogmail.com" },
        { id: 6, name: "Devi", email: "D@heloogmail.com" },
    ]

    return (
        <div className='apnaUser'>
            <Router>
                <h1>
                    Dyanamic Routing
                </h1>
                {
                    users.map((item, index) =>
                        <div key={index}>
                            <Link to={"/user/" + item.id} > <h2 >{item.name}</h2></Link>

                            {/* <User data={item} /> */}
                        </div>

                    )
                }
                <User />
                {/* <Route path='/user'>{<User/>}</Route> */}
            </Router>
        </div>
    )
}

export default DyanamicRoute