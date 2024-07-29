const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  changeLanguage: (lang) => ipcRenderer.send('change-language', lang),
  getCommonPasswords: () => ipcRenderer.invoke('get-common-passwords')
});
