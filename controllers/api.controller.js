const Factura = require('../collections/factura.model');
exports.findAll = (req, res) => {
    
    Factura.find({}, (err, docs) => {
        res.send(docs)
    })

};

exports.findOne = (req,res) => {
    
    const id = req.params.id;
    Factura.findById({_id: ""+id}, (err, docs) => {
        res.send(docs)
    })
}

exports.createFactura = (req, res) => {

    ar = req.body.objetos;
    cedula1= req.body.cedula;
    ruc1= req.body.ruc;
    tipoPedido1= req.body.tipoPedido
    Subtotal1= 0
    for(let ob of ar){
        Subtotal1 = Subtotal1 + ob['precio']
        console.log(ob);
    }
    
    Total1= Subtotal1*1.12
    iva1= Subtotal1*0.12
    metodoPago1= req.body.metodoPago

    const factura = new Factura({objetos: ar,
         cedula: cedula1,
         ruc:ruc1,
         tipoPedido: tipoPedido1, 
         Subtotal: Subtotal1, 
         Total: Total1, 
         iva: iva1, 
         metodoPago: metodoPago1});

         factura.save(factura)
         .then(data => {
             res.send(data);
         })
         .catch(err => {res.send(err)})

}


exports.updateFactura = (req, res) => {

    ar = req.body.objetos;
    cedula1= req.body.cedula;
    ruc1= req.body.ruc;
    tipoPedido1= req.body.tipoPedido
    Subtotal1= req.body.Subtotal
    Total1= req.body.Total
    iva1= req.body.iva
    metodoPago1= req.body.metodoPago
    id1= req.body.id;
    console.log(metodoPago1);

    Factura.findByIdAndUpdate(
        id1,
        {objetos: ar,
         cedula: cedula1,
         ruc:ruc1,
         tipoPedido: tipoPedido1, 
         Subtotal: Subtotal1, 
         Total: Total1, 
         iva: iva1, 
         metodoPago: metodoPago1}, 
         (err, docs) =>{
            res.send(docs);
         });
}

exports.deleteFactura = (req, res) =>{
    id1 = req.body.id;
    Factura.deleteOne({_id: id1}, (err, docs) =>{

        res.send(docs);
    })
}