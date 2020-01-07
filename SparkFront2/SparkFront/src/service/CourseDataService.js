import axios from 'axios'
import $ from 'jquery';
const PASSWORD = 'dummy'
const INSTRUCTOR = 'in28minutes'
const COURSE_API_URL = 'http://localhost:8088'
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}`

class CourseDataService {
    
 
  
    retrieveAllCourses(name) {
        return axios.get(`http://localhost:8088/test`);

    }
    retrieveAllCoursess(type,id) {
      
        return axios.get(`http://localhost:8088/test/${type}/${id}`);

    }
   
}

export default new CourseDataService()