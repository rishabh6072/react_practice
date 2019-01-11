import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>BIGFM 92.7</h1>
      <h3>Nation wide radio station, India</h3>
      <p className={assignedClasses.join(' ')}>{props.appTitle}</p>
      {/* ------------------------1----------------------------------------------- */}
      {/* <button style={style} onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button> */}
      {/* ------------------------2 -It can be inefficient use bind syntax instead */}
      {/* <button onClick={() => this.switchNameHandler('Maximilian!!') }>Switch Name</button> */}
      <button className={btnClass} onClick={props.clicked}>Toogle Persons</button>
    </div>
  );
}

export default cockpit;