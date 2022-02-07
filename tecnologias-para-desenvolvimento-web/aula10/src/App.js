import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import {db} from './firebase'
import {
    getAuth,
    createUserWithEmailAndPassword
} from "firebase/auth";

function App() {

    // this.state = {
    //   nome: ""
    // }
    // this.setState({nome: "Lino"});

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function adicionar() {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, senha)
    }

    return (
        <div>
            <h2>Cadastro de Usuário</h2>

            <input type="text" placeholder={'Email'} onChange={(e) => {
                setEmail(e.target.value)
            }}/>
            <input type="password" placeholder="Password" onChange={(e) => {
                setSenha(e.target.value)
            }}/>
            <button onClick={adicionar}>Cadastrar</button>
        </div>
    );
}

export default App;
