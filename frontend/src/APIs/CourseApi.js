import { getAuthToken } from "../Util/auth";
import { getSignedInUser } from "../Util/auth";
const userID=getSignedInUser().id
const apiURL1="http://localhost:8080/api/course"
const apiURL2="http://localhost:8080/api/course/user_id/"+userID
const apiURL3="http://localhost:8080/api/course/update"
const apiURL4="http://localhost:8080/api/course/create"
const CourseApi={
getCourses:(setCourseList)=>{
    const token=getAuthToken();
    fetch(apiURL1 ,{
        method:'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+ token
        }
    }).then((result)=>{
        console.log("Result")
        console.log(result)
        return result.json()
    }).then((data)=>{
        console.log(data)
        setCourseList(data)
    }).catch( (error) => { console.log(error) } );
},

getCourseByUser:(setCourseList)=>{
    const token=getAuthToken();
    fetch(apiURL2 ,{
        method:'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+ token
        }
    }).then((result)=>{
        console.log("Result")
        console.log(result)
        return result.json()
    }).then((data)=>{
        console.log(data)
        setCourseList(data)
    }).catch( (error) => { console.log(error) } );
},
addCourse:(courseToAdd)=>{
    const token=getAuthToken();
    fetch(apiURL4 ,{
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+ token
        },
        body:JSON.stringify(courseToAdd)
}).then(result=>result.json())
.then(data=>{
    console.log(data)
}).catch((error)=>{console.log(error)})
},
updateCourse:(courseToUpdate)=>{
    const token=getAuthToken();
    fetch(apiURL3 ,{
        method:'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+ token
        },
        body:JSON.stringify(courseToUpdate)
}).then(result=>result.json())
.then(data=>{
    console.log(data)
}).catch((error)=>{console.log(error)})
}}


export default CourseApi;