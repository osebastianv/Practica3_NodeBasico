"use strict";

const mongoose = require("mongoose");
const conn = mongoose.connection;

conn.on("Error", err => {
  console.log("Error de conexión", err);
  process.exit(1);
});

conn.once("open", () => {
  console.log("Conectado a MongoDB en", mongoose.connection.name);
});

mongoose.connect("mongodb://localhost/nodepopDB");
