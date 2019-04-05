import { AUTH_USER  } from "./actionTypes";

const auth_user = ( authUser ) =>{
    return({
        type:AUTH_USER,
        authUser,
    })
}
export default auth_user