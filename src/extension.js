import vscode, { workspace } from "vscode";
import path from "path";
import { PLUGIN_NAME, TYPE_CLASS, TYPE_FUNCTIONAL } from "./utils/constants";

import { getWorkspaceFolder, getDifference } from "./utils";

import {createFile} from './create';

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
            const rootFolder = getWorkspaceFolder(workspace.workspaceFolders);

            if (uri === undefined) {
                //command was run from command pallete
                return createFile(TYPE_FUNCTIONAL, rootFolder);
            }

            const selectedLocation = getDifference(rootFolder, uri.fsPath);

            let folders = selectedLocation.split("\\");
            folders = folders.slice(1, folders.length);

            return createFile(TYPE_FUNCTIONAL, path.resolve(rootFolder, ...folders));
        }
    );

    /**
     * Creates a react functional component
     */
    const createClassCommand = vscode.commands.registerCommand(
        "reactScaffold.createClass",
        (uri) => {
            const rootFolder = getWorkspaceFolder(workspace.workspaceFolders);

            if (uri === undefined) {
                //command was run from command pallete
                return createFile(TYPE_CLASS, rootFolder);
            }

            const selectedLocation = getDifference(rootFolder, uri.fsPath);

            let folders = selectedLocation.split("\\");
            folders = folders.slice(1, folders.length);

            return createFile(TYPE_CLASS, path.resolve(rootFolder, ...folders));
        }
    );

    context.subscriptions.push(createFunctionalCommand, createClassCommand);
}

// this method is called when your extension is deactivated
function deactivate() {}

export { activate, deactivate };
