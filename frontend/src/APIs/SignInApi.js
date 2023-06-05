const apiURL="http://localhost:8080/authenticate"

const SignInApi={
   validateCreds:(credsToValidate)=>{
    fetch(apiURL,{
        method:"POST",
        headers:{  'Accept': 'application/json',
            "Content-Type": "application/json"},
        body:JSON.stringify(credsToValidate)
    }).then( result => result.json() ).then(data=>{
        return data.jwt
    })
    .catch( (error) => { console.log(error) } ) 

},
   }
export default SignInApi