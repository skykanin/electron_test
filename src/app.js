import {app, BrowserWindow} from 'electron';

let mainWindow = null;

app.on('window-all-closed', () => {
  app.quit();
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    frame: true
  });

  mainWindow.loadURL(`file://${__dirname}/renderer/index.html`);
});