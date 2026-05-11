<?php

session_start();

include "../config/db.php";
/** @var mysqli $conn */

// Allow only POST requests

if($_SERVER["REQUEST_METHOD"] !== "POST"){

    echo "Invalid request";
    exit();

}

// Get form data safely

$email = $_POST['email'] ?? "";
$password = $_POST['password'] ?? "";

// Validation

if(
    empty($email) ||
    empty($password)
){

    echo "All fields are required";
    exit();

}

// Find user

$query = "
SELECT * FROM users
WHERE email='$email'
";

$result = mysqli_query($conn, $query);

// Check user exists

if(mysqli_num_rows($result) === 0){

    echo "User not found";
    exit();

}

// Fetch user data

$user = mysqli_fetch_assoc($result);

// Verify password

if(password_verify($password, $user['password'])){

    // Create session

    $_SESSION['user_id'] = $user['id'];

    $_SESSION['user_name'] = $user['name'];

    echo "Login successful";

}else{

    echo "Incorrect password";

}

?>