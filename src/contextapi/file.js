import React from 'react'
import { data } from "./home"
const File = () => {
    return (
        <data.Consumer>
            {
                name => (
                    <h1>my name is {name}</h1>
                )

            }
        </data.Consumer>
    )
}

export default File