<?php

//Recogemos variables
$emailEmpresa = $_REQUEST['emailEmpresa'];
$mensaje = $_REQUEST['mensaje'];

//Validamos que no hay variables con valor nulo
if(empty($emailEmpresa) || empty($mensaje)) {
    echo "<script>alert('Hay algun valor nulo!')</script>";
} else {
    $cabeceras = 'From: ' . $emailEmpresa;
    mail('xavijvives@gmail.com', 'Correo portfolio', $mensaje, $cabeceras);
    header('Location: ../index.php');
}

?>