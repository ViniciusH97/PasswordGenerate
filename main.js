const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const commonPasswords = require('./wordlist/passw1');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        maximizable: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
        }
    });

    mainWindow.loadFile(path.join(__dirname, 'index_pt-br.html'));

    ipcMain.on('change-language', (event, lang) => {
        if (lang === 'en') {
            mainWindow.loadFile(path.join(__dirname, 'index_en.html'));
        } else if (lang === 'pt-br') {
            mainWindow.loadFile(path.join(__dirname, 'index_pt-br.html'));
        }
    });

    ipcMain.handle('get-common-passwords', () => commonPasswords);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});

