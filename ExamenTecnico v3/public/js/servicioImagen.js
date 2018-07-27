let imagenUrl = '';

$(function() {
    // Configure Cloudinary
    // with credentials available on
    // your Cloudinary account dashboard
    $.cloudinary.config({ cloud_name: 'jean-paull-corrales-gamboa', api_key: '829669789894726'});

    // Upload button
    let uploadButton = $('#btnSeleccionarImagen');

    // Upload button event
    uploadButton.on('click', function(e){
        // Initiate upload
        cloudinary.openUploadWidget({ cloud_name: 'jean-paull-corrales-gamboa', upload_preset: 'pokemon', tags: ['pokemon']},
        function(error, result) {
            if(error) console.log(error);
            // If NO error, log image data to console
            let id = result[0].public_id;
             console.log(id);
            
            imagenUrl = processImage(id);
            console.log(imagenUrl);
            document.querySelector('#txtImagen').src = imagenUrl;
            return imagenUrl;
        });
    });
})

function processImage(id) {
    let options = {
        client_hints: true,
    };
    return  $.cloudinary.url(id, options);
}
