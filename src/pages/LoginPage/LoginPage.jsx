import React from 'react';
import { Redirect } from 'react-router-dom';


const LoginPage = (props) => {
    return (
        <div>
            {props.user ? <Redirect to="/newspage" /> : 
            <>
            <h1>Login below to view your news!</h1>
            <br/>
            <form onSubmit={props.addUser}>
            <label>
                <span>HELLO</span>
                <input
                name='newUser' 
                value={props.value}
                onChange={props.handleChange}  
                />
            </label>
            <button onClick={props.addUser}>See News</button>
            </form>
            </>}
        </div>
    )
}

export default LoginPage;