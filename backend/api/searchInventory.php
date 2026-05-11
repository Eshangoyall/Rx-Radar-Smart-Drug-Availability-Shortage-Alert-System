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

SELECT

    drugs.name AS medicine_name,
    drugs.strength,

    pharmacies.name AS pharmacy_name,
    pharmacies.location,

    inventory.quantity

FROM inventory

JOIN drugs
ON inventory.drug_id = drugs.id

JOIN pharmacies
ON inventory.pharmacy_id = pharmacies.id

WHERE drugs.name LIKE '%$search%'

";

// Execute query

$result = mysqli_query($conn, $query);

// Store results

$data = [];

// Fetch rows

while($row = mysqli_fetch_assoc($result)){

    $data[] = $row;

}

// Return JSON

header("Content-Type: application/json");

echo json_encode($data);

?>