import baseURLObject from './Api.js'

const SignInApi = {
    validateCreds: (credsToValidate) => {
        const apiURL = baseURLObject.baseURL + "/authenticate"
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