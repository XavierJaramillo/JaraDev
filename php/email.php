<?php

//Recogemos variables
$nombre = $_REQUEST['nombre'];
$email = $_REQUEST['email'];
$mensaje = $_REQUEST['mensaje'];

//Validamos que no hay variables con valor nulo
if(empty($nombre) || empty($email) || empty($mensaje)) {
    echo "<script>alert('Hay algun valor nulo!')</script>";
} else {
    mail('xavijvives@gmail.com', 'Webtech Message', $mensaje, 'Form: $nombre <$email>');
    echo "<script>alert('Correo enviado correctamente!');
    header('Location: ../index.html');
    </script>";
    
}
?>