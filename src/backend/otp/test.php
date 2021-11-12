
<?php

 $db = new mysqli("localhost","chandresh","codezuma","prolic");
 if ($db->connect_error) {
  echo "Connection failed: " . $db->connect_error;
}

function makeDirForUser($email){
    global $db;
    $SAVE_USER_SQL_QUERY = "SELECT id FROM USERS WHERE email = '$email'";
    $data = $db->query($SAVE_USER_SQL_QUERY);
    $user =  $data->fetch_assoc();
   return $user["id"];
  }
  echo MakeDirForUser("patidarchandresh202@gmail.com");
?>