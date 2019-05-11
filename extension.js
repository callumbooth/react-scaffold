const vscode = require('vscode')
const fs = require('fs');
const workspace = vscode.workspace;

const fc = require('./functionalComponent.js');
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, your extension "rs" is now active!');

	/**
	 * Creates a react functional component
	 */
	let disposable = vscode.commands.registerCommand('extension.createFunctional', function () {
		console.log(workspace);
		fs.writeFile(workspace.rootPath + '/testFile3.js', fc, 'utf8', function (err) {
			if (err) {
				console.error(err); 
				return false;
			}
			console.log('File created successfully');
		})
	});
	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
