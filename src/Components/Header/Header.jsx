import React, {Component} from 'react';

class Header extends Component{
//every component must render something
state = {
    name : 'Sarah Kado',
    city : 'Saint Paul, MN'
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
        <section id="helloSection"> 
        <h1>My name is {this.state.name}.</h1>
        <h2>I am from {this.state.city}.</h2>
        </section>
        <div>
            <input placeholder="Name" onChange={this.handleNameChange} />
            <input placeholder="City" onChange={this.handleCityChange} />
            <button onClick={this.showState}>Show State</button>
            
            <section id="links"> 
                <a href="https://github.com/JoelleKado">GitHub</a>
                <br/>
                <a href="https://www.linkedin.com/in/joellekado/">LinkedIn</a>
            </section>
            {/* this is a comment in JSX land */}
        </div>
        </>
    )
 }
}

export default Header; 
