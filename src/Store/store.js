import {createStore, applyMiddleware} from "redux";
import  rootReducer  from  "../Store/Reducers/rootReducer"
import thunk from "redux-thunk";
 const saveToLocalStorage = ( state ) =>{
    try{
        const serializedData = JSON.stringify(state)
        localStorage.setItem("state",serializedData)}
    catch( error )
    {
        console.log( error )
    }
 }

 const loadFromLocalStorage = ( ) =>{
     try{
         const state =  localStorage.getItem("state")
          if (state === null) return undefined
          return ( JSON.parse( state ) )
     }
     catch( error ){
         console.log( error )
     }
 }
 const persistState = loadFromLocalStorage()



const Store = createStore ( rootReducer ,persistState, applyMiddleware ( thunk ))
Store.subscribe(() => saveToLocalStorage( Store.getState() ))
export default Store