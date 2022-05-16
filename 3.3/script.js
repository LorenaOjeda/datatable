$(document).ready( function () {
        
    $.ajax({
        type    : "GET",
        url     : "catalogo.xml",
        dataType: "xml"
    }).done((data) => {

        $(data).find("CD").each(function() {

            $("#myTable").DataTable().row.add([$(this).find('TITLE').text(), $(this).find('ARTIST').text(), $(this).find('COUNTRY').text(), $(this).find('COMPANY').text(), $(this).find('PRICE').text(), $(this).find('YEAR').text()]).draw();

        })

    })

});