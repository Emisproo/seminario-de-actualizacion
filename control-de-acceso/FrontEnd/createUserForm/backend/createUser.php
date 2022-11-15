<?php

include_once( "../../lib/database.php");


$json_body = file_get_contents('php://input');
$object = json_decode($json_body);

$password = $object->password;
$name = $object->name;

try
{
	//Todo tipo de validación de información, debe ser realizada aquí de manera obligatoria
	//ANTES de enviar el comando SQL al motor de base de datos.

	$SQLStatement = $this->connection->prepare("CALL `createUser`(:name, :password)");
	$SQLStatement->bindParam( ':name', $name );
	$SQLStatement->bindParam( ':password', $password );
	$SQLStatement->execute();

	$status = array( 'status'=>'ok', 'description'=>'Usuario Creado Satisfactoriamente!' );

    echo json_encode($status);
}
catch( PDOException $connectionException )
{
    $status = array( 'status'=>'db-error (create.php', 'description'=>$connectionException->getMessage() );
    echo json_encode($status);
    die();
}

?>