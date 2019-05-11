import vscode, { workspace } from "vscode";
import fs from "fs";
import path from "path";

import { getWorkspaceFolder, validateName } from "./utils";

//boilerplate files
import getFunctionalComponent from "./boilerplates/functionalComponent";

const createFunctional = async (activeFolder) => {
    //create prompt for the name of the file and validate the entry
    //console.log(activeFolder)
    console.log(workspace)
    return null;
    const options = {
        ignoreFocusOut: true,
        placeHolder: "ComponentName",
        validateInput: validateName,
        prompt: `Component name: 'ComponentName', or a relative path: 'src/folder/path/to/ComponentName'`
    };
    const nameOrPath = await vscode.window.showInputBox(options);

    if (!nameOrPath) {
      return null
    }

    //get folder
    const folder = getWorkspaceFolder(workspace.workspaceFolders);
    let fileToWrite = path.resolve(folder, nameOrPath + '.js');

    const filePath = nameOrPath.split('/');
    const name = filePath[filePath.length-1]
    
    fs.writeFileSync(fileToWrite, getFunctionalComponent(name));

    //open and show new file
    const file = await workspace.openTextDocument(fileToWrite);
    await vscode.window.showTextDocument(file);
};


/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('Congratulations, your extension "rs" is now active!');
    /**
     * Creates a react functional component
     */
    let disposable = vscode.commands.registerCommand(
        "extension.createFunctional",
        createFunctional
    );
    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

export { activate, deactivate };
