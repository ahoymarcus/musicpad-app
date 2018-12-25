'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	Primeiros Passos com REACT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	Projeto Final - MusicPad
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	Codecademy:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	1."If you have a component class with nothing but a render function, then you can rewrite that component class in a very different way. Instead of using React.Component, you can write it as JavaScript function!"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	2."A component class written as a function is called a stateless functional component. Stateless functional components have some advantages over typical component classes."
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	"Not only are stateless functional components more concise, but they will subtly influence how you think about components in a positive way. They emphasize the fact that components are basically functions! A component takes two optional inputs, props and state, and outputs HTML and/or other components."
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	Edx: https://courses.edx.org/courses/course-v1:Microsoft+DEV281x+1T2018/course/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var srcImg = {
	src1: 'images/aerial-view-orchestra.jpg',
	src2: 'images/nota-semicolcheia.jpg',
	src3: 'images/nota-minima.jpg',
	src4: 'images/nota-semibreve.jpg'
};

var MusForm = function (_React$Component) {
	_inherits(MusForm, _React$Component);

	function MusForm(props) {
		_classCallCheck(this, MusForm);

		var _this = _possibleConstructorReturn(this, (MusForm.__proto__ || Object.getPrototypeOf(MusForm)).call(this, props));

		_this.state = {
			title: '',
			author: '',
			year: '',
			style: '',
			comments: '',
			resources: '',
			items: []
		};
		_this.handleChange = _this.handleChange.bind(_this);
		_this.addItem = _this.addItem.bind(_this);
		return _this;
	}

	_createClass(MusForm, [{
		key: 'handleChange',
		value: function handleChange(e) {
			this.setState(_defineProperty({}, e.target.name, e.target.value));
		}
	}, {
		key: 'addItem',
		value: function addItem() {
			var _this2 = this;

			var itemsCopy = [];
			itemsCopy.push([this.state.title, this.state.author, this.state.year, this.state.style, this.state.comments, this.state.resources]);
			this.setState({ title: '', author: '', year: '', style: '', comments: '', resources: '', items: itemsCopy }, function () {
				//console.log(this.state.items);
				//console.log(this.state.items[this.state.items.length - 1]);

				// passar apenas o último index
				_this2.props.handleDataForm(_this2.state.items[_this2.state.items.length - 1]);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var arrayStyle = ['Erudito', 'Alternativo', 'Latino', 'Rock\'n roll', 'Samba'];
			var options = arrayStyle.map(function (option, index) {
				return _react2.default.createElement(
					'option',
					{ key: index, value: option },
					option
				);
			});

			if (this.props.active !== this.props.name) {
				return null;
			} else {
				return _react2.default.createElement(
					'div',
					{ className: 'MusForm' },
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(
							'div',
							{ className: 'col-1-2' },
							_react2.default.createElement(
								'div',
								{ style: { marginBottom: 30 } },
								_react2.default.createElement(
									'label',
									null,
									_react2.default.createElement(
										'span',
										null,
										'Title'
									)
								),
								_react2.default.createElement('br', null),
								_react2.default.createElement('input', { name: 'title', type: 'text', onChange: this.handleChange, value: this.state.userInput }),
								_react2.default.createElement(
									'h3',
									null,
									this.state.title
								)
							),
							_react2.default.createElement(
								'div',
								{ style: { marginBottom: 30 } },
								_react2.default.createElement(
									'label',
									null,
									_react2.default.createElement(
										'span',
										null,
										'Author'
									)
								),
								_react2.default.createElement('br', null),
								_react2.default.createElement('input', { name: 'author', type: 'text', onChange: this.handleChange, value: this.state.author }),
								_react2.default.createElement(
									'h3',
									null,
									this.state.author
								)
							),
							_react2.default.createElement(
								'div',
								{ style: { marginBottom: 30 } },
								_react2.default.createElement(
									'label',
									null,
									_react2.default.createElement(
										'span',
										null,
										'Year'
									)
								),
								_react2.default.createElement('br', null),
								_react2.default.createElement('input', { name: 'year', type: 'text', onChange: this.handleChange, value: this.state.userInput }),
								_react2.default.createElement(
									'h3',
									null,
									this.state.year
								)
							),
							_react2.default.createElement(
								'div',
								{ style: { marginBottom: 30 } },
								_react2.default.createElement(
									'label',
									null,
									_react2.default.createElement(
										'span',
										null,
										'Music Style'
									)
								),
								_react2.default.createElement('br', null),
								_react2.default.createElement(
									'select',
									{ name: 'style', value: this.state.value, onChange: this.handleChange },
									options
								),
								_react2.default.createElement(
									'h3',
									{ style: { display: 'inline', paddingLeft: 40 } },
									this.state.style
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-1-3' },
							_react2.default.createElement('img', { src: srcImg.src1 })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'container' },
						_react2.default.createElement(
							'div',
							{ className: 'col-11-12' },
							_react2.default.createElement('hr', { className: 'marginBot2' })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(
							'div',
							{ className: 'col-11-12 border1' },
							_react2.default.createElement(
								'label',
								null,
								'Music Notes...'
							),
							_react2.default.createElement('br', null),
							_react2.default.createElement('img', { id: 'reset-marginBottom', className: 'areaImg1', src: srcImg.src2 }),
							_react2.default.createElement('textarea', { name: 'comments', className: 'textarea1', onChange: this.handleChange, value: this.state.comments }),
							_react2.default.createElement(
								'h3',
								null,
								this.state.comments
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'container' },
						_react2.default.createElement(
							'div',
							{ className: 'col-11-12' },
							_react2.default.createElement('hr', { className: 'marginTop2 marginBot2' })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'row  marginTop1' },
						_react2.default.createElement(
							'div',
							{ className: 'col-11-12 border2' },
							_react2.default.createElement(
								'label',
								null,
								'Web Resources Links...'
							),
							_react2.default.createElement('br', null),
							_react2.default.createElement('img', { className: 'areaImg2', src: srcImg.src3 }),
							_react2.default.createElement('textarea', { name: 'resources', className: 'textarea2', onChange: this.handleChange, value: this.state.resources }),
							_react2.default.createElement(
								'h3',
								null,
								this.state.resources
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'row  marginTop1' },
						_react2.default.createElement(
							'div',
							{ className: 'col-11-12 MusForm' },
							_react2.default.createElement(
								'button',
								{ className: 'submit-style', onClick: this.addItem },
								'Submit'
							)
						)
					)
				);
			}
		}
	}]);

	return MusForm;
}(_react2.default.Component);

exports.default = MusForm;