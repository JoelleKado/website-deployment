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
        <section id="aboutMe">
            <h2>About Me</h2>
            <h3>By study, I am a Full Stack Engineer at Prime Digital Academy. 
                By nature, I am an artist. I am looking to grow as an Engineer, 
                through Entry-Level Employment and/or Internship. 
            </h3>
        </section>
        <div>
            <input placeholder="Name" onChange={this.handleNameChange} />
            <input placeholder="City" onChange={this.handleCityChange} />
            <button onClick={this.showState}>Show State</button>
            
            <section class="pinkClass"> 
            <h3>The Professional</h3>
            <a href="https://www.linkedin.com/in/joellekado/">LinkedIn</a>
            </section>
            <section class="pinkClass">
                <h3>The Code</h3>
                <a href="https://github.com/JoelleKado">GitHub</a>

            </section>
            <section class="pinkClass">
                <h3>The Art</h3>
                <a href="https://collections.artsmia.org/exhibitions/2760/foot-in-the-door/art/1351">Foot in the Door 5, presented by Minneapolis Institute of Art</a>

            </section>
            {/* this is a comment in JSX land */}
        </div>
        </>
    )
 }
}

export default Header; 
