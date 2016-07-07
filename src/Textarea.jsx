import React, { Component, PropTypes } from 'react';

const defaultTextAreaClass = 'no-resize';
const defaultWrapperClass = 'textarea-group space-below-xs';
const errorClass = 'has-error';

export default class Textarea extends Component {
  static defaultProps = {
    disabled: false,
    value: '',
    wrapperClass: '',
    textAreaClass: '',
    placeholder: '',
    rows: 3,
    onChange: () => {}
  };

  static propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    defaultValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    maxLength: PropTypes.number,
    wrapperClass: PropTypes.string,
    textAreaClass: PropTypes.string,
    disabled: PropTypes.bool,
    rows: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  };

  constructor(props) {
    super(props);

    this.state = {
      value: props.defaultValue
    };
  }

  _onChange = (event) => {
    const { onChange } = this.props;
    const { value } = event.target;

    if (!this.props.value) {
      this.setState({ value });
    }

    onChange(value, event);
  };

  render() {
    let {
      error = '',
      value = '',
      maxLength,
      name,
      label
    } = this.props;

    let textAreaClass = this.props.textAreaClass
      ? `${this.props.textAreaClass} ${defaultTextAreaClass}`
      : defaultTextAreaClass;
    textAreaClass = error.length || value.length > maxLength
      ? `${textAreaClass} ${errorClass}`
      : textAreaClass;
    const wrapperClass = this.props.wrapperClass
      ? `${this.props.wrapperClass} ${defaultWrapperClass}`
      : defaultWrapperClass;

    const charCountClass = value.length > maxLength
      ? 'text-right text-warning'
      : 'text-right text-muted';

    const _value = value ? value : this.state.value;

    return (
      <div className={wrapperClass}>
        {
          label && label.length ? <label htmlFor={name}>{label}</label> : null
        }
        {
          error.length ?
          <p className="text-warning">{error}</p>
          : null
        }
        <textarea
          ref="textArea"
          name={name}
          className={textAreaClass}
          rows={this.props.rows}
          placeholder={this.props.placeholder}
          value={_value}
          onChange={this._onChange}
          disabled={this.props.disabled}
        >
        </textarea>
        {
          maxLength ?
          <p className={charCountClass}>
            {`${value.length}/${maxLength} characters`}
          </p>
          : null
        }
      </div>
    );
  }

}
