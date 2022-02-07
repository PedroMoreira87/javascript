import React, {useState} from "react";
import firebase from './firebase';

// só vai rodar com o build pois está no netlify-cli
function App() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [imagemURL, setImagemURL] = useState();

    async function gravarUsuario(e) {
        let arquivo = e.target.files[0];

        await firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(async (usuario) => {

                let uid = usuario.user.uid;

                await firebase.storage().ref("usuario").child(uid).put(arquivo)
                    .then((e) => {
                        console.log("Upload feito!");
                    });

                firebase.storage().ref("usuario").child(uid).getDownloadURL()
                    .then((url) => {
                        setImagemURL(url);
                    });
            });
    }

    return (
        <div>
            <h2>Upload de arquivos</h2>

            <input type="text" placeholder={'E-mail'} onChange={(e) => {
                setEmail(e.target.value)
            }}/> <br/>

            <input type="password" placeholder={'Senha'} onChange={(e) => {
                setSenha(e.target.value)
            }}/> <br/>

            <input type="file" onChange={(e) => {
                gravarUsuario(e)
            }}/> <br/><br/>

            <img src={imagemURL} width="200"/>
        </div>
    );
}

export default App;
