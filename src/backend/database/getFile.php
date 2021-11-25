<?php
$filepath = $_POST['filepath'];
$filepath = "../../../".$filepath;
$filename = basename($filepath);
$output['filename'] = $filename;
if(file_exists($filepath)){
    header("Cache-Control: public");
    header("Content-Description: File Transfer");
    header("Content-Desposition: attachment; filename = $filename");
    header("Content-Type:application/");
    header("Content-Tranfer-Encoding:binary");
    readfile($filepath);
    exit;
}
else{
   $output['error'] = "file not found";
}
?>