 <?php
require __DIR__."./getUserData.php";
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
    $userObject = new folder("../../../drive/user_".$id);
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
  echo json_encode($output);
