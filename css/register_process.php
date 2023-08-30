<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $db_host = "localhost"; // Cambia esto si es necesario
  $db_user = "tu_usuario"; // Cambia esto si es necesario
  $db_pass = "tu_contraseña"; // Cambia esto si es necesario
  $db_name = "nombre_de_la_base_de_datos"; // Cambia esto si es necesario

  $conn = new mysqli($db_host, $db_user, $db_pass, $db_name);

  if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
  }

  $username = $conn->real_escape_string($_POST["username"]);
  $email = $conn->real_escape_string($_POST["email"]);
  $password = password_hash($_POST["password"], PASSWORD_BCRYPT);

  $sql = "INSERT INTO usuarios (username, email, password) VALUES ('$username', '$email', '$password')";

  if ($conn->query($sql) === TRUE) {
    echo "Registro exitoso";
  } else {
    echo "Error al registrar: " . $conn->error;
  }

  $conn->close();
}
?>