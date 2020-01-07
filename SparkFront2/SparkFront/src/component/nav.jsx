import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CourseComponent from './CourseComponent';
//import Link from 'react-router'
var Link = require('react-router-dom').Link


class Nav extends Component {
    render() {
        const style={
            color:"black"
        }
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand" href="#">EMI_Employe</a>
            </div>
          </nav>
  
          </div>
        )
    }
}

export default Nav