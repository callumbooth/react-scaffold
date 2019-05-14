import vscode, { workspace, window } from "vscode";
import fs from "fs";
import path from "path";

//boilerplate files
import getFunctionalComponent from "./boilerplates/functionalComponent";
import getClassComponent from "./boilerplates/classComponent";
import getClassLifecycleComponent from './boilerplates/classComponentLifecycle';
import getReducer from './boilerplates/reducer';

import { PLUGIN_NAME, TYPE_CLASS, TYPE_FUNCTIONAL, TYPE_CLASS_LIFECYCLE, TYPE_REDUCER } from "./utils/constants";
import { validateName } from "./utils";

const config = workspace.getConfiguration(PLUGIN_NAME);

const getName = async () => {
  //create prompt for the name of the file and validate the entry
  const options = {
    ignoreFocusOut: true,
    placeHolder: "ComponentName",
    validateInput: validateName,
    prompt: `Please choose a component name`
  };
  return await window.showInputBox(options);
};

export const createFile = async (type, selectedFolder) => {
  const validTypes = [TYPE_FUNCTIONAL, TYPE_CLASS, TYPE_CLASS_LIFECYCLE, TYPE_REDUCER];

  if (validTypes.indexOf(type) === -1) {
    return null;
  }

  const nameOrPath = await getName();
  if (!nameOrPath) {
    return null;
  }

  const fileExtention = config.useJSX ? ".jsx" : ".js";

  const filePath = nameOrPath.split(/[\\\/]/);
  const fileName = filePath[filePath.length - 1];

  let fileToWrite = path.resolve(selectedFolder, nameOrPath + fileExtention);
  console.log(fileToWrite)
  if (fs.existsSync(fileToWrite)) {
    return window.showErrorMessage(`File: ${fileName} already exists`);
  }

  let content;
  switch (type) {
    case TYPE_FUNCTIONAL: {
      content = getFunctionalComponent(fileName, config)
      break
    }
    case TYPE_CLASS: {
      content = getClassComponent(fileName, config)
      break
    }
    case TYPE_CLASS_LIFECYCLE: {
      content = getClassLifecycleComponent(fileName, config)
      break
    }
    case TYPE_REDUCER: {
      content = getReducer(fileName, config)
      break
    }
  }

  fs.writeFileSync(fileToWrite, content);

  //open and show new file
  const file = await workspace.openTextDocument(fileToWrite);
  await vscode.window.showTextDocument(file);
};