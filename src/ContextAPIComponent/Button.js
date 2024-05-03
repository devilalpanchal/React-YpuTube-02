import React from 'react';
import { CommanContext } from './CommanContext';

function Button() {
    return (
        <div className='App'>
            <CommanContext.Consumer>
                {({ updateColor }) => (
                    <div>
                        <button onClick={() => updateColor("yellow")}>Update Color to Yellow</button>
                        <button onClick={() => updateColor("blue")}>Update Color to Blue</button>
                    </div>
                )}
            </CommanContext.Consumer>
        </div>
    );
}

export default Button;
