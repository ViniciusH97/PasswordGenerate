const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  getCommonPasswords: () => ipcRenderer.invoke('get-common-passwords'),
  on: (channel, callback) => ipcRenderer.on(channel, callback),
});
