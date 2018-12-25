/*
	Primeiros Passos com REACT
	Projeto Final - MusicPad
	
	
	Codecademy:
	1."If you have a component class with nothing but a render function, then you can rewrite that component class in a very different way. Instead of using React.Component, you can write it as JavaScript function!"
	2."A component class written as a function is called a stateless functional component. Stateless functional components have some advantages over typical component classes."
	"Not only are stateless functional components more concise, but they will subtly influence how you think about components in a positive way. They emphasize the fact that components are basically functions! A component takes two optional inputs, props and state, and outputs HTML and/or other components."
	
	Edx: https://courses.edx.org/courses/course-v1:Microsoft+DEV281x+1T2018/course/
*/
import React from 'react';


const srcImg = {
	src1: 'images/aerial-view-orchestra.jpg',
	src2: 'images/nota-semicolcheia.jpg',
	src3: 'images/nota-minima.jpg',
	src4: 'images/nota-semibreve.jpg',
}; 

class MusForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			author: '',
			year: '',
			style: '',
			comments: '',
			resources: '',
			items: [],
		};
		this.handleChange = this.handleChange.bind(this);
		this.addItem = this.addItem.bind(this);
	}
	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	
	addItem() {
		let itemsCopy = [];
		itemsCopy.push([this.state.title,this.state.author,this.state.year,this.state.style,this.state.comments,this.state.resources]);
		this.setState({title:'', author:'', year:'', style:'', comments:'', resources:'', items: itemsCopy}, () => {
			//console.log(this.state.items);
			//console.log(this.state.items[this.state.items.length - 1]);
			
			// passar apenas o último index
			this.props.handleDataForm(this.state.items[this.state.items.length - 1]);
		});
	}
		
	render() {
		const arrayStyle = ['Erudito', 'Alternativo', 'Latino', 'Rock\'n roll', 'Samba'];
		var options = arrayStyle.map((option, index) => {
			return <option key={index} value={option}>{option}</option>;
		});
		
		if (this.props.active !== this.props.name) {
			return null;
		} else {
			return(
				<div className="MusForm">
					<div className="row">
						<div className="col-1-2">
							<div style={{marginBottom: 30}}>
								<label><span>Title</span></label><br />
								<input name="title" type="text" onChange={this.handleChange} value={this.state.userInput} />
								<h3>{this.state.title}</h3>
							</div>
							<div style={{marginBottom: 30}}>
								<label><span>Author</span></label><br />
								<input name="author" type="text" onChange={this.handleChange} value={this.state.author} />
								<h3>{this.state.author}</h3>
							</div>
							<div style={{marginBottom: 30}}>
								<label><span>Year</span></label><br />
								<input name="year" type="text" onChange={this.handleChange} value={this.state.userInput} />
								<h3>{this.state.year}</h3>
							</div>
							<div style={{marginBottom: 30}}>
								<label><span>Music Style</span></label><br />
								<select name="style" value={this.state.value} onChange={this.handleChange}>
									
									{options}
								</select>
								<h3 style={{display: 'inline', paddingLeft: 40}}>{this.state.style}</h3>
							</div>
						</div>
						<div className="col-1-3">
							<img src={srcImg.src1} />
						</div>
					</div>
					
					<div className="container">
						<div className="col-11-12">
							<hr className="marginBot2" />
						</div>
					</div>
					
					<div className="row">
						<div className="col-11-12 border1">
							<label>Music Notes...</label>
							<br />
							<img id="reset-marginBottom" className="areaImg1" src={srcImg.src2} />
							<textarea name="comments" className="textarea1" onChange={this.handleChange} value={this.state.comments} />
							<h3>{this.state.comments}</h3>
						</div>
					</div>
					
					<div className="container">
						<div className="col-11-12">
							<hr className="marginTop2 marginBot2" />
						</div>
					</div>
					
					<div className="row  marginTop1">
						<div className="col-11-12 border2">
							<label>Web Resources Links...</label>
							<br />
							<img className="areaImg2" src={srcImg.src3} />
							<textarea name="resources" className="textarea2" onChange={this.handleChange} value={this.state.resources} />
							<h3>{this.state.resources}</h3>
						</div>
					</div>
					<div className="row  marginTop1">
						<div className="col-11-12 MusForm">
							<button className="submit-style" onClick={this.addItem}>Submit</button>
						</div>
					</div>
				</div>
			);
		}
	}
}

export default MusForm