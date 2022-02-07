import React, {Component} from 'react';
import firebase from './firebase';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usuario: []
        }

        this.gravar = this.gravar.bind(this);
        this.listar = this.listar.bind(this);
    }

    async gravar() {
        await firebase.collection('usuario').add({
            nome: 'Doninha',
            sobrenome: 'Rigolino'
        }).then(() => {
            console.log("gravou corretamente");
        }).catch((erro) => {
            console.log("erro: " + erro);
        });
    }

    listar() {
        firebase.collection('usuario').get()
            .then((snapshot) => {
                let lista = [];
                snapshot.forEach((item) => {
                    lista.push({
                        id: item.id,
                        nome: item.data().nome,
                        sobrenome: item.data().sobrenome
                    });
                });
                console.log(lista);
                this.setState({usuario: lista});
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
                });
            });
            console.log(lista);
            this.setState({usuario: lista});
        });
    }

    render() {
        return (
            <div>
                <h1>Firestore</h1>

                <button onClick={this.gravar}> Gravaaaar</button>
                <br/><br/>
                <button onClick={this.listar}> Listar</button>
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
