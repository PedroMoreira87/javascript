import logo from './logo.svg';
import './App.css';
import Churros from './assets/churros.jpeg'
import {Component} from "react";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: [
                {id: 0, username: 'Pedro', likes: 1, comments: 10, share: 5},
                {id: 1, username: 'Amanda', likes: 200, comments: 2, share: 7},
                {id: 2, username: 'Olivia', likes: 500, comments: 3, share: 4}
            ]
        }

    }

    render() {
        return (
            <div>
                {
                    this.state.feed.map(item => {
                        return (
                            <div key={item.id}>
                                <h1>{item.username}</h1>
                                <img src={Churros} alt=""/><br/>
                                <div className={"box"}>
                                    <h3>{item.likes > 1 ? "Likes: " : "Like: "} {item.likes} </h3>
                                    <h3 className={"margin"}>Comments: {item.comments} </h3>
                                    <h3 className={"margin"}>Share: {item.share}</h3>
                                </div>
                                <hr/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}

export default App;
