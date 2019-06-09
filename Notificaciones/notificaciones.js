const electron = require("electron");
const BrowserWindow = require('electron').remote.BrowserWindow;
const url = require("url");
const path = require("path");
const ipc = electron.ipcRenderer;

//función que crear la alerta con las dimensiones 
//tipo -> error o acierto
function crearAlerta(tipo) {
  alerta = new BrowserWindow({
    frame: false,
    width: 200,
    height: 100,
    center: true,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  if (tipo == "error") {
    alerta.loadURL(url.format({
      pathname: path.join(__dirname, "./error.html"),
      protocol: "file",
      slashes: true
    }))

  } else {
    alerta.loadURL(url.format({
      pathname: path.join(__dirname, "./acierto.html"),
      protocol: "file",
      slashes: true
    }))

  }
  alerta.on("closed", () => {
    alerta = null
  })

  cerrarAlerta(alerta, 1000);



}

function cerrarAlerta(alerta, duracion) {
  setTimeout(x => alerta.close(), duracion)
}

module.exports = { crearAlerta }