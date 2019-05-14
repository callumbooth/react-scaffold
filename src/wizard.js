import vscode from 'vscode'

export const showFileTypePicker = async (selectedLocation) => {
    const value = await vscode.window.showQuickPick(['item1', 'item2'])
    console.log(value)
}