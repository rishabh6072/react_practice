import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/cockpit/Cockpit';
class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount () {
    console.log('[App.js] Inside componentDidMount');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Update App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[Update App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[Update App.js] Inside componentDidUpdate');
  }
  
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
    console.log('[App.js] Inside render');
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons} changed={this.nameChangedHandler} clicked={this.deletePersonHandler}/>;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
        <button onClick={()=> {this.setState({showPersons: true})}}>Show Persons</button>
          <Cockpit 
            appTitle={this.props.title}
            showPersons={this.state.showPersons} 
            persons={this.state.persons} 
            clicked={this.tooglePersonsHandler} 
          />
          {persons}
        </div>
    );
  }
}

export default App;
