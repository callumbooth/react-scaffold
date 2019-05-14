import vscode from 'vscode'

import * as C from './utils/constants';

const quickPickItems = [
    {
        label: 'React functional component',
        description: 'Creates a functional React component',
        command: C.TYPE_FUNCTIONAL
    },
    {
        label: 'React class component',
        description: 'Creates a class based React component without lifecycle methods',
        command: C.TYPE_CLASS
    },
    {
        label: 'React class components (with lifecycle methods)',
        description: 'Creates a class based React component with lifecycle methods',
        command: C.TYPE_CLASS_LIFECYCLE
    },
    {
        label: 'Redux reducer',
        description: 'Creates a Redux reducer function',
        command: C.TYPE_REDUCER
    }
]

const quickPickOptions = {
    matchOnDescription: true
}

export const showFileTypePicker = async (uri) => {
    const option = await vscode.window.showQuickPick(quickPickItems, quickPickOptions)
    
    if (!option) {
        return null;
    }

    return await vscode.commands.executeCommand(`reactScaffold.create${option.command}`, uri);
}