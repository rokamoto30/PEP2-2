import { getAuthToken } from "../Util/auth";
import baseURLObject from './Api.js'

const TutorApi = {

    getTutors:(setTutorList)=>{
        const apiURL= baseURLObject.baseURL + "/api/user/tutors"
        const token=getAuthToken();
        // console.log('Bearer '+token)
        fetch(apiURL,{
            method:'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Origin':'*',
               'Authorization':'Bearer '+token
        }}).then((result)=>{
            console.log("Result")
            console.log(result)
            return result.json()
        }).then((data)=>{
            setTutorList(data)
        }).catch( (error) => { console.log(error) } );
    }
}

export default TutorApi;