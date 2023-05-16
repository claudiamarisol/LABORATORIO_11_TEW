<?php
 include('database.php');
 if (isset($_POST['nombre_js'])) {

    $nombre = $_POST['nombre_js'];
    $apellido = $_POST['apellido_js'];
    $correo = $_POST['email_js'];

    $query = "INSERT INTO tbl_estudiante(nombre, apellido, email) VALUES ('$nombre', '$apellido', '$correo')";
    $result = mysqli_query($connection, $query);

    if (!$result){
        die('Consulta fallida.');
    }
    echo "Estudiante agregado exitosamente";
 }


?>