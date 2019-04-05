import React , {Component} from "react"
import { Form , Card ,Button} from "react-bootstrap";
import { connect } from "react-redux";
import * as API from "../Store/UTILS/API";
import SaveNewQuestion from "../Store/Actions/AsynQuesSave";
// import store from "./Store/store";


class NewQuestion extends Component
{
    state = {
        optionOneText:"",
        optionTwoText:"",
    }
 multiInputHandler = ( event ) =>{
     this.setState(({ 
         [event.target.name]: event.target.value,
    }))
   
 }
 clearData = ( event ) =>{
     this.setState(({
        optionOneText:"",
        optionTwoText:""
     }))
 }
 submitNewQuestion = ( event ) => {
       const { optionOneText , optionTwoText } = this.state
       const { authUser , dispatch } = this.props

            if ( optionOneText.length >0 & optionTwoText.length>0)
            {  const question = {
                    optionOneText,
                    optionTwoText,
                    author:authUser,
                }

             dispatch(SaveNewQuestion(dispatch,question))
             this.clearData()

            }
            else{
                alert("please fill both the options ")
            }
           
             
            
 }

 render()
 {  
     return(<div style = {{ marginLeft:"350px", marginTop:"25px"}}>
         <Card style = {{ width:"25em"}}>
             <Card.Header> <h4>Create New Question</h4></Card.Header>
                    <Card.Text style ={{ marginLeft:"15px"}}> Complete the question : </Card.Text>
                    <Card.Title style ={{ marginLeft:"20px"}}> Would You Rather  </Card.Title>
             <Card.Body>
               <Form>
                   <Form.Group >
                       <Form.Control type="text" name="optionOneText" onChange={this.multiInputHandler} value = {this.state.optionOneText}></Form.Control>
                       <Form.Label style = {{ marginLeft:"150px"}}> OR  </Form.Label>
                       <Form.Control type="text" style = {{ marginTop:"10px"}} name="optionTwoText" onChange = {this.multiInputHandler} value = {this.state.optionTwoText}></Form.Control>
                   </Form.Group>
               </Form>
               <Button variant="warning"  style = {{
                  marginTop : '20px',
                  marginLeft:" 130px"
                }}
                onClick = { this.submitNewQuestion }
                >
             Submit </Button>
               
             </Card.Body>
         </Card>
     </div>)
 }
}

const mapStateToProps = ( state) =>{
    //  console.log(store.getState())
return({
    authUser:state.authUserReducer.authUser,
})
}
export default  connect( mapStateToProps , null )(NewQuestion)