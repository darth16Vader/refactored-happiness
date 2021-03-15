const { app, BrowserWindow } = require("electron"),
  path = require("path"),
  isDev = require("electron-is-dev");

function createWindow() {
  const win = new BrowserWindow({
    resizable: false,
    width: 1378,
    height: 855,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  // win.maximize();
  // win.webContents.openDevTools();
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
