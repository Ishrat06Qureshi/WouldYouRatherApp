import * as ActionTypes from "./actionTypes";


const get_user = (user_Data) => {
  return ({
      type:ActionTypes.GET_USER,
      user_Data,
  })
}
export default get_user

