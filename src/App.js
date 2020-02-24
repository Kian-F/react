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
      { id:'kksk',name: "Matrix", age: 24 },
      { id:'ksns',name: "Alex", age: 33 }
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
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    const person ={
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
    persons: persons
    });
  };

  userInputHandler = event => {
    this.setState({
      username: event.target.value
    });
  };

  togglePersonHandler = () => {
    const doseShow = this.state.showPersons;
    this.setState({
      showPersons: !doseShow
    });
  };

  deletePersonHandler = personsIndex => {
    //const persons = this.state.persons;
    //this will create a copy of the original array
    //const persons = this.state.persons.slice();
    //better do use the spread operater to make a copy of the array
    const persons = [...this.state.persons];

    //delet the person from the original array 1 means delet just one, personsIndex tells to start from what index
    persons.splice(personsIndex, 1);
    this.setState({ persons: persons });
  };

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
        {this.state.showPersons === true ? (
          <div>
            {this.state.persons.map((person, index) => {
              return (
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={(event)=> this.nameChangeHandler(event, person.id)}
                />
              );
            })}
          </div>
        ) : null}

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
