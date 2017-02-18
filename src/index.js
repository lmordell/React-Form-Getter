import React from 'react';

module.exports = (form) => {
  // Write the react form getter function here
  const results = {};
  /*
    Edge Cases:
     User does not pass in form element, throw error
     Form element is not element, throw error
     Form element has no children, return empty object
     User can only pass in a single form
     For multiple form, the user should call the function multiple times
     If User forgot to put name property on the form, 
     log a warning with input's form value "Input with the value '~~'
     was not added to the output because the element does
     not have a name property. Please add a name property
     like so: (give example)

    User should pass in a ref to a form element.
    Grab all the form elements children
    Add all valid elements to results object
    Reject invalid inputs (ie. no value, of type button, rest, etc.)
    Invalid inputs:
      -No name attribute
      -Invalid types (button, reset, submit)
      -Radio / Checkboxes that are not checked

      Strategy:
       Add form's children to a queue
       While the queue is not empty
         Check if the element has any children
           If so, enqueue the element's children
         Check if the element is an input element
           If so, validate the element (has name attr, is not invalid type)
           If the element is valid, add its name property and value
           as a <k,v> pair in results
           ie:
           {
            "username": "Lee",
            "isMale": true
           }
  */
   console.log('form children', form.children);
   return results;
};

