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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Logo = require('./components/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _MusList = require('./components/MusList');

var _MusList2 = _interopRequireDefault(_MusList);

var _ListItem = require('./components/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _MusForm = require('./components/MusForm');

var _MusForm2 = _interopRequireDefault(_MusForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*1.antiqueWhite, 2.khaki , 3.palegoldenrod , 4.wheat */
var pallet = [{ backgroundColor: 'transparent' }, { backgroundColor: 'rgba(238,232,170,0.09)' }, { backgroundColor: 'rgba(240, 230, 140, 1)' }, { backgroundColor: 'rgba(238, 232, 170, 1)' }, { backgroundColor: 'rgba(245, 222, 179, 1)' }];
var headers = 'headers';
var data = 'data';

data = initData1(headers, data);

if (!headers) {
	headers = ['Title', 'Author', 'Year', 'Style', 'Comments', 'Resources'];
}

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = {
			selectedOption: 'option2',
			headers: _this.props.headers,
			data: _this.props.initialData,
			lastInput: '',
			lastInputValue: []

		};
		_this.handleRadio = _this.handleRadio.bind(_this);
		_this.handleDataList = _this.handleDataList.bind(_this);
		_this.handleDataForm = _this.handleDataForm.bind(_this);
		return _this;
	}

	_createClass(App, [{
		key: 'handleRadio',
		value: function handleRadio(e) {
			this.setState({ selectedOption: e.target.value });
		}
	}, {
		key: 'handleDataList',
		value: function handleDataList(items) {
			var _this2 = this;

			console.log("items.length: " + items.length);
			console.log(items);
			if (items.length > 0) {
				var dataCopy = [];
				dataCopy.push(items);
				this.setState({ data: dataCopy }, function () {
					console.log("handleDataList:");
					console.log(_this2.state.data);

					var dataUpdated = [];
					dataUpdated.push(_this2.state.data);
					localStorage.setItem('data', JSON.stringify(dataUpdated));
				});
			} else {
				this.setState({ data: [] });
			}
		}
	}, {
		key: 'handleDataForm',
		value: function handleDataForm(items) {
			var _this3 = this;

			console.log("this.state.data.length: " + this.state.data.length);
			console.log("handleDataForm items:");
			console.log(items);
			var lastInputValueCopy = [];
			lastInputValueCopy.push(items);

			if (typeof this.state.data !== 'undefined' && this.state.data != null && this.state.data.length > 0) {
				var dataCopy = this.state.data.slice();
				dataCopy.push(items);
				this.setState({ data: dataCopy, lastInput: 'Congratulations, your music list was updated!', lastInputValue: lastInputValueCopy }, function () {
					console.log("handleDataForm:");
					console.log(_this3.state.data);

					var dataUpdated = [];
					dataUpdated.push(_this3.state.data);
					localStorage.setItem('data', JSON.stringify(dataUpdated));
				});
			} else {
				var _dataCopy = [];
				_dataCopy.push(items);
				this.setState({
					data: _dataCopy, lastInput: 'Congratulations, your music list was updated!', lastInputValue: lastInputValueCopy }, function () {
					console.log("handleDataForm:");
					console.log(_this3.state.data);

					var dataUpdated = [];
					dataUpdated.push(_this3.state.data);
					localStorage.setItem('data', JSON.stringify(dataUpdated));
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var lastInputList = this.state.lastInputValue.map(function (item, index) {
				return _react2.default.createElement(_ListItem2.default, { key: index,
					removeItem: null,
					title: item[0],
					author: item[1],
					year: item[2],
					style: item[3],
					comments: item[4],
					resources: item[5]
				});
			});

			return _react2.default.createElement(
				'main',
				{ className: 'main' },
				_react2.default.createElement(
					'div',
					{ className: 'container marginTop1 marginBot1 RadioForm' },
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(
							'div',
							{ className: 'col-1' },
							_react2.default.createElement(
								'label',
								null,
								_react2.default.createElement(
									'span',
									null,
									'Music List'
								)
							),
							_react2.default.createElement('input', { type: 'radio', value: 'option1', onChange: this.handleRadio, checked: this.state.selectedOption === 'option1' }),
							_react2.default.createElement(
								'label',
								null,
								_react2.default.createElement(
									'span',
									null,
									'Music form'
								)
							),
							_react2.default.createElement('input', { type: 'radio', value: 'option2', onChange: this.handleRadio, checked: this.state.selectedOption === 'option2' })
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'container marginTop1 marginBot1' },
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(
							'div',
							{ id: 'toCol-11-12', className: 'col-1' },
							_react2.default.createElement(
								'h2',
								{ className: 'inline' },
								'Music List: reviewing our hits'
							),
							_react2.default.createElement(
								'div',
								{ style: pallet[1] },
								_react2.default.createElement(_MusList2.default, { name: 'option1', active: this.state.selectedOption, initialData: this.state.data, removeItem: this.removeItem, handleDataList: this.handleDataList })
							)
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
					{ className: 'container marginTop2 marginBot2' },
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(
							'div',
							{ className: 'col-1' },
							_react2.default.createElement(
								'h2',
								{ className: 'inline marginBot1' },
								'Music Form: Let\'s talk about ',
								_react2.default.createElement(
									'b',
									null,
									'Music'
								)
							),
							_react2.default.createElement(_MusForm2.default, { name: 'option2', active: this.state.selectedOption, handleDataForm: this.handleDataForm })
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row MusList' },
					_react2.default.createElement(
						'div',
						{ className: 'col-11-12' },
						_react2.default.createElement(
							'h4',
							{ className: 'paddingLeft1' },
							this.state.lastInput
						),
						_react2.default.createElement(
							'ol',
							{ id: 'backgroundTransparent' },
							lastInputList
						)
					)
				)
			);
		}
	}]);

	return App;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(_Logo2.default, null), document.getElementById('pad1'));
_reactDom2.default.render(_react2.default.createElement(App, { headers: headers, initialData: data }), document.getElementById('pad2'));

function initData1(headers, data) {
	var headersTemp = JSON.parse(localStorage.getItem(headers));
	var dataTemp = JSON.parse(localStorage.getItem(data));
	var temp = [];
	for (var i = 0; i < dataTemp[0].length; i++) {
		temp.push(dataTemp[0][i]);
	}
	data = temp;
	console.log(data);
	return data;
}

function initData2(headers, data) {
	var headersTemp = JSON.parse(localStorage.getItem(headers));
	var dataTemp = JSON.parse(localStorage.getItem(data));
	var temp = [];

	for (var i = 0; i < dataTemp[0].length; i++) {
		for (var j = 0; j < dataTemp[0][i].length; j++) {
			if (dataTemp[0][i][j][0].length > 1) {
				temp.push(dataTemp[0][i][j]);
			} else {
				temp.push(dataTemp[0][i]);
			}
		}
	}
	data = temp;
	console.log(data);
	return data;
}