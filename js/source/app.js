/*
	Primeiros Passos com REACT
	Projeto Final - MusicPad
	
	
	-> Script de ponto de entrada da aplicação!!!
	
	-> The "use strict" Directive:
		The "use strict" directive was new in ECMAScript version 5.
		It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.
		The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
		With strict mode, you can not, for example, use undeclared variables.
		All modern browsers support "use strict" except Internet Explorer 9 and lower.
			
*/
'use strict'; // sempre uma boa ideia

import React from 'react';
import ReactDOM from 'react-dom';

import Logo from './components/Logo';
import MusList from './components/MusList';
import ListItem from './components/ListItem';
import MusForm from './components/MusForm';


var headers = localStorage.getItem('headers');
var data = localStorage.getItem('data');
if (!headers) {
	headers = ['Title', 'Author', 'Year', 'Style', 'Comments', 'Resources'];
	data = [
	['Carmina Burnana', 'Carl Orff', '1936', 'erudito', 'Carmina Burana is a manuscript written in 1230 by two different scribes in an early gothic minuscule...(Wikipedia)', 'https://www.youtube.com/watch?v=hKS7fkhnJiQ&t=868s'], 
	['Aquarela do Brasil', 'Ary Barroso', '1984', 'samba', 'Pertencente ao gênero "samba-exaltação", "Aquarela do Brasil" é a mais conhecida.', 'https://youtu.be/UAS3X7XCCTs'], 
	['When Doves Cry', 'Prince', '1984', 'rock and roll', 'Esta música está incluída nas 500 canções que formaram o rock and roll do Rock and Roll Hall of Fame...(Wikipedia)', 'https://www.youtube.com/watch?v=UG3VcCAlUgE&list=RDWNQ87jGCTGU&index=2']];
}

/*1.antiqueWhite, 2.khaki , 3.palegoldenrod , 4.wheat */
const pallet = [
	{backgroundColor: 'transparent'},
	 {backgroundColor: 'rgba(238,232,170,0.09)'}, {backgroundColor:'rgba(240, 230, 140, 1)'}, {backgroundColor: 'rgba(238, 232, 170, 1)'}, {backgroundColor: 'rgba(245, 222, 179, 1)'}
];

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedOption: 'option2',
			headers: this.props.headers,
			data: this.props.initialData,
			lastInput: '',
			lastInputValue: [],
			
		}
		this.handleRadio = this.handleRadio.bind(this);
		this.handleDataList = this.handleDataList.bind(this);
		this.handleDataForm = this.handleDataForm.bind(this);
	}
	handleRadio(e) {
		this.setState({selectedOption: e.target.value});
	}
	
	handleDataList(items) {
		console.log("items.length: " + items.length);
		console.log(items);
		if (items.length > 0) {
			let dataCopy = [];
			dataCopy.push(items);
			this.setState({data: dataCopy}, () => {
				console.log("handleDataList:");
				console.log(this.state.data);
			});
		} else {
			this.setState({data: []});
		}
	}
	
	handleDataForm(items) {
		console.log("this.state.data.length: " + this.state.data.length);
		console.log("handleDataForm items:");
		console.log(items);
		let lastInputValueCopy = [];
		lastInputValueCopy.push(items);
		
		if (typeof this.state.data !== 'undefined' && this.state.data != null && this.state.data.length > 0) {
			let dataCopy = this.state.data.slice();
			dataCopy.push(items);
			this.setState({data: dataCopy, lastInput: 'Congratulations, your music list was updated!', lastInputValue: lastInputValueCopy}, () => {
				console.log("handleDataForm:");
				console.log(this.state.data);
			});
		} else {
			let dataCopy = [];
			dataCopy.push(items);
			this.setState({
				data: dataCopy, lastInput: 'Congratulations, your music list was updated!', lastInputValue: lastInputValueCopy}, () => {
				console.log("handleDataForm:");
				console.log(this.state.data);
			});
		}
	}
	
	render() {
		let lastInputList = this.state.lastInputValue.map((item, index) => {
			return <ListItem key={index}
					removeItem={null}
					title={item[0]}
					author={item[1]}
					year={item[2]}
					style={item[3]}
					comments={item[4]}
					resources={item[5]}
				/>;
		});
		
		return(
			<main className="main">
				<div className="container marginTop1 marginBot1 RadioForm">
					<div className="row">
						<div className="col-1">
							<label><span>Music List</span></label>
							<input type="radio" value="option1" onChange={this.handleRadio} checked={this.state.selectedOption === 'option1'} />
							<label><span>Music form</span></label>
							<input type="radio" value="option2" onChange={this.handleRadio} checked={this.state.selectedOption === 'option2'} />
						</div>
					</div>
				</div>
				<div className="container marginTop1 marginBot1">
					<div className="row">
						<div id="toCol-11-12" className="col-1">
							<h2 className="inline">Music List: reviewing our hits</h2>
							<div style={pallet[1]}>
								<MusList name="option1" active={this.state.selectedOption} initialData={this.state.data} removeItem={this.removeItem} handleDataList={this.handleDataList} />
							</div>
						</div>
					</div>
				</div>	
				<div className="container">
					<div className="col-11-12">
						<hr className="marginTop2 marginBot2" />
					</div>
				</div>
				<div className="container marginTop2 marginBot2">
					<div className="row">
						<div className="col-1">
							<h2 className="inline marginBot1">Music Form: Let's talk about <b>Music</b></h2>
							<MusForm name="option2" active={this.state.selectedOption} handleDataForm={this.handleDataForm} />
						</div>
					</div>
				</div>
				<div className="row MusList">
					<div className="col-11-12">
						<h4 className="paddingLeft1">{this.state.lastInput}</h4>
						<ol id="backgroundTransparent">
							{lastInputList}
						</ol>
					</div>
				</div>
				
				
			</main>
		);
	}
}

ReactDOM.render(
	<Logo />,
	document.getElementById('pad1')
);
ReactDOM.render(
	<App  headers={headers} initialData={data}  />,
	document.getElementById('pad2')
);
