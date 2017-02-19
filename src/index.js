module.exports = (form, ...restArgs) => {
  const args = [...restArgs] || null;
  if (!form) {
    throw new Error('rfGetter - Form element must be passed as an argument');
  }
  if (args.length > 0) {
    throw new Error('rfGetter - Must pass in a single FORM element as an argument');
  }
  if (form.tagName !== 'FORM') {
    throw new Error('rfGetter - Must pass in a FORM element to the function');
  }
  if (form.children.length < 1) return {};

  // Write the react form getter function here
  const results = {};

    // User should pass in a ref to a form element.

  const validTags = new Set(['INPUT', 'SELECT']);
  const invalidInputTypes = new Set(['button', 'submit', 'reset']);

  const addNodeToResults = (name, value, type) => {
    if (name) {
      results[name] = value;
    } else {
      console.warn(`Input with the value: ${value} and type: ${type} 
      has no name property and could not be added to form data`);
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
  return results;
};
