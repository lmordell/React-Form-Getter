/* global define, it, describe, beforeEach */
import React from 'react';
import ReactDom from 'react-dom'
import { expect } from 'chai';
import {
       renderIntoDocument,
       scryRenderedDOMComponentsWithTag
     } from 'react-addons-test-utils';
import TestComponent from './testComponent';
import rfGetter from './index';

describe('React-Form-Getter', () => {

    const component = renderIntoDocument(
      <TestComponent />
    );


  it('should be a function', () => {
  	const inputs = scryRenderedDOMComponentsWithTag(component, 'input');
  	const firstInput = inputs[0];
    console.log('element value attr', firstInput.getAttribute('value'));
    console.log('component refs attr', firstInput.getAttribute('name'));
    expect(rfGetter).to.be.a('function');
  });
  it('should ignore non input elements', () => {

  });
  it('should ignore inputs of type submit, button, and reset', () => {

  });
  it('should only get checked radio values', () => {

  });
  it('should only get checked checkbox values', () => {

  });
});
