import React, { Component } from 'react';

export default class TestComponent extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="text"
            ref={(input) => { this.textInput = input; }}
            value="textValue"
          />
          <input
            type="checkbox"
            name="checkbox"
            ref={(input) => { this.checkedCheckboxInput = input; }}
            value="checkedCheckboxValue"
            checked
          />
          <input
            type="checkbox"
            name="checkbox"
            ref={(input) => { this.uncheckedCheckboxInput = input; }}
            value="uncheckedCheckboxValue"
            checked
          />
          <span id="ignore" />
          <input
            type="radio"
            name="radio"
            ref={(input) => { this.radioChecked = input; }}
            checked
          />
          <input
            type="radio"
            name="radio"
            ref={(input) => { this.radioUnChecked = input; }}
          />
          <input
            type="submit"
            name="submit"
            ref={(input) => { this.submitInput = input; }}
          />
          <input
            type="reset"
            name="reset"
            ref={(input) => { this.resetInput = input; }}
          />
          <input
            type="button"
            name="button"
            ref={(input) => { this.buttonInput = input; }}
          />
        </form>
      </div>
    );
  }
}
