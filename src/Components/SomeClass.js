import React, { Component } from 'react';

class SomeClass extends Component {
	
	constructor(){
		super();
		this.state = {test: 100};
		console.log(this.state);
	}
	
	handleClick(){
		console.log("Button Clicked");
		let x = this.state.test;
		x += 100;
		this.setState({test:x});
		
	}
	
	RemoveClick(){
		console.log("Button Clicked");
		let x = this.state.test;
		x -= 100;
		this.setState({test:x});
		
	}
	
	render(){
		console.log(this.props);
		return (
			<div>
				<h1>{this.state.test}</h1>
				<div>Hello {this.props.x} {this.props.y}</div>
				<button onClick={this.handleClick.bind(this)}>Change State</button>
				<button onClick={this.RemoveClick.bind(this)}>Remove State</button>
			</div>
		);
	}
	
}

export default SomeClass;