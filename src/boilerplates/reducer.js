export default (name, config) => {
  
  const component = `function ${name}(state = 0, action) {
    switch (action.type) {
        default:
            return state
    }
}`

  const exportLine = `export default ${name}`

  return [
    component,
    exportLine
  ].join('\n\n');
};
