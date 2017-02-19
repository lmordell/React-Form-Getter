import React, { Component } from 'react';

export class ValidTypes extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="text"
            value="textValue"
          />
          <input
            type="password"
            name="password"
            value="passwordValue"
          />
          <input
            type="date"
            name="date"
            value="02/18/2017"
          />
        </form>
      </div>
    );
  }
}

export class InvalidTypes extends Component {
  render() {
    return (
      <div>
        <form>
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

export class NonInputs extends Component {
  render() {
    return (
      <div>
        <form>
          <span />
          <div />
          <p />
        </form>
      </div>
    );
  }
}

export class NestedInput extends Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <input
              type="text"
              name="nested"
              ref={(input) => { this.submitInput = input; }}
              value="nestedValue"
            />
            <div>
              <input
                type="text"
                name="second_nested"
                ref={(input) => { this.submitInput = input; }}
                value="secondNestedValue"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export class CheckedInputs extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="radio"
            name="radio_checked"
            ref={(input) => { this.radioChecked = input; }}
            value="checkedRadioValue"
            checked
          />
          <input
            type="radio"
            name="radio_unckecked"
            ref={(input) => { this.radioUnChecked = input; }}
            value="uncheckedRadioValue"
          />
          <input
            type="checkbox"
            name="checkbox_unchecked"
            ref={(input) => { this.uncheckedCheckboxInput = input; }}
            value="uncheckedCheckboxValue"
          />
          <input
            type="checkbox"
            name="checkbox_checked"
            ref={(input) => { this.checkedCheckboxInput = input; }}
            value="checkedCheckboxValue"
            checked
          />
          <select name="select">
            <option value="1" />
            <option value="2" />
            <option value="3" />
          </select>
        </form>
      </div>
    );
  }
}

export class Empty extends Component {
  render() {
    return (
      <div>
        <form>
        </form>
      </div>
    );
  }
}

export class MissingNameProp extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value="noName"
          />
        </form>
      </div>
    );
  }
}
