<?php
session_start();

$email = $_SESSION["email"];
$file = $_FILES["file"];
$path = $_POST["path"];
$type = $_POST["type"];

$output = [];

/* 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
 */
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
   $filePath =  "./drive/user_$id/".$path.$file['name'];
    
   function saveInDrive(){
     global $file,$filePath;
    $saveFilePath = "../../../".$filePath;
    return @move_uploaded_file($file["tmp_name"],$saveFilePath);
   }
   function saveInDatabase(){
   global $file,$db,$filePath,$id,$type;
   $SAVE_FILE_SQL_QUERY = "INSERT INTO USER$id(file_name,type,path,size) VALUES('$file[name]','$type','$filePath','$file[size]')";
   return $db->query($SAVE_FILE_SQL_QUERY);
   }
   $output[] =  ((saveInDrive() and saveInDatabase())? "success" :"error") ;
   echo json_encode($output);
?>

