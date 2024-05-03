// import React from 'react'
// import { CommanContext } from './CommanContext'
// class Header extends React.Component {
    
//     render() {
//         return (
//             <div className='App'>
//                 <CommanContext.Consumer>
//                     {
//                         ({color})=>{
//                             <h3 style={{backgroundColor:color}}>  helloContext </h3>
//                         }
//                     }
//                 </CommanContext.Consumer>
//             </div>

//         )
//     }

// }
// export default Header

import React from 'react';
import { CommanContext } from './CommanContext'

class Header extends React.Component {
    render() {
        return (
            <div className='App'>
                <CommanContext.Consumer>
                    {({ color }) => (
                        <h3 style={{ backgroundColor: color }}>Header</h3>
                    )}
                </CommanContext.Consumer>
            </div>
        )
    }
}

export default Header;
