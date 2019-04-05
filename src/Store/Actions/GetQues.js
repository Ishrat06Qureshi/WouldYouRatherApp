
import {GET_QUESTIONS} from "../Actions/actionTypes"

const get_question = (questions) => {
  return({
      type:GET_QUESTIONS,
      questions,
  })
}
export default get_question