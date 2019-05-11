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

export const getDifference = (a, b) => {
    var i = 0;
    var j = 0;
    var result = "";
    
    while (j < b.length)
    {
        if (a[i] != b[j] || i == a.length)
            result += b[j];
        else
            i++;
        j++;
    }
    return result;
}

export const createComponentName = (name) => {
  const firstChar = name.charAt(0).toUpperCase();
  return firstChar + name.substr(1);

}