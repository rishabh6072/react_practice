import React from 'react';

import classes from './Person.css'

const person = (props) => {


    return (
        <div className={classes.Person} >
            <p onClick={props.click}>{props.name} - {props.age}. {props.children}</p>
            <p></p>
            <input 
                type='text' 
                onChange={props.changed} 
                value={props.name} 
            />
        </div>
    );
}

export default person;