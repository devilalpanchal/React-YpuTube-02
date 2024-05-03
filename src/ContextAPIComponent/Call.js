import React from 'react';
import { CommanContext } from './CommanContext';

class Call extends React.Component {
    render() {
        return (
            <div className='App'>
                <CommanContext.Consumer>
                    {({ color }) => (
                        <h3 style={{ backgroundColor: color }}>helloContext</h3>
                    )}
                </CommanContext.Consumer>
            </div>
        );
    }
}

export default Call;
