import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    render() {
        return this.props.persons.map((person, index) => {
        return <Person 
            name={person.name} 
            age={person.age}
            click={() => this.props.clicked(index)}
            key={person.id}
            changed={(event) => this.props.changed(event, person.id)} />  
        //Cuando se tiene argumentos en una función, se manda ejecutar con el () =>, si no tiene argumentos, se manda llamar sin el () =>
        });
    }
}

export default Persons;