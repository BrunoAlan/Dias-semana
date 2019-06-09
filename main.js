const electron = require("electron");
const path = require("path");
const url = require("url");
const { app, BrowserWindow } = electron;
require('electron-reload')(__dirname);


let mainWindow;

function createMainWindow() {
	mainWindow = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true
		}
	})
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, "index.html"),
		protocol: "file",
		slashes: true
	}))
	mainWindow.on("closed", () => {
		mainWindow = null
	})
	mainWindow.maximize()


	// var sqlite3 = require('sqlite3').verbose();
	// var db = new sqlite3.Database('./proyecto.database');

	// db.serialize(function () {

	// 	db.run("CREATE TABLE IF NOT EXISTS lorem (info TEXT)");

	// 	var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
	// 	for (var i = 0; i < 10; i++) {
	// 		stmt.run("Ipsum " + i);
	// 	}
	// 	stmt.finalize();

	// 	db.each("SELECT rowid AS id, info FROM lorem", function (err, row) {
	// 		console.log(row.id + ": " + row.info);
	// 	});
	// });
	// db.close();


}

app.on("ready", createMainWindow)