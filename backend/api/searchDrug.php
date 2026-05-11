<?php

include "../config/db.php";
/** @var mysqli $conn */
// Get search term

$search = $_GET['query'] ?? "";

// Validation

if(empty($search)){

    header("Content-Type: application/json");
    echo json_encode([]);
    exit();

}

// SQL Query

$query = "
SELECT * FROM drugs
WHERE name LIKE '%$search%'
";

// Execute query

$result = mysqli_query($conn, $query);

// Store results

$drugs = [];

// Fetch rows

while($row = mysqli_fetch_assoc($result)){

    $drugs[] = $row;

}

// Return JSON

header("Content-Type: application/json");

echo json_encode($drugs);

?>