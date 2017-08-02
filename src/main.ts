import * as path from 'path'
import * as url from 'url'

import {
  app,
  BrowserWindow
} from 'electron'

let mainWindow;

const initApp = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '../index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.on('closed', () => {
    mainWindow = null
  })
};

app.on('ready', initApp)

app.on('activate', () => {
  if (mainWindow === null) {
    initApp()
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
