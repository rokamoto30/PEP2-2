import { getAuthToken } from "../Util/auth";
import { baseURL } from './Api.js'
const apiURL= baseURL + "/api/subject";
const SubjectApi = {

    getSubjects:(setSubjectList)=>{
        const token=getAuthToken();
        fetch(apiURL ,{
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
            setSubjectList(data)
        }).catch( (error) => { console.log(error) } );
    }
}

export default SubjectApi;
