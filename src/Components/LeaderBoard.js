import React , {Component} from "react";
import { connect } from "react-redux";
import { Card , CardGroup } from "react-bootstrap"


class LeaderBoard extends Component
{ 

 render()
 {  
     const { Users } = this.props
     console.log("in props",Users)
    const Users_Scores = Object.values( Users ).map ( (UserInfo ) => {
        const User_score = Object.keys(UserInfo.answers).length + UserInfo.questions.length
        return({ "UserScoreDetails" :{ 
            id: UserInfo.id, 
            "User_score":User_score
        } })})
    const SortedUsers_Scores = Users_Scores.sort(( a,b) =>b.UserScoreDetails.User_score - a.UserScoreDetails.User_score )
    


return(
<div>
         {SortedUsers_Scores.map(( SortedUser ) => {
             
             const User = Users[SortedUser.UserScoreDetails.id]
             const { avatarURL } = User
             return(<div style={{margin:"auto"}}>
              <CardGroup style = {{
                  width:"32em",
                  height : "170px",
                  marginLeft:"270px" ,
                  marginBottom:"20px",
                  textAlign:"center",
                  
               }}>

                    <Card style={{ width:"2em", }}>
                       <img src = {`${avatarURL}`}  width="170px" height="170px" className="img-circle" alt="userAvatar"></img>
                    </Card>
              
                    <Card style={{ width:"12em",}}>
                        <Card.Title style={{ margin:"auto"}}> <h6 style={{color:"#FFC300"}}> { User.name }</h6>  </Card.Title>
                        <Card.Text style = {{ margin:"auto",color:"#069A54"}}>
                            <h6> Answered Question { Object.values(User.answers).length }</h6>
                            <h6>Created Question { User.questions.length }</h6>
                        </Card.Text>
                    </Card>
                    <Card>
                         <Card.Header> <h6 style={{color:"#FFC300"}}> Score</h6> </Card.Header>
                          <Card.Text style={{ margin:"auto",}}>{ SortedUser.UserScoreDetails.User_score }</Card.Text>                                    
                    </Card>
              </CardGroup>        
              </div> )})}
            
</div>)

 }
}


const mapStateToProps = ( state ) =>{
    console.log("state",state)
    return({
        Users:state.getUserReducer.Users,
    })
}

export default  connect( mapStateToProps, null )( LeaderBoard )