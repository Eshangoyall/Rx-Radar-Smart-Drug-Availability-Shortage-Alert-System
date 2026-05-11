<?php

include "../config/db.php";
/** @var mysqli $conn */

// Check request method

if($_SERVER["REQUEST_METHOD"] !== "POST"){

    echo "Invalid request";
    exit();

}

// Get form data safely

$name = $_POST['name'] ?? "";
$email = $_POST['email'] ?? "";
$password = $_POST['password'] ?? "";


// Validation

if(
    empty($name) ||
    empty($email) ||
    empty($password)
){
    echo "All fields are required";
    exit();
}


// Check existing email

$checkQuery = "
SELECT * FROM users
WHERE email='$email'
";

$checkResult = mysqli_query($conn, $checkQuery);


if(mysqli_num_rows($checkResult) > 0){

    echo "Email already exists";
    exit();

}


// Encrypt password

$hashedPassword = password_hash(
    $password,
    PASSWORD_DEFAULT
);


// Insert user

$insertQuery = "
INSERT INTO users(name, email, password)
VALUES('$name', '$email', '$hashedPassword')
";


$result = mysqli_query($conn, $insertQuery);


// Response

if($result){

    echo "Registration successful";

}else{

    echo "Registration failed";

}

?>