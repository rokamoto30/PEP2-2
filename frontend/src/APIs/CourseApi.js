import { getAuthToken } from "../Util/auth";
import { getSignedInUser } from "../Util/auth";
import baseURLObject from './Api.js'
const userID = getSignedInUser().id

const CourseApi = {
    getCourses: (setCourseList) => {
        const apiURL1 = baseURLObject.baseURL + "/api/course"
        const token = getAuthToken();
        fetch(apiURL1, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }).then((result) => {
            console.log("Result")
            console.log(result)
            return result.json()
        }).then((data) => {
            console.log(data)
            setCourseList(data)
        }).catch((error) => { console.log(error) });
    },

    getCourseByUser: (setCourseList) => {
        const apiURL2 = baseURLObject.baseURL + "/api/course/user_id/" + userID
        const token = getAuthToken();
        fetch(apiURL2, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }).then((result) => {
            console.log("Result")
            console.log(result)
            return result.json()
        }).then((data) => {
            console.log(data)
            setCourseList(data)
        }).catch((error) => { console.log(error) });
    },
    addCourse: (courseToAdd) => {
        const apiURL4 = baseURLObject.baseURL + "/api/course/create"
        const token = getAuthToken();
        fetch(apiURL4, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(courseToAdd)
        }).then(result => result.json())
            .then(data => {
                console.log(data)
            }).catch((error) => { console.log(error) })
    },
    updateCourse: (courseToUpdate) => {
        const apiURL3 = baseURLObject.baseURL + "/api/course/update"
        const token = getAuthToken();
        fetch(apiURL3, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(courseToUpdate)
        }).then(result => result.json())
            .then(data => {
                console.log(data)
            }).catch((error) => { console.log(error) })
    }
}


export default CourseApi;