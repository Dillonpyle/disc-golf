import React, { Component } from 'react'

export class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const loginResponse = await fetch('http://localhost:9000/login', {
                method: 'Post',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!loginResponse.ok) {
                throw Error(loginResponse.statusText)
            }

            const parsedResponse = await loginResponse.json();


            if (parsedResponse.data === 'login successful') {
                this.props.history.push('/weather')
            }

            console.log(parsedResponse, 'loginResponse')
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
              <input type='text' name='username' onChange={this.handleChange} />
                </label>
                <label>
                    Password:
              <input type='text' name='password' onChange={this.handleChange} />
                </label>
                <input type='submit' />
            </form>
        )
    }
}

export default Login