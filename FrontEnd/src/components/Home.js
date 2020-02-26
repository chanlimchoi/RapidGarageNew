import React, { Component } from 'react';
import Post from './Post';
import Map from './Map';
import '../App.css';


function resultList(props){
      return (
     


  
      <td><h4>{props.title} </h4> Post by {props.userId}, post on {props.updatedAt} <h5><span className="label label-danger">Devices</span> <span className="label label-primary">Furniture</span></h5>
        Location: {props.street}, {props.city}, {props.state} <br/>  <h5>start on {props.startDate} end on {props.endDate}</h5></td>
     
  
  );
}

class PostList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchResult: '',
      search:'',
    };
    this.searchUpdate = this.searchUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
  }
componentDidMount() {
    fetch('http://localhost:8000/allPosts', {
      method: 'get', 
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log('response:', response)
      return response.json()
    })
    .then((data) => {
      let result = data;
      console.log('data:', data)
      this.setState({searchResult: data})
    })

  }

  handleChange(event){
    this.setState({
      search: event.target.value
    });
  }
  searchUpdate(event){
    event.preventDefault();
    const val = this.state.search;
console.log("search value: " + val);
     fetch('http://localhost:8000/all/'+val, {
      method: 'get', 
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log('response:', response)
      return response.json()
    })
    .then((data) => {
      let result = data;
      console.log('data:', data)
      this.setState({searchResult: data})
    })
  }


  render(){
    console.log('searchResult: ',this.state.searchResult);
    return (
        <div>
          <div className="col-sm-4 well">
          <form onSubmit= {this.searchUpdate}>
            <input type="text" style={{width:300}} value={this.state.search} onChange={this.handleChange} placeholder="ZipCode only" />
            <input type="submit" value="Search" />
          </ form>
          <div className="panel-group">
            
            <table id="garages">
                <th><h5><small>RECENT POSTS</small></h5></th>
              {
          (this.state.searchResult) ?
          (this.state.searchResult.map((post,key)=>{
            return (
              <tr key={key}>
                
  { (resultList(post))} 
              </tr>

            )
          })
          ): <h1>No data</h1>
        }
        </table>

           
          </div>
          </div>
           <div className="col-sm-5 well">
            <Map />
           </div>
          </div>
    );
  }
}

export default PostList
