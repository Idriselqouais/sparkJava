import React, { Component } from 'react'
import $ from 'jquery';
import CourseDataService from '../service/CourseDataService';
import Nav from './nav'
class ListEmployesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employes:[],
            
           
        }
       
        this.getEmployes = this.getEmployes.bind(this)
        this.sparkChercher=this.sparkChercher.bind(this)
    }

    componentDidMount() {
        this.getEmployes();
    }

    getEmployes() {
        CourseDataService.retrieveAllCourses()//HARDCODED
            .then(
                response => {
                    
                    //console.log(response);
                    document.getElementById('test').style.backgroundColor='#f0f5f5'
                    this.setState({ employes: response.data })
                    
                    
                }
            )
    }



   

   
    sparkChercher() {
        const type=document.getElementById("idris").value;
        const sr=document.getElementById("mot").value;
       
        this.props.history.push(`/employes/${type}/${sr}`)
    }

   
    //Recherche multicritères d'un étudiant
   
   
    render() {
        //Définition des styles 
        const divstyle={
            color: "blue",
            fontFamily: "Arial",
            size:"10",
            columngap: "40px"
          };

          const divstylee={
            position: "absolute",
            right: "250px",
            top: "60px",
            zindex:"-1"
           
         };
         const ssttyle={
            position: "absolute",
            left: "420px",
            top: "60px",
            zindex:"-1"
          
           
         }
         const sstyle={
            position: "absolute",
            left: "320px",
            top: "60px",
            zindex:"-1"
          
           
         };
         const sstyyle={
           
            left: "300px",
            right:"500px",
            top: "200px",
            zindex:"-1"
          
           
         };
        console.log('render')
        return (

               <div>  
     
            <Nav/>
            
                        <div id ="test">
            <div className="container">
         
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                   
            <div>
                <div  style={sstyyle}>
                <select     id="idris">
              <option value="id">id</option>
           <option value="name">nom</option>
             <option value="prenom">prenom</option>
           <option value="fonction">fonction</option>
           <option value="dept">dept</option>
           <option value="salaire">salaire</option>
              </select>
                </div>
            
              <div style={sstyle} > 
<input id="mot"  className="form-control" type="text" placeholder="Chercherr" arialabel="Search"></input>
                    </div>
                    <div style={ssttyle} >
                    <button onClick={() => this.sparkChercher() }
		                   className="btn btn-primary btn-style-left">
		                     <i className="	fa fa-search" ></i> <span>Chercher
		                    </span>
	                </button>
                    </div>
                        
             
            </div>

              
                    <br></br>
                    <table id="myTable" className="table text-center table-striped">
                        
                        <thead>
                        <tr>
                           
                            <th>id</th>
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>Departement</th>
                            <th>Fonction</th>
                            <th>Salaire</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employes.map(
                                    course =>
                                    <tr key={course.idEtudiant}>
                                    <td>{course.id}</td>
                                    <td hidden><input id={course.idEtudiant} value={course.nom+' ' +course.prenom+'-->Matricule:'+course.matricule
                +"-->Filiére:"+ course.filiere}></input></td>
        
                                    <td id ={course.idEtudiant}>{course.name}</td>
                                    <td id='bb'>{course.prenom}</td>
                                    <td>{course.dept}</td>
                                    <td>{course.fonction}</td>
                                    <td>{course.salaire}</td>

                                    <td>
                                        <div style={divstyle}>
                                    <button title="supprimer" className="btn btn-warning" onClick={() => this.deleteCourseClicked(course.idEtudiant)}><i className='fa fa-trash'></i></button>
                                    <button title="modifier"  className="btn btn-success"  onClick={() => this.updateCourseClicked(course.idEtudiant)}><i className='fa fa-pencil'></i></button>
                    
                                    </div>
                                    </td> 
                                  
            
                                </tr>
                                )
                            }
                        </tbody>
                 
                    </table>
                  
                </div>
            </div>
            </div>
            </div>
        )
    }
}

export default ListEmployesComponent