<?php
include('database.php');

if(isset($_POST['id_js'])) {
    $nombre = $_POST['nombre_js'];
    $apellido = $_POST['apellido_js'];
    $email = $_POST['email_js'];
    $id = $_POST['id_js'];

    $query = "UPDATE tbl_estudiante SET nombre = '$nombre', apellido = '$apellido', email = '$email' WHERE id = '$id'";
    $result = mysqli_query($connection, $query);

    if (!$result) {
        die('Consulta fallida.');
    }
    echo "Estudiante actualizado con exito";
}

?>