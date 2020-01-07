import React, { Component } from 'react'
import $ from 'jquery';
import CourseDataService from '../service/CourseDataService';
import Nav from './nav'
class ListEmployessComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
          
            type: this.props.match.params.type,
            nom: this.props.match.params.mot,
            employes:[],
           
        }
        
        this. getEmployes = this. getEmployes.bind(this)
        this.sparkChercher=this.sparkChercher.bind(this)
    }

    componentDidMount() {
        this. getEmployes();
        let i;
        if(this.state.type=="id") i=0;
        if(this.state.type=="name") i=1;
        if(this.state.type=="prenom") i=2;
        if(this.state.type=="fonction") i=3;
        if(this.state.type=="dept") i=4;
        if(this.state.type=="salaire") i=5;
        document.getElementById("idris").selectedIndex=i;
        document.getElementById("mot").value=this.props.match.params.mot;
    
    }

    getEmployes() {
        CourseDataService.retrieveAllCoursess(this.state.type,this.state.nom)//HARDCODED
            .then(
                response => {
                    
                    document.getElementById('test').style.backgroundColor='#f0f5f5'
                    this.setState({ employes: response.data })
                    
                    
                }
            )
    }


   

 
    sparkChercher() {
        const type=document.getElementById("idris").value;
        const sr=document.getElementById("mot").value;
        this.props.history.push(`/employes/${type}/${sr}`)
        this.state.type=type;
        this.state.mot=sr;
        window.location.reload();
       

        
    }


   
   
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
            top: "300px",
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
<input id="mot"  className="form-control" type="text" placeholder="Chercher" arialabel="Search"></input>
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

export default ListEmployessComponent