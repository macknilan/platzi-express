// SE IMPORTA LA LIBRERIA DEL DRIVER PARA LA CONEXION
const { MongoClient } = require("mongodb");
// ARCHIVO DE CONFIGURACION
const { config } = require("../config");

// SE IMPORTAN LAS VARIABLES DE CONEXION DEL ARCHIVO DE config/index.js
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

// const MONGO_URI = `mongodb://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/?authSource=${DB_NAME}`; // prettier-ignore

// CONFIGURACIÓN PARA CONEXION CON MONGODB ATLAS CON LA LIGA Conect your application
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`; // prettier-ignore

class MongoLib {
  constructor() {
    console.log(`'MONGO_URI -> ${MONGO_URI}`)
    this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    this.dbName = DB_NAME;
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.client.connect(error => {
        if (error) {
          reject(error);
        }

        console.log("Connected succesfully to mongo");
        resolve(this.client.db(this.dbName));
      });
    });
  }

  getAll(collection, query) {
    return this.connect().then(db => {
      return db
        .collection(collection)
        .find(query) // QUERY PERSONALIZADO QUE SE OCUPARA PARA LOS TAGS
        .toArray(); // SE CONVIERTE A ARRELGO PARA QUE SE PUEDA MANIPULAR
    });
  }
}

module.exports = MongoLib;
