import { LOGIN_STATUS } from "./actionTypes"

const  login_status= ( loginStatus)=>{
 return({
     type:LOGIN_STATUS,
     loginStatus,
 })
}
export default login_status