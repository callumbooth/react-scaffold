import vscode, { workspace } from "vscode";
import path from "path";
import { PLUGIN_NAME, TYPE_CLASS, TYPE_FUNCTIONAL } from "./utils/constants";

import { getWorkspaceFolder, getDifference } from "./utils";

import { createFile } from './create';

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log(`Congratulations, your extension "${PLUGIN_NAME}" is now active!`);
  /**
   * Creates a react functional component
   */
  const createFunctionalCommand = vscode.commands.registerCommand(
    "reactScaffold.createFunctional",
    (uri) => {
      const rootFolder = getWorkspaceFolder(workspace.workspaceFolders)
      const selectedLocation = uri ? uri.fsPath || rootFolder : rootFolder;

      return createFile(TYPE_FUNCTIONAL, selectedLocation);
    }
  );

  /**
   * Creates a react functional component
   */
  const createClassCommand = vscode.commands.registerCommand(
    "reactScaffold.createClass",
    (uri) => {
      const rootFolder = getWorkspaceFolder(workspace.workspaceFolders)
      const selectedLocation = uri ? uri.fsPath || rootFolder : rootFolder;

      return createFile(TYPE_CLASS, selectedLocation);
    }
  );

  context.subscriptions.push(createFunctionalCommand, createClassCommand);
}

// this method is called when your extension is deactivated
function deactivate() { }

export { activate, deactivate };
