import React, { createContext } from 'react'
const data = createContext();
const Home = () => {
    let name = "devilalpanchal"
    return (
        <div>

            <data.Provider value={name}>
                <h2>Hello {name}</h2>
            </data.Provider>

        </div>
    )
}

export default Home
export { data }