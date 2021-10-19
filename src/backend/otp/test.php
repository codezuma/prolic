<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
$db = new mysqli("localhost","chandresh","codezuma","prolic");
if ($db->connect_error) {
 echo "Connection failed: " . $db->connect_error;
}
$SAVE_USER_SQL_QUERY = "Insert INTO OTP(email,type,otp) VALUES ('email','otp_type','1234')";
$db->query($SAVE_SQL_QUERY);
?>