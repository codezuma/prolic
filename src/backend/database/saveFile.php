<?php
session_start();

$email = $_SESSION["email"];
$file = $_FILES["file"];
$path = $_POST["path"];

$db = new mysqli("localhost","chandresh","codezuma","prolic");
if ($db->connect_error) {
 echo "Connection failed: " . $db->connect_error;
 die();
}
function getUserId($email){
    global $db;
    $GET_USER_ID_SQL_QUERY = "SELECT id FROM users WHERE email = '$email'";
    $data = $db->query($GET_USER_ID_SQL_QUERY);
    return ($data->fetch_assoc())["id"];
  }

   $id = getUserId($email);
   $fileSavePath =  "../../../drive/user_$id/".$path.$file['name'];
   @move_uploaded_file($file["tmp_name"],$fileSavePath);
?>

