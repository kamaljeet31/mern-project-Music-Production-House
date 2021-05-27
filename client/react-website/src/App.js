import './App.css'
import { Route, Switch } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import SignUp from './components/SignUp'
import ErrorPage from './components/ErrorPage'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Logout from './components/Logout'
import Portfolio from './components/Portfolio'
import Services from './components/Services'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route path='/portfolio'>
          <Portfolio />
        </Route>
        <Route path='/services'>
          <Services />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/logout'>
          <Logout />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </>
  )
}

export default App
