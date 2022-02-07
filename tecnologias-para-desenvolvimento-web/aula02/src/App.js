import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: "Pedro Moreira",
            valor1: 0,
            valor2: 0,
            contador: 0,
            total: 0
        }
        this.aumentar = this.aumentar.bind(this);
    }

    aumentar() {
        console.log("aumentou");
        let state = this.state;
        state.contador += 1;
        this.setState(state);
    }

    render() {
        return (
            <div>
                {this.state.nome} <br/>
                <button onClick={this.aumentar}>+</button>
                <br/>
                {this.state.contador}
            </div>
        )
    }

}

export default App;
