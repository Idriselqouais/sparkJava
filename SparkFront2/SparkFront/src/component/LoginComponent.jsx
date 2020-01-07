import React, { Component } from 'react'

import Nav from './nav'
import $ from 'jquery';
class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleChanged = this.handleChanged.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
        this.parseJwt=this.parseJwt.bind(this)
        this.url=this.url.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }
    handleChanged(event) {
      this.setState(
          {
              [event.target.name]
                  : event.target.value
          }
      )
  }

    loginClicked() {
      this.props.history.push(`/employes`)
       

    }

  url(a){
    if(a=='admin') {return '/courses'}
    if(a=='prof')  { 
    $('#idrisse').hide()
    return '/enseignant/1'}
    if(a=="idris") return '/matiers/3/ELQOUAIS/Idris'
  }


    parseJwt(token) {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
  
      return JSON.parse(jsonPayload);
  };

    render() {
        const mystyle={
         // color: "blue",
         //backgroundColor: "DodgerBlue",
          padding: "7px",
          fontFamily: "Arial",
        //  fontWeight: "bold"tt
          size:"10"
        };
        const mystylee={
          color: "black",
          padding: "7px",
          fontFamily: "Arial"
         };
  
         const styleform={
        textAlign:"center",   
        color:"white",
        textDecoration: "blink"
         };
  
  
        return (
          <div>  
     
            <Nav/>
          <div style={styleform} className="container" >
          <h1 style={styleform}>Connexion de: {this.state.username}</h1>
          <div className="form-group">
          <p style={styleform}>Username:</p>
         <strong> <input  style={mystyle}
           type="text" name="username" value={this.state.username} onChange={this.handleChange}
          /></strong>
          </div>
          
          <div  className="form-group">
          <p style={styleform}>Mot de passe:</p>
          <input style={mystyle}
            type="password"   name="password" value={this.state.password} onChange={this.handleChange}
          />
          </div>
          
          <div style={mystylee}>
          <button className="btn btn-primary" onClick={this.loginClicked} type="submit" value="Se connecter">
             Se connecter
             </button>
          </div>
          <div>
            <a href="#"><span style={styleform}>Mot de passe Oublié </span></a>
          </div>
          </div>
           </div>
       
        );
      }
}

export default LoginComponent