$(document).ready(function(){
    let edit = false;
    console.log('jquery esta funcionando!');

    tablaAjax();
    $('#estudiante-result').hide();

    $('#search').keyup(function() {
    if($('#search').val()) {
        let search = $('#search').val();
        $.ajax({
            url: 'search.php',
            data: {search},
            type: 'POST',
            success: function (response){
                if(!response.error) {
                    let res = JSON.parse(response);
                    let template = '';
                    res.forEach(res => {
                        template +=
                        <li><a href="#" class="item-estudiante">${res.nombre}</a></li>

                   });
                   $('#estudiante-result').show();
                   $('#container').html(template);
                }
            }
        })
    }
    });

    $('#estudiante-form').submit(e => {
        e.prevenDefault();
        const postData = {
            nombre_js: $('#nombre_form').val(),
            apellido_js: $('#apellido_form').val(),
            email_js: $('#email_form').val(),
            id_js: $('#id_form').val(),
        };
        const url = edit === false ? 'add.php' : 'edit.php';
        console.log(postData, url);
        $.post(url, postData, (response) => {
            $('#estudiante-form').trigger('reset');
            tablaAjax();
        });
        console.log(edit);
    });

    function tablaAjax() {
        $.ajax({
            url: 'list.php',
            type: 'GET',
            success: function(response) {
                const res = JSON.parse(response);
                let template = '';
                res.forEach(est => {
                    template +=
                    <tr estId="${est.id">
                        <td>${est.id}</td>
                        <td><a href="#" class="item-estudiante">${est.nombre}</a></td>
                        <td>${est.apellido}</td>
                        <td>${est.email}</td>
                        <td>${est.fecha_registro}</td>
                        <td><button class="delete-estudiante btn btn-danger btn-sm">Eliminar</button></td>

                        
                    </tr>
                });
                $('#tabla-estudiante').html(template);
            }
        });
    }

    $(document).on('click', '.item-estudiante', (e) => {
        const elemet = $(this)[0].activeElement.parentElement.parentElement;
        const id = $(element).attr('estId');
        $.post('single.php', {id}, (response) => {
            const r = JSON.parse(response);
            $('#nombre_form').val(r.nombre);
            $('#apellido_form').val(r.apellido);
            $('#email_form').val(r.email);
            $('#id_form').val(r.id);
            edit = true;
        });
        e.prevenDefault();
    });

    $(document).on('click', '.delete-estudiante', (e) => {
        if(confirm('¿Estas seguro de que quieres eliminarlo?')) {
            const element = $(this)[0].activeElement.parentElement.parentElement;
            const id = $(element).attr('estId');
            $.post('delete.php', {id}, (response) => {
                console.log(response);
                tablaAjax();
            });
        }
    });
});
