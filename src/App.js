import React, { Component } from 'react';
// import logo from './logo.svg';
import Person from './Person/Person';
import Radium from 'radium';
import './App.css';

class App extends Component {
    state = {
        persons: [ //El ID de los elementos puede ser cualquier valor siempre y cuando se único.
            {id: '1', name: 'Carlos', age: 31},
            {id: '2', name: 'Antonio', age: 22},
            {id: '3', name: 'Monica', age: 31}
        ],
        otherState: 'Some other value',
        showPersons: false
    } //Can only be build on components done like this, extending Component

    // switchNameHandler = (newName) => {
    //     //console.log('Was clicked!');
    //     // DON'T DO THIS: this.state.persons[0].name = 'Carlitos';
    //     this.setState({
    //         persons: [
    //             {name: newName, age: 31},
    //             {name: 'Toñito', age: 25},
    //             {name: 'Moni', age: 31}
    //         ]
    //     });
    // }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {...this.state.persons[personIndex]}; //Evitamos mutar el estado directamente y agregarmos los valores a un nuevo objeto copiándolos desde el original con el operador ...

        /** Este sería otra aproximación a la línea de arriba:
         * const person = Object.assign({}, this.state.persons[personIndex]);*/
        
        person.name = event.target.value; //I'm working with a copy of the current state object
        const persons = [...this.state.persons]; //I'm working with a copy of the current state
        persons[personIndex] = person; //I'm updating value on the copy of the state

        this.setState({ persons: persons }); //I'm updating real state with the modified copy value

        // This is the old way I have before do the changes 
        // this.setState({
        //     persons: [
        //         {name: 'Carlitos', age: 31},
        //         {name: event.target.value, age: 25},
        //         {name: 'Moni', age: 31}
        //     ]
        // });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice(); //A good practice is to create a copy of your array for manipulating it.
        /** Siempre debe actualizar el estado de manera inmutable para que, sin mutar el estado original, primero cree una copia, cámbiela y luego actualice el estado con el cambio de estado realizado.*/
        const persons = [...this.state.persons];//Modern version of line above.
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    render() {
        //IMPORTANTE: () => this.switchNameHandler('¡Carlitos!') esta sintaxis es conveniente pero puede ser ineficiente, mejor usar bind
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };
        
        let persons = null;

        if(this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                      return <Person 
                        name={person.name} 
                        age={person.age}
                        click={() => this.deletePersonHandler(index)}
                        key={person.id}
                        changed={(event) => this.nameChangeHandler(event, person.id)} />  //Cuando se tiene argumentos en una función, se manda ejecutar con el () =>, si no tiene argumentos, se manda llamar sin el () =>
                    })}
                    {/* The above lines replaces this block
                    <Person 
                        name={this.state.persons[0].name} 
                        age={this.state.persons[0].age} />
                    <Person 
                        name={this.state.persons[1].name} 
                        age={this.state.persons[1].age}
                        click={this.switchNameHandler.bind(this, 'Chuck!')} 
                        changed={this.nameChangeHandler} >My Hobbies: MMA</Person>
                    <Person 
                        name={this.state.persons[2].name} 
                        age={this.state.persons[2].age} /> */}
                </div> 
            );
            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            }
        }

        const classes = [];
        if(this.state.persons.length <= 2) {
            classes.push('red');
        }
        if(this.state.persons.length <= 1) {
            classes.push('bold')
        }

        return ( 
            <div className = "App"> 
                <h1> Hi, I 'm a React App</h1> 
                <p className={classes.join(' ')}>This is really working!</p>
                <button 
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Persons</button> 

                {/* Condition ? if true : if false //Esto es una expresión ternaria */}
                {persons}                
            </div>
        );
    }
}

export default Radium(App);