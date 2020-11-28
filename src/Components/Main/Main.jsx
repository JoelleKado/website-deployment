import React, {Component} from 'react';

class Main extends Component{
//every component must render something

//event handlers need arrow functions to work



render(){
    //{} on JSX are our window into javascript variables
    return (   
        <>
        <h1>&copy; 2020</h1>
        {/* <div>
            <input placeholder="Name" onChange={this.handleNameChange} />
            <input placeholder="City" onChange={this.handleCityChange} />
            <button onClick={this.showState}>Show State</button>
    <p>Hello. My name is {this.state.name}. I am from {this.state.city}.</p>
        </div> */}
        </>
    )
 }
}

export default Main; 
