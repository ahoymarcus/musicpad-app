'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	Primeiros Passos com REACT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	Projeto Final - MusicPad
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	Edx: https://courses.edx.org/courses/course-v1:Microsoft+DEV281x+1T2018/course/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	shouldComponentUpdate(nextProps) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		if (this.props.removeItem == null && nextProps.counter != this.state.counter) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			return true;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var srcImg = {
	src1: 'images/partitura1.jpg',
	src2: 'images/music-notes.jpg',
	src3: 'images/Old-Sheet-Music-01.jpg'
};

var ListItem = function (_React$Component) {
	_inherits(ListItem, _React$Component);

	function ListItem(props) {
		_classCallCheck(this, ListItem);

		var _this = _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call(this, props));

		_this.state = { counter: 0 };
		return _this;
	}

	_createClass(ListItem, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var div = { padding: '30px 10px' };
			var paddingTop = { paddingTop: 20 };
			var divLabel = { marginBottom: 10 };

			if (this.props.removeItem == null) {
				return _react2.default.createElement(
					'div',
					{ className: 'MusList imgMasked bg-image' },
					_react2.default.createElement('img', { src: srcImg.src1, alt: 'imagem de uma partitura de m\xFAsica' }),
					_react2.default.createElement(
						'div',
						{ style: paddingTop, className: 'grid' },
						_react2.default.createElement(
							'div',
							{ id: 'backgroundTransparent', style: divLabel, className: 'element-1' },
							_react2.default.createElement(
								'label',
								null,
								'Title: ',
								_react2.default.createElement(
									'span',
									null,
									this.props.title
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ id: 'backgroundTransparent', style: divLabel, className: 'element-2' },
							_react2.default.createElement(
								'label',
								null,
								'Author: ',
								_react2.default.createElement(
									'span',
									null,
									this.props.author
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ id: 'backgroundTransparent', style: divLabel, className: 'element-3' },
							_react2.default.createElement(
								'label',
								null,
								'Year: ',
								_react2.default.createElement(
									'span',
									null,
									this.props.year
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ id: 'backgroundTransparent', style: divLabel, className: 'element-4' },
							_react2.default.createElement(
								'label',
								null,
								'Style: ',
								_react2.default.createElement(
									'span',
									null,
									this.props.style
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ id: 'backgroundTransparent', style: divLabel, className: 'comments' },
							_react2.default.createElement(
								'label',
								null,
								'Comments: ',
								_react2.default.createElement(
									'span',
									null,
									this.props.comments
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ id: 'backgroundTransparent', style: divLabel, className: 'resources' },
							_react2.default.createElement(
								'label',
								null,
								'Resources: ',
								_react2.default.createElement(
									'span',
									null,
									this.props.resources
								)
							)
						)
					)
				);
			} else {
				return _react2.default.createElement(
					'div',
					{ style: div, className: 'grid' },
					_react2.default.createElement(
						'button',
						{ className: 'remove remove-style', onClick: function onClick() {
								return _this2.props.removeItem();
							} },
						'x'
					),
					_react2.default.createElement(
						'div',
						{ className: 'element-1' },
						_react2.default.createElement(
							'label',
							null,
							'Title: ',
							_react2.default.createElement(
								'span',
								null,
								this.props.title
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'element-2' },
						_react2.default.createElement(
							'label',
							null,
							'Author: ',
							_react2.default.createElement(
								'span',
								null,
								this.props.author
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'element-3' },
						_react2.default.createElement(
							'label',
							null,
							'Year: ',
							_react2.default.createElement(
								'span',
								null,
								this.props.year
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'element-4' },
						_react2.default.createElement(
							'label',
							null,
							'Style: ',
							_react2.default.createElement(
								'span',
								null,
								this.props.style
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'comments' },
						_react2.default.createElement(
							'label',
							null,
							'Comments: ',
							_react2.default.createElement(
								'span',
								null,
								this.props.comments
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ id: 'overflow-hidden', className: 'resources' },
						_react2.default.createElement(
							'label',
							null,
							'Resources: ',
							_react2.default.createElement(
								'span',
								null,
								this.props.resources
							)
						)
					)
				);
			}
		}
	}]);

	return ListItem;
}(_react2.default.Component);

exports.default = ListItem;