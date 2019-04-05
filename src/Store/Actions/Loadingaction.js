import {LOADING} from "./actionTypes"

const loading_Action = ( isLoading ) =>{
    return({
        type:LOADING,
        isLoading,
    })

}
export default loading_Action