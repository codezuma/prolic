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
    echo saveUser($email,$password);
}
else {
 echo 'wrong_otp';
 die();
};

function saveUser($email,$password){
    $isUserSaved =  createRowInUsers($email,$password) and makeTableForUser(getUserId($email)) and  makeDirForUser(getUserId($email));
   return $isUserSaved ? "user_saved":"error_occured";
}

  function createRowInUsers($email,$password){
    global $db;
    $SAVE_USER_SQL_QUERY = "Insert INTO USERS(email,password) VALUES ('$email','$password')";
    return $db->query($SAVE_USER_SQL_QUERY);
  }
  function getUserId($email){
    global $db;
    $GET_USER_ID_SQL_QUERY = "SELECT id FROM USERS WHERE email = '$email'";
    $data = $db->query($GET_USER_ID_SQL_QUERY);
    return ($data->fetch_assoc())["id"];
  }
  function makeTableForUser($id){
    global $db;
    $CREATE_TABLE_FOR_USER_SQL_QUERY = "CREATE TABLE user$id (
      id int NOT NULL AUTO_INCREMENT,
      file_name varchar(255) NOT NULL,
      type varchar(10),
      path varchar(255),
      upload_date date DEFAULT current_date,
      PRIMARY KEY (id)
       );";
      return  $db->query($CREATE_TABLE_FOR_USER_SQL_QUERY);
  }
  function makeDirForUser($id){
    return  mkdir("../../../drive/user_$id");
  }
?>
<?php

use JetBrains\PhpStorm\Internal\ReturnTypeContract;
// Set session variables
session_start();
 $email = $_POST["email"];
 $password = $_POST["password"];
/*  $email = "patidarchadlknlhnrjbkjesjbh2002@fgmaul.ci";
 $password = "ljsddgli"; */
 $_SESSION["email"] = $email;
   
 $db = new mysqli("localhost","chandresh","codezuma","prolic");
 if ($db->connect_error) {
  echo "Connection failed: " . $db->connect_error;
  die();
}
    ?>