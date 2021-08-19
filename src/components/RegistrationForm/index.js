// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    password: '',
    errorf: false,
    errorl: false,
    errorp: false,
    submitS: false,
  }

  firstName = event => {
    this.setState({firstName: event.target.value})
  }

  lastName = event => {
    this.setState({lastName: event.target.value})
  }

  password = event => {
    this.setState({password: event.target.value})
  }

  errorMsgF = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({errorf: true})
    } else {
      this.setState({errorf: false})
    }
  }

  errorMsgL = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({errorl: true})
    } else {
      this.setState({errorl: false})
    }
  }

  errorMsgP = () => {
    const {password} = this.state
    if (password === '') {
      this.setState({errorp: true})
    } else {
      this.setState({errorp: false})
    }
  }

  submitSuccessful = () => {
    this.setState({submitS: true})
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName, password} = this.state
    if (firstName === '') {
      this.setState({errorf: true})
    } else {
      this.setState({errorf: false})
    }
    if (lastName === '') {
      this.setState({errorl: true})
    } else {
      this.setState({errorl: false})
    }
    if (password === '') {
      this.setState({errorp: true})
    } else {
      this.setState({errorp: false})
    }
    if (firstName !== '') {
      this.setState({errorf: false})
      if (lastName !== '') {
        this.setState({errorl: false})
        if (password !== '') {
          this.setState({errorp: false})
          this.setState({submitS: true})
        }
      }
    }

    localStorage.setItem('username', firstName)
    localStorage.setItem('password', password)
  }

  homePage = () => {
    const {history} = this.props
    const s = localStorage.getItem('username')
    if (s !== null) {
      history.replace('/login')
    } else {
      this.setState({submitS: false})
    }
  }

  render() {
    const {errorf, errorl, errorp, submitS} = this.state
    return (
      <div className="bg">
        <h1>Registration</h1>
        {!submitS && (
          <form className="form-control">
            <label htmlFor="firstName">FIRST NAME</label>
            <input
              onChange={this.firstName}
              type="text"
              id="firstName"
              placeholder="First name"
              onBlur={this.errorMsgF}
            />
            {errorf && <p>*Required</p>}

            <label htmlFor="lastName">LAST NAME</label>
            <input
              onChange={this.lastName}
              type="text"
              id="lastName"
              placeholder="Last name"
              onBlur={this.errorMsgL}
            />
            {errorl && <p>*Required</p>}

            <label htmlFor="password">Password</label>
            <input
              onChange={this.password}
              type="password"
              id="password"
              placeholder="password"
              onBlur={this.errorMsgP}
            />
            {errorp && <p>*Required</p>}

            <button className="but1" type="submit" onClick={this.submitForm}>
              submit
            </button>
          </form>
        )}
        {submitS && (
          <div className="bg">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p>Submitted Successfully</p>
            <button className="but2" type="submit" onClick={this.homePage}>
              Login
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default RegistrationForm
