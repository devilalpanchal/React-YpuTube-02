import React from 'react';
import { CommanContext } from './CommanContext';

class Fotter extends React.Component {
    render() {
        return (
            <div className='App'>
                <CommanContext.Consumer>
                    {({ color }) => (
                        <h3 style={{ backgroundColor: color }}>Fotter</h3>
                    )}
                </CommanContext.Consumer>
            </div>
        );
    }
}

export default Fotter;
