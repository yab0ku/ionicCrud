<?php
include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
$year = $data['year'];
$studentOne = $data['studentOne'];
$studentTwo = $data['studentTwo'];

$q = mysqli_query($con, "INSERT INTO worker_tbl(year,studentOne,studentTwo) VALUES ($year,$studentOne,$studentTwo)");


if($q){
    http_response_code(201);
    $message['status'] = "Success";
}else{
    http_response_code(422);
    $message['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($con);