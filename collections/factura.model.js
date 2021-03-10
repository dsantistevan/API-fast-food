var mongoose = require('mongoose');

const FacturaSchema = new mongoose.Schema({
    objetos: [],
    cedula: {
        type: String
    },
    ruc: {
        type: String
    },
    tipoPedido: {
        type: String
    },
    Subtotal: {
        type: Number
    },
    Total: {
        type: Number
    },
    iva: {
        type: Number
    },
    metodoPago: {
        type: String
    }
});

module.exports = mongoose.model('factura', FacturaSchema, "factura");