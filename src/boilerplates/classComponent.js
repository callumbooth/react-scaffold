import { createComponentName } from '../utils/index'

export default (name, config) => {
  const componentName = createComponentName(name);


  const imports = [
    "import React, { Component } from 'react'",
    config.includePropTypesDeclaration && "import PropTypes from 'prop-types'"
  ].join('\n');
  
  const component = `class ${componentName} extends Component {
  render() {
    return (
      <div>
        Lorem Ipsum
      </div>
    ) 
  }
}`

  const propTypes = config.includePropTypesDeclaration ? `${componentName}.propTypes = {

}` : null

  const exportLine = `export default ${componentName}`

  return [
    imports,
    component,
    propTypes,
    exportLine
  ].join('\n\n');
};
