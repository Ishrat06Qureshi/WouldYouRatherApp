import React , { Component } from "react";
import { withRouter,  NavLink } from "react-router-dom"
import { connect }  from "react-redux";
import login_status from "../Store/Actions/loginstatus";
import  { Button, Navbar , NavItem , Nav  }  from 'react-bootstrap'
class NavBar extends Component{

  handleLogout = () =>{
    const { dispatch , history} = this.props
    dispatch(login_status(false))
    history.push("/")
  }

  render(){
  const  {  loginStatus , authUser, Users } = this.props
  const { avatarURL} = Users[authUser]

  return(
    <div style={{marginLeft:"120px"}}>
          <div style = {{ height:"50px" , display:"flex", justifyContent:"space-between" , width:"750px"}}>  
          <div>
              <Navbar fixedTop>  
                  <Nav>
                      <Nav.Link as ={ NavLink } eventKey = {1}  to = "/home" >Home </Nav.Link> 
                      <Nav.Link as ={ NavLink } eventKey = {2}  to = "/add" >  NewQuestion </Nav.Link>
                      <Nav.Link as ={ NavLink } eventKey = {3}  to = "/leaderboard">  LeaderBoard </Nav.Link>
                  </Nav>
              </Navbar>
          </div>
            { loginStatus ? (
                  <div style={{display:"flex", lineHeight:"50px"}}>
                  <div> 
                    <img src = {`${avatarURL}`} style={{width:"50px", 
                    height:"50px",
                     marginTop:"10px", 
                     border:"solid 1px white", 
                     borderRadius:"25px"}}></img>
                    </div>
                        <div>
                          <p style={{marginTop:"5px"}}>Hello,{ authUser }</p>
                          </div>
                       <div>
                          <Button variant="info" onClick = {this.handleLogout } style = {{
                                marginLeft:"15px",
                                height:"40px"
                              }}>
                          Logout</Button>
                      </div>
                </div>) :null }
           </div>
  </div>
)}
}
const mapStateToProps = ( state ) =>{
  return({
    authUser:state.authUserReducer.authUser,
    loginStatus: state.loginStatusReducer.loginStatus,
    Users:state.getUserReducer.Users,
  })
}

export default withRouter(connect(mapStateToProps,null)(NavBar))