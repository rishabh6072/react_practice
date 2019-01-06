import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 'qwwqwq', name: "Rishabh", age: 25 },
      { id: 'sasas', name: "Doya", age: 24 },
      { id: 'dfsf', name: "Dobby", age: 26 }
    ],
    otherState: 'Some other value',
    showPersons: false,
  }

  // this inside here will not refer to the class if we won't use the function syntax used below.
  switchNameHandler = (newName) => {
    console.log("clicked");
    this.setState({
      persons: [
        { name: newName, age: 25 },
        { name: "Rishabh", age: 24 },
        { name: "Doya", age: 26 }
      ]
    })
  }

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    })
  }

  deletePersonHandler = (personIndex) => {
    // Creating a reference of this.state.persons array into persons. 
    // const persons = this.state.persons;

    // Copying a this.state.persons into persons.
    // Slice without arguments simply copies the full array and
    // returns a new one which is then stored here.
    // const persons = this.state.persons.slice();
    // OR use pread operator.
    const persons = [...this.state.persons];


    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    };

    // Alternative approach to copy the object not the reference.
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}><a href="#">Portfolio</a></Person>
            <Person 
              click={this.switchNameHandler.bind(this, 'Max')} 
              changed={this.nameChangedHandler}
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age} 
            /> */}
        </div>
      )

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div className="App">
          <h1>BIGFM 92.7</h1>
          <p className={classes.join(' ')}>Nation wide radio station, India</p>
          {/* ------------------------1----------------------------------------------- */}
          {/* <button style={style} onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button> */}
          {/* ------------------------2 -It can be inefficient use bind syntax instead */}
          {/* <button onClick={() => this.switchNameHandler('Maximilian!!') }>Switch Name</button> */}
          <button style={style} onClick={this.tooglePersonsHandler}>Toogle Persons</button>
          {persons}
        </div>
    );
  }
}

export default App;
