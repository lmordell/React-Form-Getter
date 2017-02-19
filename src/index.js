import React from 'react';

module.exports = (form, ...restArgs) => {
  const args = [...restArgs] || null;
  if (!form) {
    throw new Error('Form element must be passed as an argument');
  }
  if (args.length > 0) {
    throw new Error('Must pass in a single FORM element as an argument');
  }
  if (form.tagName !== 'FORM') {
    throw new Error('Must pass in a FORM element to the function');
  }
  if (form.children.length < 1) return {};

  // Write the react form getter function here
  const results = {};
  /*
    Edge Cases:
     User does not pass in form element, throw error
     Form element is not element, throw error
     Form element has no children, return empty object
     User can only pass in a single form
     For multiple forms, the user should call the function multiple times
     If User forgot to put name property on the form,
     log a warning with input's form value "Input with the value '~~'
     was not added to the output because the element does
     not have a name property. Please add a name property
     like so: (give example)

    User should pass in a ref to a form element.
    Grab all the form elements children
    Add all valid elements to results object
    Reject invalid inputs (ie. type button, rest, etc.)
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

           //Should handle select and option as well
  */
  // Edge Cases
  // Ensure that a form element gets pased in
  // For multiple forms, the user should call the function multiple times
    // Find a way to ensure that multiple arguments aren't getting passed
  // Ensure all valid inputs have a name property or log warning
  const validTags = new Set(['INPUT', 'SELECT']);
  const invalidInputTypes = new Set(['button', 'submit', 'reset']);

  const addNodeToResults = (name, value, type) => {
    if (name) {
      results[name] = value;
    } else {
      console.warn(`Input with the value: ${value} and type:
      ${type} has no name property and could not be added to form data`);
    }
  };

  const queue = [...form.children];

  while (queue.length) {
    const currNode = queue.shift();
    const type = currNode.getAttribute('type');
    if (currNode.children.length > 0) {
      queue.push(...currNode.children);
    }
    if (validTags.has(currNode.tagName) && !invalidInputTypes.has(type)) {
      const name = currNode.getAttribute('name');
      const value = currNode.value;

      if (type === 'radio' || type === 'checkbox') {
        if (currNode.checked) addNodeToResults(name, value, type);
      } else {
        addNodeToResults(name, value, type);
      }
    }
  }
  // HOW TO ACCESS PROPERTIES:
  // console.log('form children', form.children[0]);
  // console.log('node', form.children[0]);
  // console.log('elem tag', form.children[0].tagName);
  // console.log('name', form.children[0].getAttribute('name'));
  // console.log('type', form.children[0].getAttribute('type'));
  // console.log('children', form.children[0].children);
  // console.log('value', form.children[0].value);
  return results;
};

