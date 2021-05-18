// eslint-disable-next-line @typescript-eslint/no-var-requires
const { app, BrowserWindow } = require('electron')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
/*
try {
// eslint-disable-next-line @typescript-eslint/no-var-requires
  require('electron-reloader')(module)
// eslint-disable-next-line no-empty
} catch (_) {}
*/
// function loadVitePage (port: number) {
//   mainWindow.loadURL(`http://localhost:${port}`).catch((err: any) => {
//     console.log('VITE NOT READY, WILL TRY AGAIN IN 200ms')
//     setTimeout(() => {
//       // do it again as the vite build can take a bit longer the first time
//       loadVitePage(port)
//     }, 200)
//   })
// }
const isDev = !app.isPackaged

function loadVitePage (mainWin) {
  mainWin.loadURL('http://localhost:3000').catch((err) => {
    console.log('VITE NOT READY, WILL TRY AGAIN IN 200ms')
    console.error(err)
    setTimeout(() => {
      // do it again as the vite build can take a bit longer the first time
      loadVitePage(mainWin)
    }, 200)
  })
}

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
function createWindow () {
  const mainWin = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      webSecurity: false,
      allowRunningInsecureContent: true,
    }
  })

  // isDev ? mainWin.loadURL('http://localhost:3000') : mainWin.loadFile('dist/index.html')
  loadVitePage(mainWin)
  mainWin.webContents.openDevTools()
}

app.on('ready', async () => {
  await createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

if (process.platform === 'win32') {
  process.on('message', (data) => {
    if (data === 'graceful-exit') {
      app.quit()
    }
  })
} else {
  process.on('SIGTERM', () => {
    app.quit()
  })
}
