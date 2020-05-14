import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons : [
      {name: "Max", age: 28},
      {name: "Manu", age: 29},
      {name: "Stephanie", age: 26}
    ],
    otherState: "some other value",
  }

  switchNameHandler = (newName) =>{
    //DONT DO THIS: this.state.persons[0].name="Maximilian";

    this.setState({
      persons :[
        {name: newName, age: 28},
        {name: "Manu", age: 29},
        {name: "Stephanie", age: 27}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons :[
        {name: 'Max', age: 28},
        {name: event.target.value, age: 29},
        {name: "Stephanie", age: 27}
      ]
    })
  }

  render () {

    const style = {
      backgroundColor: 'white',
      font: 'inherint',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
         <h1> Hi, I'm a React App </h1>
         <p>This is really working!</p>
         <button 
            onClick={() => this.switchNameHandler('Maximillian!!')} 
            style={style}
          >
            Switch name
          </button>

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
      </div>
    );
  }
}

export default App;


//FUNCTIONAL WAY OF DOING IT 
//  |
//  |
//  |
//  V

// const app = (props) =>{

//     const [this.state, setthis.state] = useState({
//       persons : [
//         {name: "Max", age: 28},
//         {name: "Manu", age: 29},
//         {name: "Stephanie", age: 26}
//       ]
//     });

//     const [otherState, setOtherState] = useState('some other value')

//     const switchNameHandler = (newName) =>{
//       //DONT DO THIS: this.state.persons[0].name="Maximilian";

//       setthis.state({
//         persons :[
//           {name: newName, age: 28},
//           {name: "Manu", age: 29},
//           {name: "Stephanie", age: 27}
//         ]
//       })
//     }


//     return (
//       <div className="App">
//         <h1> Hi, I'm a React App </h1>
//         <p>This is really working!</p>
//         <button onClick={switchNameHandler.bind(this, 'Maximillian')}>Switch name</button>

//         <Person 
//           name={this.state.persons[0].name} 
//           age={this.state.persons[0].age}/>
//         <Person 
//           name={this.state.persons[1].name} 
//           age={this.state.persons[1].age}
//           click={switchNameHandler.bind(this, 'Max!')} >
//             My Hobbies: Racing
//         </Person>
//         <Person 
//           name={this.state.persons[2].name} 
//           age={this.state.persons[2].age}/>
//       </div>
      
//     );

//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Does this work now?"));
// }

// export default app;