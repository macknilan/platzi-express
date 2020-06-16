const express = require("express");
const path = require("path");
const app = express();
const productsRouter = require('./routes/products');

// SE IMPORTA EL ARCHIVO DE TIENE LA LOGICA PARA HACER CRUD EN LA API
// SE CREA LA CARPETA API DENTRO DE LA CARPETA ROUTES PARA HACER LA DISTINCIÓN DE LA API CON LAS DEMAS RUTAS
const productsApiRouter = require('./routes/api/products');

app.use("/static", express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use("/products", productsRouter);
// SE AÑADE LA RUTA DE api A EXPRESS QUE LA OPCUPE productsApiRouter
app.use("/api/products", productsApiRouter);

const server = app.listen(8000, function() {
  console.log(`Listening http://localhost:${server.address().port}`);
});
