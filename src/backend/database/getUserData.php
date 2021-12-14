<?php
 $db = new mysqli("localhost","chandresh","codezuma","prolic");
 $output = array();
 
 if ($db->connect_error) {
  echo "Connection failed: " . $db->connect_error;
  die();
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
    public $path;
    function __construct($name,$modifiedDate,$path,$size,$fileType)
    {
      $this->name = $name;
      $this->modifiedDate = $modifiedDate;
      $this->size = $size;
      $this->type = $fileType;
      $this->path = $path;
    }
  }
  class folder{
    public $name;
    public $folders;
    public $files;
    public $id;
    function __construct($path)
    {
     $this->name = basename($path);
     $this->path = $path;
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
  }}
  function getRecentItems($id){
    global $db;
    $GET_RECENTITEMS_SQL_QUERY = "SELECT file_name,type,path,upload_date,size FROM USER$id ORDER BY upload_date DESC";
    $data = $db->query($GET_RECENTITEMS_SQL_QUERY);
    $recentItems = [];
    while($row = $data->fetch_assoc()) {
      $recentItems[] = new recentItem($row['file_name'],$row['upload_date'],$row['path'],$row['size'],$row['type']);  
    }
  
    return $recentItems;
  }
  function getUserId($email){
    global $db;
    $GET_USER_ID_SQL_QUERY = "SELECT id FROM USERS WHERE email = '$email'";
    $data = $db->query($GET_USER_ID_SQL_QUERY);
    return ($data->fetch_assoc())["id"];
  }

?>
