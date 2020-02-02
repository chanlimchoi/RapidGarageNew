import React, {Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route, Switch, Redirect, Link} from 'react-router-dom'
import Profile from './components/Profile';
import Footer from './components/Footer';


class App extends Component {

   constructor(props) {
      super(props);
      this.state = {
        message: '',
      
      };
      
  }

  render() {
  return (

      
        <div>
        <div>
            <h1> RapidGarage</h1>
           <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>                 
                    </li>
                    <li>
                      <Link to="/NewPost">New Post</Link>
                    </li>
                    <li>
                      <Link to="/Profile">Profile</Link>
                    </li>
                  </ul>
                 
                   

           
            

            <Switch>
             {/* <Route exact path='/' component={PostList} />
              <Route path='/signup' component={SignUp} />
              <Route path='/login' component={Login} />
              <Route path='/logout' component={Logout} />
              <Route path='/newpost' component={NewPost} />*/} 
              <Route path='/profile' component={Profile} />
            </Switch>
            </div>
            <Footer />
          <br />
    </div>
    
   

  );
}
}

export default App;
