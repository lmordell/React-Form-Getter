/* global define, it, describe, beforeEach */
import React from 'react';
import { expect } from 'chai';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
 } from 'react-addons-test-utils';
import {
  ValidTypes,
  InvalidTypes,
  NonInputs,
  NestedInput,
  CheckedInputs,
  Empty,
  MissingNameProp,
 } from './testComponents';
import rfGetter from './index';

describe('React-Form-Getter', () => {
  const validComponent = renderIntoDocument(
    <ValidTypes />,
  );
  const invalidComponent = renderIntoDocument(
    <InvalidTypes />,
  );
  const nonInputsComponent = renderIntoDocument(
    <NonInputs />,
  );
  const nestedComponent = renderIntoDocument(
    <NestedInput />,
  );
  const checkedComponent = renderIntoDocument(
    <CheckedInputs />,
  );
  const emptyComponent = renderIntoDocument(
    <Empty />,
  );
  const missignNameProp = renderIntoDocument(
    <MissingNameProp />,
  );
  describe('Functionality', () => {
    it('should be a function', () => {
      expect(rfGetter).to.be.a('function');
    });
    it('should return an object of all valid inputs', () => {
      const validForm = findRenderedDOMComponentWithTag(validComponent, 'form');
      const validFormData = rfGetter(validForm);
      expect(validFormData).to.be.an('object');
      expect(validFormData).to.deep.equal({
        text: 'textValue',
        password: 'passwordValue',
        date: '02/18/2017',
      });
    });
    it('should handle nested inputs', () => {
      const nestedForm = findRenderedDOMComponentWithTag(nestedComponent, 'form');
      const nestedFormData = rfGetter(nestedForm);
      expect(nestedFormData).to.deep.equal({
        nested: 'nestedValue',
        second_nested: 'secondNestedValue',
      });
    });
    it('should ignore non input elements', () => {
      const nonInputsForm = findRenderedDOMComponentWithTag(nonInputsComponent, 'form');
      const nonInputsFormData = rfGetter(nonInputsForm);
      expect(nonInputsFormData).to.be.an('object');
      expect(nonInputsFormData).to.be.empty;
    });
    it('should ignore inputs of type submit, button, and reset', () => {
      const invalidForm = findRenderedDOMComponentWithTag(invalidComponent, 'form');
      const invalidFormData = rfGetter(invalidForm);
      expect(invalidFormData).to.be.an('object');
      expect(invalidFormData).to.be.empty;
    });
    it('should handle checked and select types: radio, checkbox, select', () => {
      const checkedForm = findRenderedDOMComponentWithTag(checkedComponent, 'form');
      const checkedFormData = rfGetter(checkedForm);
      expect(checkedFormData).to.deep.equal({
        radio_checked: 'checkedRadioValue',
        checkbox_checked: 'checkedCheckboxValue',
        select: '1',
      });
    });
  });

  describe('Edge Cases', () => {
    it('should take in a single argument', () => {
      expect(rfGetter()).to.throw(Error, 'Form element must be passed as an argument');
    });
    it('should reject multiple arguments', () => {
      const validForm = findRenderedDOMComponentWithTag(validComponent, 'form');
      const validFormData = rfGetter(validForm);
      expect(rfGetter(validFormData, 'arg2')).to.throw(Error, 'Must pass in a single FORM element as an argument');
    });
    it('should reject an argument that is not a form element', () => {
      const div = findRenderedDOMComponentWithTag(validComponent, 'div');
      const invalidInput = rfGetter(div);
      expect(rfGetter(invalidInput)).to.throw(Error, 'Must pass in a FORM element to the function');
    });
    it('should return an empty object when no children exist', () => {
      const emptyForm = findRenderedDOMComponentWithTag(emptyComponent, 'form');
      const emptyFormData = rfGetter(emptyForm);
      expect(emptyFormData).to.be.empty;
    });
    it('should log a warning when a valid input has no name attr', () => {
      const missingNameForm = findRenderedDOMComponentWithTag(missignNameProp, 'form');
      const missingNameFormData = rfGetter(missingNameForm);
      rfGetter(missingNameFormData);
      expect( console.log.calledOnce ).to.be.true;
      expect( console.log.calledWith(`Input with the value: noName and type:
       text has no name property and could not be added to form data`)).to.be.true;
    });
  });
});

