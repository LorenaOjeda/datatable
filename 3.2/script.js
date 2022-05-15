$(document).ready( function () {
    $('#tabla_cds').DataTable();
} );

$(document).ready(() =>{
    $('#tabla_cds').hide();

    $('#importarXML').click(()=>{
        $.ajax({
            type: 'GET',
            url: 'catalogo.xml',
            dataType: 'xml',
        }).done((data) => {
            $(data).find('CD').each(function(){
            let fila = $('<tr>');
            fila.append($(`<td>${$(this).find('TITLE').text()}</td>`));
            fila.append($(`<td>${$(this).find('ARTIST').text()}</td>`));
            fila.append($(`<td>${$(this).find('COUNTRY').text()}</td>`));
            fila.append($(`<td>${$(this).find('COMPANY').text()}</td>`));
            fila.append($(`<td>${$(this).find('PRICE').text()}</td>`));
            fila.append($(`<td>${$(this).find('YEAR').text()}</td>`));

            $('#tabla_cds tbody').append(fila);
        });

        $('#tabla_cds').show();
    });
}); 

});


