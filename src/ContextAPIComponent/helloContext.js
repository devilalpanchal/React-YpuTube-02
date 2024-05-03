import React from 'react';
import { CommanContext } from './CommanContext';
import Call from './Call';
import { Button } from 'react-bootstrap';
import Fotter from './Fotter';
import Header from './Header';

class HelloContext extends React.Component {
    constructor() {
        super();
        this.state = {
            color: "green",
            updateColor: this.updateColor
        };
    }

    updateColor = (color) => {
        this.setState({
            color: color
        });
    }

    render() {
        return (
            <div className='App'>
                <CommanContext.Provider value={this.state}>
                    <h3>helloContext</h3>
                    <Header />
                    <Call />
                    <Button onClick={() => this.state.updateColor("red")}>Change Color</Button>
                    <Fotter />
                </CommanContext.Provider>
            </div>
        );
    }
}

export default HelloContext;
