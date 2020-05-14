import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "sdfsd", name: "Max", age: 28 },
      { id: "dfsgs", name: "Manu", age: 29 },
      { id: "fkhjg", name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  togglePersonDiv = () => {
    const showPersonsDiv = this.state.showPersons;
    this.setState({ showPersons: !showPersonsDiv });
  };

  //PAY ATTENTION: all new variables/constants are copys of the state values and not the state values itself
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    //const person = this.state.persons[personIndex]; this would mutate the state directly as the person is an object
    const updatedPerson = {
      ...this.state.persons[personIndex],
    };

    /*
      alternative to the spread operator

      const person = Object.assign({}, this.state.persons[personIndex]);
    */

    updatedPerson.name = event.target.value;
    const updatedPersonsState = [...this.state.persons];
    updatedPersonsState[personIndex] = updatedPerson;

    this.setState({ persons: updatedPersonsState });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons; <-- doing it this way is mutating the original state in the first place, so what we need to do is create a copy of the persons array in the state
    const persons = [...this.state.persons]; // or const persons = this.state.persons.slice(); <-- doing this will not mutate the original state
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
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
      // .map is used to create another array from one array
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
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
