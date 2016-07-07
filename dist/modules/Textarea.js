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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultTextAreaClass = 'no-resize';
var defaultWrapperClass = 'textarea-group space-below-xs';
var errorClass = 'has-error';

var Textarea = function (_Component) {
  _inherits(Textarea, _Component);

  function Textarea(props) {
    _classCallCheck(this, Textarea);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Textarea).call(this, props));

    _this._onChange = function (event) {
      var onChange = _this.props.onChange;
      var _event$target = event.target;
      var name = _event$target.name;
      var value = _event$target.value;


      if (!_this.props.value) {
        _this.setState({ value: value });
      }

      onChange(name, value, event);
    };

    _this.state = {
      value: props.defaultValue
    };
    return _this;
  }

  _createClass(Textarea, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var _props$error = _props.error;
      var error = _props$error === undefined ? '' : _props$error;
      var _props$value = _props.value;
      var value = _props$value === undefined ? '' : _props$value;
      var maxLength = _props.maxLength;
      var name = _props.name;
      var label = _props.label;


      var textAreaClass = this.props.textAreaClass ? this.props.textAreaClass + ' ' + defaultTextAreaClass : defaultTextAreaClass;
      textAreaClass = error.length || value.length > maxLength ? textAreaClass + ' ' + errorClass : textAreaClass;
      var wrapperClass = this.props.wrapperClass ? this.props.wrapperClass + ' ' + defaultWrapperClass : defaultWrapperClass;

      var charCountClass = value.length > maxLength ? 'text-right text-warning' : 'text-right text-muted';

      var _value = value ? value : this.state.value;

      return _react2.default.createElement(
        'div',
        { className: wrapperClass },
        label && label.length ? _react2.default.createElement(
          'label',
          { htmlFor: name },
          label
        ) : null,
        error.length ? _react2.default.createElement(
          'p',
          { className: 'text-warning' },
          error
        ) : null,
        _react2.default.createElement('textarea', {
          ref: 'textArea',
          name: name,
          className: textAreaClass,
          rows: this.props.rows,
          placeholder: this.props.placeholder,
          value: _value,
          onChange: this._onChange,
          disabled: this.props.disabled
        }),
        maxLength ? _react2.default.createElement(
          'p',
          { className: charCountClass },
          value.length + '/' + maxLength + ' characters'
        ) : null
      );
    }
  }]);

  return Textarea;
}(_react.Component);

Textarea.defaultProps = {
  disabled: false,
  value: '',
  wrapperClass: '',
  textAreaClass: '',
  placeholder: '',
  rows: 3,
  onChange: function onChange() {}
};
Textarea.propTypes = {
  name: _react.PropTypes.string,
  label: _react.PropTypes.string,
  error: _react.PropTypes.string,
  onChange: _react.PropTypes.func,
  placeholder: _react.PropTypes.string,
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  defaultValue: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  maxLength: _react.PropTypes.number,
  wrapperClass: _react.PropTypes.string,
  textAreaClass: _react.PropTypes.string,
  disabled: _react.PropTypes.bool,
  rows: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
};
exports.default = Textarea;