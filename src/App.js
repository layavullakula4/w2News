import {BrowserRouter, Route, Switch} from 'react-router-dom'
import RegistrationForm from './components/RegistrationForm'
import Login from './components/Login'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={RegistrationForm} />
    </Switch>
  </BrowserRouter>
)

export default App
