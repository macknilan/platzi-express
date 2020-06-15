const express = require("express");
const path = require("path");
const app = express();
const productsRouter = require('./routes/products');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//  SE IMPLEMENTA EL ENPOINT/ RUTA EN /products QUE LA USE EXPRESS app.use
//  EN LA CARPETA routes y dentro el archivo products.js
app.use("/products", productsRouter);

const server = app.listen(8000, function() {
  console.log(`Listening http://localhost:${server.address().port}`);
});
