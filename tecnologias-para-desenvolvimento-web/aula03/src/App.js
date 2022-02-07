import React, {Component} from 'react';
import {Button} from '@material-ui/core';
import './App.css';

class App extends Component {

    yup() {
        console.log("Not Deleted");
    }

    nop() {
        console.log("Not Erased")
    }

    render() {
        return (

            <div className={'container'}>
                <h2>Do you want to delete this movie?</h2>
                <Button variant="outlined" color="secondary" onClick={this.yup}>Yup</Button>
                <br/>
                <Button variant="outlined" color="primary" onClick={this.nop}>Nop</Button>
            </div>
        )
    }
}

export default App;
