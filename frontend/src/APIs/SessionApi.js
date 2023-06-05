import { getAuthToken, getSignedInUser } from "../Util/auth"
import { useEffect } from 'react'
import { baseURL } from './Api.js'
const token = getAuthToken()
const userID = getSignedInUser().id
const apiURL = baseURL + "/api/session"
const apiURL2 = baseURL + "/api/session/" + userID
const SessionApi = {
    addSession: (sessionToCreate) => {
        fetch(apiURL, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Origin': '*',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(sessionToCreate)
        }).then(result => result.json())
            .then(data => {
                console.log(data)
            }).catch((error) => { console.log(error) })
    },
    updateSession: (sessionToUpdate) => {
        const token = getAuthToken();
        fetch(baseURL + `/api/session/rating/${sessionToUpdate.id}/${sessionToUpdate.rating}`, {
            method: 'PATCH',
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
        }).catch((error) => { console.log(error) });
    },

    getTutorSession: (setTutorList) => {
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
            setTutorList(data)
        }).catch((error) => { console.log(error) });
    },
}


export default SessionApi