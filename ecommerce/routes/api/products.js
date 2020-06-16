const express = require('express');
const router = express.Router();

// SE IMPORTAN LOS DATOS QUEMADOS DE LA SIGUIENTE RUTA
const productMocks = require('../../utils/mocks/products');

// PETICION GET QUE DEVUEVE CODIGO 200 DE OK DE LOS DATOS QUEMADOS  Y LA RESPUESTA DEL MENSAJE products listed
// EL DATO SE SACA DE LA VARIABLE const { query } = req.query;
router.get('/', function(req, res) {
    const { query } = req.query;

    res.status(200).json({
        data: productMocks,
        message: 'products listed'
    });
});

// PETICION GET PARA MANDAR A LLAMAR A UN SOLO PRODUCTO POR /:productId RESPONDE 200 DE OK Y EL MENSAJDE DE product retrieved
// EL DATO SE SACA DE LA VARIABLE const { productId } = req.params;
router.get('/:productId', function(req, res) {
    const { productId } = req.params;

    res.status(200).json({
        data: productMocks[0],
        message: 'product retrieved'
    });
});

// PETICION PARA AHCER POST PARA INSERTAR UN PRODUCTO Y REGRESA UN 201 DE OK
// FALTA HACER LA LOGICA PARA QUE SE GUARDE EL PRODUCTO
router.post('/', function(req, res) {

    res.status(201).json({
        data: productMocks[0],
        message: 'products listed'
    });
});

// PETICION PARA ACUALIZAR UN PRODUCTO POR MEDIO DE SU ID Y MUESTRA EL MENSAJE products updated DE 200 OK 
router.put('/:productId', function(req, res) {

    res.status(200).json({
        data: productMocks,
        message: 'products updated'
    });
});

// PETICION PARA ELIMINAR Y MUESTRA EL CODIGO DE 200 DE OK DE BORRADO Y EL MENSAJE DE produtcs deleted
router.delete('/', function(req, res) {

    res.status(200).json({
        data: productMocks[0],
        message: 'products deleted'
    });
});


module.exports = router;
