import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import Cookie from './assets/cookie.jpg'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }

        this.phrases = [
            'A vida trará coisas boas se tiveres paciência',
            'Não compense na ira o que lhe falta na razão',
            'A maior de todas as torres começa no solo',
            'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos',
            'Não há que ser forte. Há que ser flexível',
            'Quem olha para fora sonha; quem olha para dentro acorda',
            'Todo mundo é capaz de denominar uma dor, exceto quem a sente',
            'É mais fácil conseguir o perdão do que a permissão',
            'Nós somos o que pensamos',
            'Conhecimento é a única virtude e ignorância é o único vício'
        ];

        this.changeData = this.changeData.bind(this)
    }

    changeData(e) {
        let state = this.state;
        let randomNumber = Math.floor(Math.random() * 10);
        state.message = this.phrases[randomNumber];
        this.setState(state);
    }

    render() {
        return (
            <div>
                <img src={Cookie} alt=""/><br/>
                <button onClick={this.changeData}>Crack!</button>
                <br/>
                <p>{this.state.message}</p>
            </div>
        )
    }

}

export default App;
