<?php
	header("Access-Control-Allow-Origin: *");
	// header("Content-Type: application/json; charset=utf-8");
	header("Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS");
	header("Access-Control-Max-Age: 3600");
	header("Access-Control-Allow-Headers: token, Content-Type");
	header("Content-Length: 0");
	header("Content-Type: text/plain");


	//ini_set('display_errors', '0');
	date_default_timezone_set("Asia/Manila");
	set_time_limit(1000);

	// require_once("./vendor/autoload.php");

	// $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
	// $dotenv->load();

	define("SERVER", "localhost");
	define("DBASE","student_crud");
	define("USER", "root");
	define("PASSWORD", "");
	define("CHARSET", "utf8mb4");

    $con = mysqli_connect(SERVER, USER, PASSWORD, DBASE) or die("could not connect DB");
