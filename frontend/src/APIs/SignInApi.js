import { baseURL } from './Api.js'
const apiURL = baseURL + "/authenticate"

const SignInApi = {
    validateCreds: (credsToValidate) => {
        fetch(apiURL, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credsToValidate)
        }).then(result => result.json()).then(data => {
            return data.jwt
        })
            .catch((error) => { console.log(error) })

    },
}
export default SignInApi