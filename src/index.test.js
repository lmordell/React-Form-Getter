/* global define, it, describe, beforeEach */
import React from 'react';
import ReactDom from 'react-dom'
import { expect } from 'chai';
import {
       renderIntoDocument,
       scryRenderedDOMComponentsWithTag,
       findRenderedDOMComponentWithTag
     } from 'react-addons-test-utils';
import TestComponent from './testComponent';
import rfGetter from './index';

describe('React-Form-Getter', () => {

  const component = renderIntoDocument(
    <TestComponent />
  );

  const inputs = scryRenderedDOMComponentsWithTag(component, 'input');
  const firstInput = inputs[0];
  // console.log('element value attr', firstInput.getAttribute('value'));
  // console.log('component refs attr', firstInput.getAttribute('name'));

  describe('Functionality', () => {
    it('should be a function', () => {
      expect(rfGetter).to.be.a('function');
    });
    it('should reject inputs that are not form elements', () => {

    });
    it('should create an object of all valid inputs', () => {
      const form = findRenderedDOMComponentWithTag(component, 'form');
      const formData = rfGetter(form);

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

  describe('Edge Cases', () => {
    it('should have an input', () => {

    });
    it('should reject an input that is not a form element', () => {

    });
    it('should have children', () => {

    });
    it('should only accept a single form', () => {

    });
    it('should log a warning when a valid input has no name attr', () => {

    });    
  });

});
