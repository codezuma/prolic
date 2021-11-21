<?php

// Set session variables
session_start();
 $userEmail = $_POST["email"];
 $userPassword = $_POST["password"];
 $_SESSION["email"] = $userEmail;
 $db = new mysqli("localhost","chandresh","codezuma","prolic");
 $output = array();
 
 if ($db->connect_error) {
  echo "Connection failed: " . $db->connect_error;
  die();
}
  $output['loginResult'] = isEmailAvailable($userEmail)? "email_not_available" :checkPassword($userEmail);
  if($output['loginResult'] == 'loging_in'){
    $id =  getUserId($userEmail);
    $userObject = new folder( "../../../drive/user_$id");
    $output['userObject'] =  json_encode($userObject);

    $recentItems = getRecentItems($id);
    $output['recentItems'] = json_encode($recentItems) ;
   }

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
  function getUserId($email){
    global $db;
    $GET_USER_ID_SQL_QUERY = "SELECT id FROM USERS WHERE email = '$email'";
    $data = $db->query($GET_USER_ID_SQL_QUERY);
    return ($data->fetch_assoc())["id"];
  }
  function getRecentItems($id){
    global $db;
    $GET_RECENTITEMS_SQL_QUERY = "SELECT file_name,type,path,upload_date,size FROM USER$id ORDER BY upload_date DESC";
    $data = $db->query($GET_RECENTITEMS_SQL_QUERY);
    $recentItems = [];
    while($row = $data->fetch_assoc()) {
      $recentItems[] = new recentItem($row['file_name'],$row['upload_date'],$row['size'],$row['type']);  
    }
  
    return $recentItems;
  }
  class folder{
    public $name;
    public $folders;
    public $files;
    function __construct($path)
    {
     $this->name = basename($path);
     $this->folders = $this->getDirectories($path);
     $this->files = $this->getFiles($path);
    }
    function getDirectories(string $path) : array
    {
    $directories = [];
    $items = scandir($path);
    foreach ($items as $item) {
        if($item == '..' || $item == '.')
            continue;
        if(is_dir($path.'/'.$item))
            $directories[] = new folder("$path/$item");
    }
    return $directories;
   }

   function getFiles(string $path) : array
   {
   $files = [];
   $items = scandir($path);
   foreach ($items as $item) {
       if($item == '..' || $item == '.')
           continue;
       if(is_file($path.'/'.$item))
           $files[] = new fileObject($path.'/'.$item);
   }
   return $files;
  }
  }
  class fileObject{
    public $name;
    public $path;
    function __construct($path)
    {
      $this->name =  basename($path);
      $this->path =  $path;
    } 
  }

  class recentItem{
    public $name;
    public $modifiedDate;
    public $size;
    public $type;
    function __construct($name,$modifiedDate,$size,$fileType)
    {
      $this->name = $name;
      $this->modifiedDate = $modifiedDate;
      $this->size = $size;
      $this->type = $fileType;
    }
  }
  echo json_encode($output);
