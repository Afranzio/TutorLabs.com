import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/navbar'
import Footer from './components/footer'
import Homepage from './components/Homepage/Homepage'
import Login from './components/login'
import Profilepage from './components/ProfilePage-01'
import Registration from './components/Registration'
import SFreelancer from './components/SearchFreelancer/SFreelancer'
import Forgotpwd from './components/forgotPwd'

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Registration} />
          <Route path="/create" component={Profilepage} />
          <Route path="/search" component={SFreelancer} />
          <Route path="/forgotpwd" component={Forgotpwd} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;