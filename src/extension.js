import vscode, { workspace } from "vscode";
import { PLUGIN_NAME, TYPE_CLASS, TYPE_FUNCTIONAL, TYPE_CLASS_LIFECYCLE, TYPE_REDUCER } from "./utils/constants";

import { getWorkspaceFolder } from "./utils";

import { createFile } from './create';
import { showFileTypePicker } from './wizard'

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log(`Congratulations, your extension "${PLUGIN_NAME}" is now active!`);

  /**
   * Create a quickpick for the different file types available
   */

   const createFileOfTypeCommand = vscode.commands.registerCommand(
     "reactScaffold.createFileOfType",
     (uri) => {
      const rootFolder = getWorkspaceFolder(workspace.workspaceFolders)
      const selectedLocation = uri ? uri.fsPath || rootFolder : rootFolder;

      return showFileTypePicker(selectedLocation);
     }
   )

  /**
   * Creates a react functional component
   */
  const createFunctionalCommand = vscode.commands.registerCommand(
    "reactScaffold.createFunctional",
    (selectedLocation) => {
      return createFile(TYPE_FUNCTIONAL, selectedLocation);
    }
  );

  /**
   * Creates a react class component
   */
  const createClassCommand = vscode.commands.registerCommand(
    "reactScaffold.createClass",
    (selectedLocation) => {
      return createFile(TYPE_CLASS, selectedLocation);
    }
  );

  /**
   * Create a react class component with lifecycle
   */
  const createClassLifecycleCommand = vscode.commands.registerCommand(
    "reactScaffold.createClassLifecycle",
    (selectedLocation) => {
      return createFile(TYPE_CLASS_LIFECYCLE, selectedLocation);
    }
  );

  /**
   * Create a react class component with lifecycle
   */
  const createReducerCommand = vscode.commands.registerCommand(
    "reactScaffold.createReducer",
    (selectedLocation) => {
      return createFile(TYPE_REDUCER, selectedLocation);
    }
  );

  context.subscriptions.push(
    createFileOfTypeCommand,
    createFunctionalCommand,
    createClassCommand,
    createClassLifecycleCommand,
    createReducerCommand
  );
}

// this method is called when your extension is deactivated
function deactivate() { }

export { activate, deactivate };
