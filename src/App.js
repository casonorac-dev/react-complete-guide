import React, { Component } from 'react';
// import logo from './logo.svg';
import Person from './Person/Person';
import './App.css';

class App extends Component {
    state = {
        persons: [
            {name: 'Carlos', age: 31},
            {name: 'Antonio', age: 22},
            {name: 'Monica', age: 31}
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

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Carlitos', age: 31},
                {name: event.target.value, age: 25},
                {name: 'Moni', age: 31}
            ]
        });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons;
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    render() {
        //IMPORTANTE: () => this.switchNameHandler('¡Carlitos!') esta sintaxis es conveniente pero puede ser ineficiente, mejor usar bind
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };
        
        let persons = null;

        if(this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                      return <Person 
                        name={person.name} 
                        age={person.age}
                        click={() => this.deletePersonHandler(index)} />  //Cuando se tiene argumentos en una función, se manda ejecutar con el () =>, si no tiene argumentos, se manda llamar sin el () =>
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
        }

        return ( 
            <div className = "App"> 
                <h1> Hi, I 'm a React App</h1> 
                <p>This is really working!</p>
                <button 
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Persons</button> 

                {/* Condition ? if true : if false //Esto es una expresión ternaria */}
                {persons}                
            </div>
        );
    }
}

export default App;