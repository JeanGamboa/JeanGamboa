'use strict';


function registrarEntrenador(pNombre, pEdad, pNumeroEnt, pSexo, pimagenUrl){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrar_entrenador',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            nombre : pNombre,
            edad : pEdad,
            numero_entrenador : pNumeroEnt,
            sexo : pSexo,
            foto : pimagenUrl
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}
function obtenerEntrenadores(){
    let listaEntrenadores = [];
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/listar_entrenadores',
        type : 'get',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            
        }
      });
    
      peticion.done(function(response){
        listaEntrenadores = response;
      });
    
      peticion.fail(function(response){
       
      });

    
    return listaEntrenadores;
}