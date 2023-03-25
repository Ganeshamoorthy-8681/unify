const { contextBridge , ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  updatemessage: (callback)=> ipcRenderer.on("updatemessage",callback)
  // we can also expose variables, not just functions
})