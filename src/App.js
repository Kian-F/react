import React, { Component } from 'react';
import {Comment} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'


class App extends Component{


  state={
    
    persons:[
      {name:'Matrix', age: 24},
      {name:'Alex', age:33}

    ]
   

    }

    switchNameHandler = (newName) => {
     
      this.setState( {
        persons: [
          { name: newName, age: 28 },
          { name: 'WOW', age: 29 }
          
        ]
      } )
    }
      nameChangeHandler = (event) =>{
        this.setState({
          persons:[
            {name:'Max', age:35},
            {name:event.target.value, age:45}
          ]
        })
      }
      
    
    render(){
      return(
        <div className="App">
          <button onClick={()=>this.switchNameHandler('Yesss') }>Switch Name</button>
          <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
          <Person click={this.nameChangeHandler} 
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangeHandler}/>
        </div>
        
      )
    }
    
  }



export default App;
