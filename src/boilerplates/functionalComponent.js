export default (name) => {
  const firstChar = name.charAt(0).toUpperCase();
  const componentName = firstChar + name.substr(1);

  const fc = 
`import React from 'react';

const ${componentName} = () => {
  return (
    <div>
      Lorem Ipsum
    </div>
  )
}

export default ${componentName}`;

  return fc;
};
