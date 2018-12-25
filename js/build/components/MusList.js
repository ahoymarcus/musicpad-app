'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ListItem = require('./ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	Primeiros Passos com REACT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	Projeto Final - MusicPad
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	Edx: https://courses.edx.org/courses/course-v1:Microsoft+DEV281x+1T2018/course/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var MusList = function (_React$Component) {
	_inherits(MusList, _React$Component);

	function MusList(props) {
		_classCallCheck(this, MusList);

		var _this = _possibleConstructorReturn(this, (MusList.__proto__ || Object.getPrototypeOf(MusList)).call(this, props));

		_this.state = { items: _this.props.initialData };
		_this.removeItem = _this.removeItem.bind(_this);
		return _this;
	}

	_createClass(MusList, [{
		key: 'removeItem',
		value: function removeItem(index) {
			var _this2 = this;

			var itemsCopy = this.state.items.slice();
			itemsCopy.splice(index, 1);
			this.setState({ items: itemsCopy }, function () {
				_this2.props.handleDataList(_this2.state.items);
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

	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.initialData.length > this.state.items.length) {
				this.setState({ items: nextProps.initialData });
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var listItems = [];

			var _loop = function _loop(i) {
				var item = _this3.state.items[i];

				listItems.push(_react2.default.createElement(_ListItem2.default, { key: i,
					title: item[0],
					author: item[1],
					year: item[2],
					style: item[3],
					comments: item[4],
					resources: item[5],
					removeItem: function removeItem() {
						return _this3.removeItem(i);
					}
				}));
			};

			for (var i = 0; i < this.state.items.length; i++) {
				_loop(i);
			}

			if (this.props.active === this.props.name) {
				return _react2.default.createElement(
					'div',
					{ className: 'MusList' },
					_react2.default.createElement(
						'ol',
						null,
						listItems
					)
				);
			} else {
				return null;
			}
		}
	}]);

	return MusList;
}(_react2.default.Component);

exports.default = MusList;