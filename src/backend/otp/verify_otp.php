<?php
$user_otp = $_POST['otp'];
$email = $_POST['email'];
$type = $_POST['type'];
$password = $_POST['password']; 
$db = new mysqli("localhost","chandresh","codezuma","prolic");
if ($db->connect_error) {
 echo "Connection failed: " . $db->connect_error;
 }

$userData =  $db->query("SELECT * FROM OTP WHERE email = '$email' AND otp = '$user_otp'");
if($userData->num_rows!=0){
    $SAVE_USER_SQL_QUERY = "Insert INTO USERS(email,password) VALUES ('$email','$password')";
    $db->query($SAVE_USER_SQL_QUERY);
    echo "user_saved";
}
else {
 echo 'wrong_otp';
};

?>