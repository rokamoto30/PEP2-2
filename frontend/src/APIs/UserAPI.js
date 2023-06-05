import { getAuthToken } from "../Util/auth";
import { getSignedInUser } from "../Util/auth";
import { baseURL } from './Api.js'


const UserAPI={
    getStudentSession:(setStudentSessions)=>{
        const token=getAuthToken();
        const id=getSignedInUser().id;
        const apiURL= baseURL + `/api/student/session/${id}` 
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