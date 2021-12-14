<?php
$folderPath = $_POST['folderPath'];
$folderName = $_POST['folderName'];
$newfolderPath = $folderPath.'/'.$folderName;
$output['folderExits'] =  file_exists($newfolderPath);
if(!$output['folderExits']){
  $output['folderCreated'] =   mkdir($newfolderPath);
}
echo json_encode($output);
?>