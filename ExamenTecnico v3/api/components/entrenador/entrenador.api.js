'use strict';
const entrenadorModel = require('./entrenador.model');

module.exports.registrar_entrenador = function(req, res) {
   
    let nuevoEntrenador = new entrenadorModel({
        nombre : req.body.nombre,
        edad : req.body.edad,
        numero_entrenador : req.body.numero_entrenador,
        sexo : req.body.sexo,
        foto: req.body.foto
    });

    nuevoEntrenador.save(function(error){
        if(error){
            res.json({success : false, msg: 'No se pudo registrar el entrenador, ocurrió el siguiente error ' + error});
        }else{
            res.json({success : true, msg: 'El entrenador se registró con éxito'}); 
        }
    });
};

module.exports.listar_entrenadores = function(req , res){
    entrenadorModel.find().sort({nombre: 'asc'}).then(
        function(entrenadores){
            res.send(entrenadores);
        }
    );

};