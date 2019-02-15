import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import './Login.css'

const Login = (props) => {


    return (<div className='homeForm'>
        <form onSubmit={props.handleSignUp}>
            <h1>Sign Up Here</h1>
            <label>
                Username:
              <input type='text' name='username' onChange={props.handleChange} />
            </label>
            <label>
                Password:
              <input type='text' name='password' onChange={props.handleChange} />
            </label>
            <input type='submit' />
        </form>

        <form onSubmit={props.handleLogin}>
            <h1>Login Here</h1>
            <label>
                Username:
                <input type='text' name='username' onChange={props.handleChange} />
            </label>
            <label>
                Password:
                <input type='text' name='password' onChange={props.handleChange} />
            </label>
            <input type='submit' />
        </form>
    </div>
    )
}

export default withRouter(Login)