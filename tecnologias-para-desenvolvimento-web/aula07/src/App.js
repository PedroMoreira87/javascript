import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import firebase from "./Firebase";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usuario: []
        }

        this.gravar = this.gravar.bind(this);
        this.listar = this.listar.bind(this);
    }

    gravar() {
        firebase.collection('usuario').add({
            nome: 'Pedro',
            sobrenome: 'Moreira'
        }).then(() => {
            console.log('Cadastrado com sucesso');
        }).catch((erro) => {
            console.log('Erro' + erro);
        });
    }

    listar() {
        firebase.collection("usuario").get()
            .then((snapshot) => {
                let lista = [];
                snapshot.forEach((item) => {
                    lista.push({
                        id: item.id,
                        nome: item.data().nome,
                        sobrenome: item.data().sobrenome
                    });
                });
                console.log(lista)
                this.setState({usuario: lista})
            });
    }

    componentDidMount() {
        firebase.collection('usuario').onSnapshot((snapshot) => {
            let lista = [];
            snapshot.forEach((item) => {
                lista.push({
                    id: item.id,
                    nome: item.data().nome,
                    sobrenome: item.data().sobrenome
                })
            })
            this.setState({usuario: lista})
        })
    }

    render() {
        return (
            <div>

                <h1>Firestore</h1>
                <button onClick={this.gravar}>Gravar</button>
                <br/><br/>
                <button onClick={this.listar}>Listar</button>
                <br/><br/>
                {
                    this.state.usuario.map((item) => {
                        return (
                            <div>
                                {item.nome} <br/>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}

export default App;
