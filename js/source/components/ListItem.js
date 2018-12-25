/*
	Primeiros Passos com REACT
	Projeto Final - MusicPad
	
	Edx: https://courses.edx.org/courses/course-v1:Microsoft+DEV281x+1T2018/course/
	
	shouldComponentUpdate(nextProps) {
		if (this.props.removeItem == null && nextProps.counter != this.state.counter) {
			return true;
		}
	}
*/
import React from 'react';


const srcImg = {
	src1: 'images/partitura1.jpg',
	src2: 'images/music-notes.jpg',
	src3: 'images/Old-Sheet-Music-01.jpg'
};

class ListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {counter: 0};
	}
	
	render() {
		const div = {padding: '30px 10px'};
		const paddingTop = {paddingTop: 20};
		const divLabel = {marginBottom: 10};
		
		if (this.props.removeItem == null) {
			return(
				<div className="MusList imgMasked bg-image">
					<img src={srcImg.src1} alt="imagem de uma partitura de música" />
					<div style={paddingTop} className="grid">
						<div id="backgroundTransparent" style={divLabel} className="element-1">
							<label>Title: <span>{this.props.title}</span></label>
						</div>	
						<div id="backgroundTransparent" style={divLabel} className="element-2">
							<label>Author: <span>{this.props.author}</span></label>
						</div>	
						<div id="backgroundTransparent" style={divLabel} className="element-3">
							<label>Year: <span>{this.props.year}</span></label>
						</div>	
						<div id="backgroundTransparent" style={divLabel} className="element-4">	
							<label>Style: <span>{this.props.style}</span></label>
						</div>	
						<div id="backgroundTransparent" style={divLabel} className="comments">
							<label>Comments: <span>{this.props.comments}</span></label>
						</div>	
						<div id="backgroundTransparent" style={divLabel} className="resources">
							<label>Resources: <span>{this.props.resources}</span></label>
						</div>
					</div>
				</div>
			);
		} else {
			return(
				<div style={div} className="grid">
					<button className="remove remove-style" onClick={() => this.props.removeItem()}>x</button>
					<div className="element-1">
						<label>Title: <span>{this.props.title}</span></label>
					</div>	
					<div className="element-2">
						<label>Author: <span>{this.props.author}</span></label>
					</div>	
					<div className="element-3">
						<label>Year: <span>{this.props.year}</span></label>
					</div>	
					<div className="element-4">	
						<label>Style: <span>{this.props.style}</span></label>
					</div>	
					<div className="comments">
						<label>Comments: <span>{this.props.comments}</span></label>
					</div>	
					<div id="overflow-hidden" className="resources">
						<label>Resources: <span>{this.props.resources}</span></label>
					</div>
				</div>
			);
		}
	}
}

export default ListItem