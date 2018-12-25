/*
	Primeiros Passos com REACT
	Projeto Final - MusicPad
	
	Edx: https://courses.edx.org/courses/course-v1:Microsoft+DEV281x+1T2018/course/
*/
import React from 'react';
import ListItem from './ListItem';


class MusList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {items: this.props.initialData};
		this.removeItem = this.removeItem.bind(this);
	}
	
	removeItem(index) {
		const itemsCopy = this.state.items.slice();
		itemsCopy.splice(index,1);
		this.setState( {items:itemsCopy}, () => {
			this.props.handleDataList(this.state.items);
		});
	}
	
	/*shouldComponentUpdate(nextProps, nextState) {
		if (this.props.data[this.props.data.lenght-1][0] !== '' && this.props.data[this.props.data.lenght-1][1] !== '') {
			return true;
		} else {
			window.alert("Please, don't forget to fill the \"Title\" and \"Author\" cell!");
			return false;
		}
	}*/
	
	componentWillReceiveProps(nextProps) {
		if (nextProps.initialData.length > this.state.items.length) {
			this.setState({items: nextProps.initialData});
		}
	}
	
	render() {
		let listItems = [];
		for (let i=0; i<this.state.items.length; i++) {
			let item = this.state.items[i];
			
			listItems.push(
				<ListItem key={i}
					title={item[0]}
					author={item[1]}
					year={item[2]}
					style={item[3]}
					comments={item[4]}
					resources={item[5]}
					removeItem={() => this.removeItem(i)}
				/>
			);
		}
	
		if (this.props.active === this.props.name) {
			return(
				<div className="MusList">
					<ol>
						{listItems}
					</ol>	
				</div>
			);
		} else {
			return null;
		}
	}
}

export default MusList