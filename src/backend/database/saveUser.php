<?php
 $email = $_POST["email"];
 $password = $_POST["password"];
 $db = new mysqli("localhost","chandresh","codezuma","prolic");
 if ($db->connect_error) {
  echo "Connection failed: " . $db->connect_error;
}

  function saveUser($email,$password){
     global $db;
     $SAVE_USER_SQL_QUERY = "Insert INTO USERS(email,password) VALUES ('$email','$password')";
     $CHECK_USER_SQL_QUERY = "SELECT * FROM USERS WHERE email = '$email'";
     $userData =  $db->query($CHECK_USER_SQL_QUERY);
     if($userData->num_rows===0){
      $db->query($SAVE_USER_SQL_QUERY);
      echo "user_saved";
     }
     else{
       echo "email_used";
     };
    }
   saveUser($email,$password);
   
?>