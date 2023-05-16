<?php
include('database.php');
if(isset($_POST['id'])) {
    $id = mysqli_real_escape_string($connnection, $_POST['id']);
    $query = "SELECT * FROM tbl_estudiante WHERE id = {$id}";
    $result = mysqli_query($connnection, $query);

}
$json = array();
while($row = mysqli_fetch_array($result)) {
    $json[] = array(
        'nombre' => $row['nombre'],
        'apellido' => $row['apellido'],
        'email' => $row['email'],
        'fecha_registro' => date("d-m-y", strtotime($row['fecha_registro'])),
        'id' => $row['id']
    );
}
$jsonstring = json_encode($json[0]);
echo $jsonstring;

?>