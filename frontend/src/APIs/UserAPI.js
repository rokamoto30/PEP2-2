import { getAuthToken } from "../Util/auth";
import { getSignedInUser } from "../Util/auth";
import baseURLObject from './Api.js'


const UserAPI={
    getStudentSession:(setStudentSessions)=>{
        const token=getAuthToken();
        const id=getSignedInUser().id;
        const apiURL= baseURLObject.baseURL + `/api/student/session/${id}` 
fetch(apiURL,{
method:"GET",
headers:{
    'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Origin':'*',
               'Authorization':'Bearer '+token 
}
}).then((result)=>{
    return result.json();
}).then((data)=>{
setStudentSessions(data)
}).catch( (error) => { console.log(error) } );
    }
}

export default UserAPI