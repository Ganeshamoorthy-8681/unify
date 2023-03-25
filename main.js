const { app, BrowserWindow } = require('electron');
const path = require('path');
const{autoUpdater , AppUpdater} = require("electron-updater");
autoUpdater.autoDownload=false;
autoUpdater.autoInstallOnAppQuit=true

//funtion  to create a browswe window
const createWindow = () => {
  const main_window = new BrowserWindow({
    width: 600,
    height: 500,
    icon:"build/256x256.png",
    webPreferences:{
      nodeIntegration:true,
      preload: path.join(__dirname, 'preload.js'),
      devTools:false

    }
  })

  // main_window.webContents.openDevTools()
  main_window.setMenu(null)
  main_window.loadFile(path.join(__dirname, 'index.html'),)
  main_window.webContents.send("update-message",app.getVersion())
}


//when all are initialized browswer window will open
app.whenReady().then(() => {
    createWindow()
    //  autoUpdater.checkForUpdates();
})


// for macos app will run even without window ??
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

//for windows and linux close the app

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})