import React, { Component } from 'react';
import ListEmployesComponent from './ListEmployesComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginComponent from './LoginComponent';
import ListEmployessComponent from './ListEmployes'

class InstructorApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1></h1>
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" exact component={LoginComponent} /> 
                        <Route path="/employes" exact component={ListEmployesComponent} />
                        <Route path="/employes/:type/:mot" component={ListEmployessComponent} />
                   
                       
            
                    </Switch>
                </>
            </Router>
        )
    }
}

export default InstructorApp