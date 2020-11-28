import React, {Component} from 'react';

class Header extends Component{
//every component must render something
state = {
    name : '(Name)',
    city : '(City)'
}
//event handlers need arrow functions to work
handleNameChange = (event) => {
    console.log('someone typed!', event.target.value);
    
    this.setState({
        name : event.target.value
    })

}

handleCityChange = (event) => {
    console.log('someone typed!', event.target.value);
    
    this.setState({
        city : event.target.value
    })

}

showState = (event) => {
    console.log('you clicked the button. state:', this.state);
    

}


render(){
    //{} on JSX are our window into javascript variables
    return (   
        <>
        <h1>Hello From Header!</h1>
        <div>
            <input placeholder="Name" onChange={this.handleNameChange} />
            <input placeholder="City" onChange={this.handleCityChange} />
            <button onClick={this.showState}>Show State</button>
    <p>Hello. My name is {this.state.name}. I am from {this.state.city}.</p>
       {/* this is a comment in JSX land */}
        </div>
        </>
    )
 }
}

export default Header; 
