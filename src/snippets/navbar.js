import { 
    BrowserRouter as Router, 
    Route,  
    Link, 
    Switch 
} from 'react-router-dom'; 
import React, { Component } from 'react';
import Home from './../page/home.js';
import About from './../page/about.js';
import Contact from './../page/contact.js';

class navbar extends Component {
    
    // start app load css and any 
    componentDidMount() {
      document.getElementById("cssNav").setAttribute("href","/css/navbar.css");
    }

    render() {
        return(
            <Router className="navbar">
                <div class="container">
                    <ul class="nav nav-pills justify-content-center">
                        <li class="nav-item shadow">
                            <Link class="nav-link active" to="/">play</Link>
                        </li>
                        <li class="nav-item shadow">
                            <Link class="nav-link" to="/about">About Game</Link>
                        </li>
                    </ul>
                    <Switch> 
                        <Route exact path='/' component={Home}></Route> 
                        <Route exact path='/about' component={About}></Route> 
                        <Route exact path='/contact' component={Contact}></Route> 
                    </Switch>
                </div>
            </Router> 
        );
    }
    
}

export default navbar;