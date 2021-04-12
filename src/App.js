import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, 
Route,
Link
} from 'react-router-dom';
import Home from './Home.js'
import About from './About.js'
import Projects from './Projects.js'


export default class App extends Component{
 render(){
    return ( 
      <div className="App">
        <Router>
          <div className ='sidenav'>
            <ul>
              <li>
                <Link to ='/'> Home</Link>
              </li>
              <li>
                <Link to  ='/About'> About Me </Link>
              </li>
              <li>
                <Link to ='/Projects'> Projects </Link>
              </li>
            </ul>
          </div>
        <Route exact path='/' component= {Home}/>
        <Route path = '/About' component ={About}/>
        <Route path = '/Projects' component ={Projects} />
        </Router>
      </div>
      );
  }
}