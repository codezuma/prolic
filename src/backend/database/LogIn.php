<?php


use JetBrains\PhpStorm\Internal\ReturnTypeContract;
// Set session variables
session_start();
 $userEmail = $_POST["email"];
 $userPassword = $_POST["password"];
 $_SESSION["email"] = $userEmail;
 $db = new mysqli("localhost","chandresh","codezuma","prolic");
 
 
 if ($db->connect_error) {
  echo "Connection failed: " . $db->connect_error;
  die();
}
echo isEmailAvailable($userEmail)? "email_not_available" :checkPassword($userEmail);
  function checkPassword($email){
    global $userPassword;
   $isPasswordCorrect = getPassword($email)==$userPassword;
   return ($isPasswordCorrect)?"loging_in":"wrong_password";
  }
  function isEmailAvailable($email){
    global $db;
    $CHECK_USER_SQL_QUERY = "SELECT email FROM USERS WHERE email = '$email'";
    $userData =  $db->query($CHECK_USER_SQL_QUERY);
    return ($userData->num_rows===0);
  }
  function getPassword($email){
    global $db;
    $GET_USER_ID_SQL_QUERY = "SELECT password FROM USERS WHERE email = '$email'";
    $data = $db->query($GET_USER_ID_SQL_QUERY);
    return ($data->fetch_assoc())["password"];
  }
?>