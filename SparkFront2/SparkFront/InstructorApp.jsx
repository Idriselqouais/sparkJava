import React, { Component } from 'react';
import ListCoursesComponent from './ListCoursesComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CourseComponent from './CourseComponent';
import Courses from './courses'
import Enseignant from './Enseignant'
import EtudiantsMatiere from './EtudiantsMatiere';
import LoginComponent from './LoginComponent';
import ListMatieres from './ListMatieres'

class InstructorApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1></h1>
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" exact component={LoginComponent} />
                        
                        <Route path="/ListMatières" exact component={ListMatieres} />
                        <Route path="/courses" exact component={ListCoursesComponent} />
                        <Route path="/courses/:id" component={CourseComponent} />
                        <Route path="/matiers/:id/:nom/:prenom" exact component={Courses} />
                        <Route path="/enseignant/:id" exact component={Enseignant}/>
                        <Route path="/enseignant/matiers/:id/:nom/etudiants" exact component={EtudiantsMatiere}/>
                      
                    </Switch>
                </>
            </Router>
        )
    }
}

export default InstructorApp