<?php
//creando la conexion con el servidor, en este caso local. en la variable $db guardamos la conexion a traves de mysql_connect con esos parametros y en las variables guardamos el localhost el usuario la password va vacia y la base que hemos creado.

$_servidor='localhost';
$usuario='root';
$password='';
$basededatos='ideaDigital';

$db=mysqli_connect($_servidor,$usuario,$password,$basededatos);

//hacemos una consulta para pasarle la base de datos y que hacepte la ñ y demas..

mysqli_query($db,"SET NAMES 'utf8'");

//iniciar sesion

 session_start();









?>
