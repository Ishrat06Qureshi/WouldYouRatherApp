import React , {Component} from "react";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";
import auth_user  from "../Store/Actions/AuthUser";
import login_status  from "../Store/Actions/loginstatus";
import  { Button , Card , Form }  from 'react-bootstrap';
import * as img from "../Store/UTILS/media/react-logo.jpg";


class Login extends Component {
 state = {
     selectedOption : " ",
 }
 
handleLogin = () =>{
    const { dispatch , history , users} = this.props
    const { selectedOption } = this.state
    console.log(selectedOption.length)
    if (selectedOption in users){
        dispatch(auth_user( selectedOption))
        dispatch(login_status(true))
        history.push("/Home")
    }
   else {
        alert("please enter your name")
   }
}
    render()

    {  
        const {users} = this.props
       return( 

        <div style= {{ marginLeft:"350px",marginTop:"10px"}}>
           
             <Card style = {{ width: '25em', height:"28em"}}>
             {/* <Card.Img  src= {`${img}`}  className = "float-left" /> */}
             <img src= {`${img}`}  style={{height:"160px", width:"170px", margin:"auto",marginBlockStart:"75px"}} alt="..."></img>
             <Card.Body>
               <Card.Title style = {{ marginLeft:"5px"}}><h2>Would You Rather App</h2></Card.Title> 
                <Card.Text>
                   { users? <Form>
                       <Form.Group>
                           <Form.Control as="select"  onChange = {  ( event ) =>
                   this.setState( ({ selectedOption:event.target.value }))} style = {{ marginLeft:"5px", marginTop:"25px"}}>
                    >
                  <option value = " " >Please Select your name </option>  
                     { Object.keys( users ).map ( ( UserName ) => 
                     <option value = { `${UserName}` } key = {`${UserName}`}>{ UserName } </option> )}
        
                </Form.Control>
                </Form.Group>
                </Form> : <p>loading ...</p> }
                </Card.Text>
             </Card.Body>
             <Button variant="warning" onClick = {this.handleLogin } style = {{
                  marginTop : '20px'
                }}>
             Login</Button>
             </Card>
              
            

        </div>
        )}

}
const mapStateToProps = ( state ) => {
     
    return({
        users:state.getUserReducer.Users,
    })
}



export default withRouter(connect(mapStateToProps,null)(Login))


