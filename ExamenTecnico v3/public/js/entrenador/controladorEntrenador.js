'use strict';



const inputNombre = document.querySelector('#txtNombre');
const inputNumeroEnt = document.querySelector('#txtNumeroEntrenador');
const inputEdad = document.querySelector('#txtEdad');
const selectSexo = document.querySelector('#txtSexo');
const btnImagen = document.querySelector('#btnSeleccionarImagen');
const botonRegistrar = document.querySelector('#btnRegistrar');
const inputBuscar = document.querySelector('#txtBuscar');

botonRegistrar.addEventListener('click', obtenerDatos);


let regexNombre = /^[a-zA-ZÑñáéíóúÁÉÍÓÚ0-9 ]+$/;
let regexNumero = /^[0-9]+$/;

function obtenerDatos() {

    let sNombre = inputNombre.value;
    let nNumeroEnt = Number(inputNumeroEnt.value);
    let nEdad = Number(inputEdad.value);
    let sSexo = selectSexo.value;
    let bError = false;
    
    
    bError = validar();
    if (bError == true) {
        swal({
            title: 'Registro incorrecto',
            text: 'No se pudo registrar el Entrenador, revise los campos en rojo',
            type: 'warning',
            confirmButtonText: 'Entendido'
        });
    } else {
        let respuesta = registrarEntrenador(sNombre, nEdad, nNumeroEnt, sSexo, imagenUrl);
        if (respuesta.success == true){
            swal({
                title: 'Registro correcto',
                text: respuesta.msg,
                type: 'success',
                confirmButtonText: 'Entendido'
            });
        } else {
            swal({
                title: 'Registro incorrecto',
                text: respuesta.msg,
                type: 'error',
                confirmButtonText: 'Entendido'
            });
        }
    }
};


function validar() {
    let bError = false;
    let sNombre = inputNombre.value;
    let nEdad = Number(inputEdad.value);


    if (sNombre == '' || (regexNombre.test(sNombre) == false)) {
        inputNombre.classList.add('errorInput');
        bError = true;
    } else {
        inputNombre.classList.remove('errorInput');
    }

    if (nEdad == 0 || (regexNumero.test(nEdad) == false) || nEdad < 15 || nEdad > 80) {
        inputEdad.classList.add('errorInput');
        bError = true;
    } else {
        inputEdad.classList.remove('errorInput');
    }
    return bError;
};