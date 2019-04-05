import * as actionType from "./actionTypes";

const save_question = ( question ) =>{
  return({
      type:actionType.SAVE_QUESTION,
      question,
  })
}
export default save_question