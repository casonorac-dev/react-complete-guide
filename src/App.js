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
        otherState: 'Some other value'
    } //Can only be build on components done like this, extending Component

    switchNameHandler = () => {
        //console.log('Was clicked!');
        // DON'T DO THIS: this.state.persons[0].name = 'Carlitos';
        this.setState({
            persons: [{
                    name: 'Carlitos',
                    age: 31
                },
                {
                    name: 'Toñito',
                    age: 25
                },
                {
                    name: 'Moni',
                    age: 31
                }
            ]
        });
    }

    render() {
        return ( 
            <div className = "App"> 
                <h1> Hi, I 'm a React App</h1> 
                <p>This is really working!</p>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: MMA</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div>
        );
    }
}

export default App;