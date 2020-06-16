const express = require("express");
const path = require("path");
const app = express();
const productsRouter = require('./routes/products');

// SE LE DICE A EXPRESS QUE COMO VA A MANEJAR LOS ARCHIVOS ESTATICOS CON EL PREFIJO /static Y LA DIRECCIÓN DE DONDE ESTA LA CARPETA
// SE CREA LA CARPETA public DENTRO CON LAS CARPETAS assets, images, logo
// SE MODIFICAN LOS ARCHIVOS .pug DENTRO DE LAS CARPETA view PARA QUE IMPORTEN LOS ARCHIVOS STATIC
app.use("/static", express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use("/products", productsRouter);

const server = app.listen(8000, function() {
  console.log(`Listening http://localhost:${server.address().port}`);
});
