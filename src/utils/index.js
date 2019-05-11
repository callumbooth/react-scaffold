export const getWorkspaceFolder = (folders) => {
  if (!folders) {
    return '';

  }
  const folder = folders[0] || {}
  return folder.uri.fsPath
}

export const validateName = (name) => {
  if (!name) {
    return 'Name is required';
  }
  if (name.includes(' ')) {
    return 'Spaces are not allowed';
  }
  if (name.search(/^[a-z0-9/]+$/i) === -1) {
    return 'Must only contain alpha-numeric chars (plus forward slash)'
  }

  return null;
}