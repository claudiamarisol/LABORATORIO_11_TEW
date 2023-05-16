$(document).ready(function(){
    $('#btnSumar').click(function(){
        var num1 = $('#num1').val();
        var num2 = $('#num2').val();
        var parametros = {
            'num1':num1,
            'num2':num2
        };
        $.ajax({
            type: 'POST',
            data: parametros,
            url: "backend.php",
            dataType: 'html'
        }).done(function(data){
            $('#resultado').html(data);
        });
    });
});










