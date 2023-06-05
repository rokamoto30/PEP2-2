export function getAuthToken(){
    const token =localStorage.getItem('token')
    return token
}

export function getSignedInUser(){
   const user= {id:localStorage.getItem("id"),
   username:localStorage.getItem("username")
    }
    return user
}