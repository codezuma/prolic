<?php
require __DIR__.'./getUserData.php';
$db = new mysqli("localhost","chandresh","codezuma","prolic");

if ($db->connect_error) {
 echo "Connection failed: " . $db->connect_error;
 die();
}
session_start();
$userEmail = $_SESSION["email"];
$id =  getUserId($userEmail);

$output = [];
$userObject = new folder( "../../../drive/user_$id");
$output['userObject'] =  $userObject;

$recentItems = getRecentItems($id);
$output['recentItems'] = $recentItems;

echo json_encode($output);
?>