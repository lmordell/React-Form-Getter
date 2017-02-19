# React-Form-Getter

Get the values from your React form with one, simple utility function.


## Installation

This package is distributed via npm:

```
npm install react-form-getter
```

## Usage

Add a ref to the form element and pass it as an argument to the rfGetter function. This will return all nested inputs in a results object 
`<name, inputValue>`. Each input should have a name attribute in order to be
added to the results object.


```javascript
const rfGetter = require('react-form-getter');

class Login extends Component {

	handleSubmit() {
	  const formData = rfGetter(this.form);
	  /*
	   formData:
	     {
		   textInput: 'textValue',
		   passwordInput: 'passwordValue'
	     }		
	  */
	}

	render() {
	  return (
		<form 
		  ref={(form) => { this.form = form; }} onSubmit={this.handleSubmit}>
		 <input
            type="text"
            name="textInput"
            value="textValue"
          />
          <input
            type="password"
            name="passwordInput"
            value="passwordValue"
          />
          <input type="sumbit" />
		</form>
	  );
	}
}
```

## Other

This utility was developed by [Lee Mordell](https://www.leemordell.com)


### Project Setup

First install the dependencies, then run the tests.

  `$ npm install`
  `$ npm test`
 

