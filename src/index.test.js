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
  RadioInputs,
  CheckboxInputs,
  Empty,
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
  const radioComponent = renderIntoDocument(
    <RadioInputs />,
  );
  const checkboxComponent = renderIntoDocument(
    <CheckboxInputs />,
  );
  const emptyComponent = renderIntoDocument(
    <Empty />,
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
    it('should only get checked radio values', () => {
      const radioForm = findRenderedDOMComponentWithTag(radioComponent, 'form');
      const radioFormData = rfGetter(radioForm);
      expect(radioFormData).to.deep.equal({
        checkbox: 'checkedCheckboxValue',
      });
    });
    it('should only get checked checkbox values', () => {
      const checkboxForm = findRenderedDOMComponentWithTag(checkboxComponent, 'form');
      const checkboxFormData = rfGetter(checkboxForm);
      expect(checkboxFormData).to.deep.equal({
        radio: 'checkedRadioValue',
      });
    });

    describe('Edge Cases', () => {
      it('should take in a single argument', () => {
        expect(rfGetter('arg1', 'arg2')).to.throw(Error);
      });
      it('should reject an argument that is not a form element', () => {
        const div = findRenderedDOMComponentWithTag(validComponent, 'div');
        const invalidInput = rfGetter(div);
        expect(rfGetter(invalidInput)).to.throw(Error);
      });
      it('should have children', () => {
        const emptyForm = findRenderedDOMComponentWithTag(emptyComponent, 'form');
        const emptyFormData = rfGetter(emptyForm);
        expect(emptyFormData).to.be.empty;
      });
      it('should log a warning when a valid input has no name attr', () => {

    });
    });
  });
});

