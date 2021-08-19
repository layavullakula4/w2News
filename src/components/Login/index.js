import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {name: '', pass: '', submit: false, error: false}

  username = event => {
    this.setState({name: event.target.value})
  }

  password = event => {
    this.setState({pass: event.target.value})
  }

  onSubmit = () => {
    const {name, pass} = this.state
    const firstname = localStorage.getItem('username')
    const password = localStorage.getItem('password')
    const check = name === firstname && pass === password
    if (check) {
      this.setState({submit: true, error: false})
    } else {
      this.setState({error: true, submit: false})
    }
  }

  render() {
    const {error, submit} = this.state
    return (
      <div>
        <h1>Login</h1>
        <label htmlFor="user">Username</label>
        <br />
        <input
          onChange={this.username}
          type="text"
          placeholder="firstname"
          id="user"
        />
        <br />
        <label htmlFor="pass">Password</label>
        <br />
        <input
          onChange={this.password}
          type="password"
          placeholder="password"
          id="pass"
        />
        <br />
        <button onClick={this.onSubmit} type="submit">
          Sign in
        </button>
        {error && <p>Check username and password</p>}
        {submit && <p>Login Successful</p>}
      </div>
    )
  }
}
export default Login
