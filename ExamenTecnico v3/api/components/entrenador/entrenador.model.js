'use strict';
let mongoose = require('mongoose');

let entrenadorSchema = new mongoose.Schema({
    nombre : {type : String, required: true},
    edad : {type : Number, required : true},
    numero_entrenador : {type : Number, required : true},
    sexo : {type : String},
    foto: {type : String},

});

module.exports = mongoose.model('Entrenador', entrenadorSchema);