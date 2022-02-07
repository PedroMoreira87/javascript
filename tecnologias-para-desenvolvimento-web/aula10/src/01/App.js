import React, {useState, useEffect} from "react";

function App() {

    const [nome, setNome] = useState("Eduardo Lino");

    const [tarefas, setTarefa] = useState([
        'Estudar Javascript',
        'Estudar React Hooks',
        'Estudar Firebase'
    ]);

    const [input, setInput] = useState("");

    function adicionar() {
        setTarefa([...tarefas, input]);
    }

    useEffect(() => {
        alert("iniciou componente");
    }, []);

    useEffect(() => {
        alert("mudou tarefas");
    }, [tarefas]);


    return (
        <div>
            <h2>{nome}</h2>

            <input type="text" placeholder="Tarefa" onChange={(e) => {
                setInput(e.target.value)
            }}/> &nbsp;
            <button onClick={adicionar}>Adicionar Tarefa</button>

            <ul>
                {tarefas.map(tarefa => (
                    <li> {tarefa} </li>
                ))}
            </ul>

        </div>
    );

}

export default App;
