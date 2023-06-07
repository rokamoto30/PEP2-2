import { redirect } from "react-router-dom";
import baseURLObject from './Api.js'


const SignupApi = {
  createUser: (userToCreate, navigate) => {
   // const navigate = useNavigate();
   const apiURL = baseURLObject.baseURL + "/api/user";

    fetch(apiURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userToCreate),
    })
      .then((result) => {
        if (!result.ok||result.status==500) {
            console.log(result.status);
            alert("Email already exists");
            throw Error(result.statusText);
        }
        else {
          alert("Signed up successfully!")
        }
      result.json()}
      ) 
      .then(()=>{
        navigate("/auth")
      })
     
  },
}

export default SignupApi