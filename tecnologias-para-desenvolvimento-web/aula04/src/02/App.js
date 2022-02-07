import React, {Component} from 'react';


import Imagem from './img/gatos.png';
import Curtida from './img/curtida.png';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            senha: '',
            mensagem: ''

        }
        this.acessar = this.acessar.bind(this);
    }

    acessar(event) {
        let state = this.state;

        if (state.email == "eduardo" && state.senha == "123") {
            state.mensagem = "Acessado com sucesso!";
            this.setState(state);
        } else {
            state.mensagem = "Usuario ou senha incorretos";
            this.setState(state);
        }
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.acessar}>
                    <h3>Login</h3>
                    <input type="text" placeholder="Email" onChange={(e) => this.setState({email: e.target.value})}/>
                    <br/>
                    <input type="password" placeholder="Senha"
                           onChange={(e) => this.setState({senha: e.target.value})}/> <br/>
                    <button type="submit">Acessar</button>
                    <br/>
                    {this.state.mensagem}
                </form>
            </div>
        )

    }
}

export default App;
