import React, { Component } from "react";
import { Comment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";
import UserOutpot from "./components/UserOutput";
import UserInput from "./components/UserInput";

class App extends Component {
  state = {
    persons: [
      { name: "Matrix", age: 24 },
      { name: "Alex", age: 33 }
    ],
    username: "myUsername",
    showPersons: false
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "WOW", age: 29 }
      ]
    });
  };
  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: 35 },
        { name: event.target.value, age: 45 }
      ]
    });
  };

  userInputHandler = event => {
    this.setState({
      username: event.target.value
    });
  };

  togglePersonHandler = () =>{
      const doseShow = this.state.showPersons;
      this.setState({
        showPersons: !doseShow
      })
  }

  render() {
    const style = {
      backgroundColor: "blue",
      font: "inherit",
      color: "white",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      marginTop: "10px"
    };
    return (
      <div className="App">
        <button style={style} onClick={() => this.switchNameHandler("Yesss")}>
          
          Switch Name
        </button>
        <button onClick={this.togglePersonHandler}>Toggle Person</button>
        {this.state.showPersons === true ?
          <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            click={this.nameChangeHandler}
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.nameChangeHandler}
          />
        </div>
        : null
        }

        <UserOutpot userName="myName" />
        <UserOutpot userName={this.state.username} />
        <UserInput
          changed={this.userInputHandler}
          currentName={this.state.username}
        />
      </div>
    );
  }
}

export default App;
{
  /* <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol> */
}
