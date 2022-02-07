import './App.css';
import {Button, TextField} from "@material-ui/core";
import {useEffect, useState} from "react";
import Axios from "axios";

function App() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [registerList, setRegisterList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/get')
            .then((response) => {
                setRegisterList(response.data);
            })
    }, []);

    const submitRegister = () => {
        Axios.post('http://localhost:3001/api/insert', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            gender: gender
        }).then(() => {
            alert('Successful insert')
        })
    };

    return (
        <div className="signup-content">
            <div className="signup-box">
                <h1>Register</h1>

                <TextField
                    type="text"
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    className={"input1"}
                    onChange={(e) => {
                        setFirstName(e.target.value)
                    }}
                />

                <TextField
                    type="text"
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    className={"input1"}
                    onChange={(e) => {
                        setLastName(e.target.value)
                    }}
                />

                <TextField
                    type="email"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    className={"input1"}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />

                <TextField
                    type="number"
                    id="outlined-basic"
                    label="Phone"
                    variant="outlined"
                    className={"input1"}
                    onChange={(e) => {
                        setPhone(e.target.value)
                    }}
                />

                <TextField
                    type="text"
                    id="outlined-basic"
                    label="Gender"
                    variant="outlined"
                    className={"input1"}
                    onChange={(e) => {
                        setGender(e.target.value)
                    }}
                />

                <div className="signup-box-buttons">
                    <Button variant="contained" color="primary" onClick={submitRegister}>Register</Button>
                </div>
            </div>

            {registerList.map((val) => {
                return (
                    <h1>
                        First Name: {val.firstName} |
                        Last Name: {val.lastName} |
                        Email: {val.email} |
                        Phone: {val.phone} |
                        Gender: {val.gender} |
                    </h1>
                );
            })}
        </div>
    );
}

export default App;
