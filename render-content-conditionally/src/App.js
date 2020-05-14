import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  togglePersonDiv = () => {
    const showPersonsDiv = this.state.showPersons;
    this.setState({ showPersons: !showPersonsDiv });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 27 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherint",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null; //persons variable is by default set to null so that the render function does not need to render elements if the state of showPersons === false

    // if the showPersons state === true then we assign the variable persons to the JSX div containing the Person components
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.nameChangedHandler}
          >
            My Hobbies: Racing
          </Person>

          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
    }
    return (
      <div className="App">
        <h1> Hi, I'm a React App </h1>
        <p>This is really working!</p>
        <button onClick={this.togglePersonDiv} style={style}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

/*

One way of rendering content conditionally inside of the JSX code can be by encapsulating the Person components inside a div 
and further encapsulating that inside a ternary expression. The ternary expression is checking if the showPersons state is equal to true.
If yes, then we render the persons div, else we don't render anything


{
  this.state.showPersons ?
    <div>
      <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
      />
      <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Max!')} 
        changed={this.nameChangedHandler}
      >
          My Hobbies: Racing
      </Person>
      
      <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}
      />
    </div> : null
}



*/
