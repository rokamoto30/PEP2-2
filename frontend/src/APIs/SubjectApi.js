import { getAuthToken } from "../Util/auth";
import baseURLObject from './Api.js'

const SubjectApi = {

    getSubjects:(setSubjectList)=>{
        const apiURL= baseURLObject.baseURL + "/api/subject";
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
