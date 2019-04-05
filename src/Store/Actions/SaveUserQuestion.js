import * as actionType from "./actionTypes";
const save_Userquestion = ( question ) =>{
    const { id , author} = question
  return({
      type:actionType.SAVE_USERQUESTION,
      id,
      author,
  })
}
export default save_Userquestion