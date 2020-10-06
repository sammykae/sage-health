import React from 'react'
import Header from './components/Header'

import Home from './components/Home'
import {Switch,Route} from 'react-router-dom'
import Footer from './components/Footer'
import About from './components/About'
import Doctor from './components/Doctor'
import Service from './components/Service'
import Appoint from './components/Appoint'
import Login from './components/Login'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
   
    <div>
      <BrowserRouter>
       <Header/>
    <Switch >
      <Route path='/' exact component={Home}/>
    <Route path='/about' exact component={About}/>
      <Route path='/doctor' exact component={Doctor}/>
       <Route path='/service' exact component={Service}/>
       <Route path='/appoint' exact component={Appoint}/>
       <Route path='/doctor_login' exact component={Login}/>
    
       {/* <Route path='/user/:user' exact render={({match})=>(
        this.state.loggedIn ? (<User user={match.params.user}/>): (<Redirect to='/'/>)
      )}/> */}
       <Route path='/'  render={()=>(
         <h1>404. Page not found</h1>
       )}/>

      
    </Switch>
     
     <Footer/>
     </BrowserRouter>
    </div>
    

  )
}

export default App
