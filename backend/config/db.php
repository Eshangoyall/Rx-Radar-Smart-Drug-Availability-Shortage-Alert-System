<?php

$host = "localhost";
$username = "root";
$password = "";
$database = "rx_radar";

$conn = mysqli_connect(
    $host,
    $username,
    $password,
    $database
);

if(!$conn){
    die("Database connection failed");
}

?>