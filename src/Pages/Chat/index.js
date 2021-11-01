import { useState } from 'react';
import './style.css';

function Chat () {

    const [loggedIn, setLoggedIn] = useState(false)
    return(

        <div className="App">

            {!loggedIn ? (
                <div className="logIn">
                    <input type="text" placeholder="Nome..."/>
                    <input type="text" placeholder="Room..."/>
                    <button>Entrar no Chat</button>
                </div>
            ) : <h1></h1>}
        </div>
    );
}




export default Chat;