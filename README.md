# React Scaffold

Please report any feature requests or bugs on [Github](https://github.com/callumbooth/vscode-react-scaffold/issues)

## Features

Allows the creation of a react component with just a click of a button

## How to use

### Command pallete

1. Open the command pallete or right click on the folder you want to create, and choose ```Create file```
2. Type ```Create file``` and hit enter
3. Choose the type of file you wish to create from the list of options
3. Enter the name of your file and component. This can either be just the name or a path

    e.g  ```MyComponent``` or ``path/to/MyComponent``


## Extension Settings

This extension contributes the following settings:

* `reactScaffold.useJSX`: use the jsx file extension for the generated files
* `reactScaffold.includePropTypesDeclaration`: include the prop-types import in the generated file


## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release

#### fixes

* Updated README
* Fixes file creating not working on OSX
* Fixes functional component creating class component

### 1.1.0

Simplified file creation process.
More file types (class with lifecycle methods, Redux reducer)
