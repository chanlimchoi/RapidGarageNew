import React, {Component} from 'react'
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

const Wrapper = styled.section`
  padding: 4em;
  background:#ADD8E6;
`;

class Profile extends Component{
    constructor(props){
      super(props);
      this.state = {
        
      };
     
  }
 componentDidMount() {
  }

	render(){
		return(
      <div>
      <Wrapper>
        <Title>
        testing profiles  
        
        </Title>
        
      </Wrapper>
      <h3> Recent changes </h3>
      <div>
          <div className="panel-group">
            
         
          </div>
      </div>
      </div>

         )
	}
}
export default Profile;