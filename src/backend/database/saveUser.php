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
echo "kjsgkjsd";
  echo isEmailAvailable($email)? saveUser($email,$password) : "email_already_used";
function saveUser($email,$password){
  $isUserSaved =  createRowInUsers($email,$password) and makeTableForUser(getUserId($email)) and  makeDirForUser(getUserId($email));
  echo "save user called <br>"; 
  return $isUserSaved ? "user_saved":"error_occured";
}

  function createRowInUsers($email,$password){
    global $db;
    $SAVE_USER_SQL_QUERY = "Insert INTO USERS(email,password) VALUES ('$email','$password')";
    return $db->query($SAVE_USER_SQL_QUERY);
  }
  function isEmailAvailable($email){
    global $db;
    $CHECK_USER_SQL_QUERY = "SELECT * FROM USERS WHERE email = '$email'";
    $userData =  $db->query($CHECK_USER_SQL_QUERY);
    return ($userData->num_rows===0);
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