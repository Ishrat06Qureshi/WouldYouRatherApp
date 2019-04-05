import React from "react";
import { Button , Card  } from "react-bootstrap";
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

const ShowQuestion = (props) => {
            const { text } = props.Question.optionOne;
            const { author  } = props.Question;
            const { avatarURL} = props.users[props.Question.author]
            const { Question , pathname } = props 
            
            const ToShowVote = ( Question ) => {
                const { history } = props
                history.push({
                    pathname,
                    state:{ Question, }
                })
                }
    return ( <Card   style={{ width: '25rem', height:"20em" , marginBottom:"15px" }}>
               <Card.Header ><h4>{ author } asks </h4>  </Card.Header>
                  <Card.Title style = {{marginLeft : "150px",marginTop:"25px", color:"#008592"}}> Would you Rather</Card.Title>
                    <Card.Body >
                       <Card.Text text = "white" style = {{marginLeft:"150px"}}><h6> {text} </h6></Card.Text>
                         <img src={avatarURL} className="rounded float-left" alt="aligment" style={{
                            height:"120px",
                            width:"120px" ,
                            marginBottom:"75px",
                            
                            }}/>
                             <Button variant="outline-warning"  style = {{
                                    marginTop : '2px',
                                    marginLeft : "30px"
                                    }} onClick = { ( event ) => ToShowVote( Question )}>
                                    View Poll
                            </Button>
                     </Card.Body>
              </Card>

        ) }
const mapStateToProps = ( state ) =>{
    return({
        users:state.getUserReducer.Users,
    })
}
export default withRouter(connect(mapStateToProps,null)(ShowQuestion))