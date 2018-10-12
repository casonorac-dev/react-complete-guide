import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => {
    return <Person 
        name={person.name} 
        age={person.age}
        click={() => props.clicked(index)}
        key={person.id}
        changed={(event) => props.changed(event, person.id)} />  
    //Cuando se tiene argumentos en una función, se manda ejecutar con el () =>, si no tiene argumentos, se manda llamar sin el () =>
});

export default persons;