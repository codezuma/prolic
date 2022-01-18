<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './../plugin/src/Exception.php';
require './../plugin/src/PHPMailer.php';
require './../plugin/src/SMTP.php';
$email = $_POST['email'];
$otp_type = $_POST['type'];
//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
    //Server settings
  //Enable verbose debug output
    $mail->isSMTP();     
    $mail->Mailer = "smtp";                                       //Send using SMTP
/*     $mail->SMTPDebug  = 1;   */
    $mail->SMTPAuth   = TRUE;
    $mail->SMTPSecure = "tls";
    $mail->Port       =  587;
    $mail->Host       = "smtp.gmail.com";
    $mail->Username   = "prolicmail@gmail.com";
    $mail->Password   = "prolic123";
//TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

//Recipients
    $mail->IsHTML(true);
    $mail->AddAddress("$email", "Chandresh patidar");
    $mail->SetFrom("patidarchandresh2002@gmail.com", "Prolic");
    $mail->Subject = "Prolic email verification OTP";
    // generating otp
    $otp_array = [];
    $i=0;
    $otp_arr =[];
    while(count($otp_array)<4){
        global $i,$otp_array;
        $otp_array[$i] = rand(1,9);
        $i++; 
    }
    $otp = implode($otp_array);
    str_pad($otp, 4, "0", STR_PAD_LEFT);
    $content = "<section style='width: 100%;'>
                  <center  style='margin: 20px auto;max-width: 500px;'>
                    <img style='border-radius: 10px; width:100%;margin:0;' src='https://pixabay.com/get/g0f6a84e93643642933c27a923ad8fbc0e6d4af733b6537a5773d31790529b3ba11790cff039e9c40b40fb1930a15ff61_640.png'>
                     <span style='text-align: left;margin-top:0;font-size:18px;font-weight:700;'>Hey buddy  ,</span>
                     <div style='text-align: left;'>
                      Wowwee! Thanks for registering an account with prolic,
                      <br>
                    you are one step away from joining prolic family.
                <br><br>
                 Please use the verification code below on the prolic website
                </div>
                 <h1 style='text-align: center;margin:0;margin-top: 16px;'>$otp</h1>
                    <br>
                 <div style='text-align: left;margin: 0;'>If you didn't request this, you can ignore this email or let us know</div> 
                 <br>
                <h3  style='margin: 0;text-align:left;'>Thanks!</h3>
                <br>
                <div style='text-align: left;'>Prolic Team</div>
       </center>
   </section> ";

    //Attachments

 $db = new mysqli("localhost","chandresh","codezuma","prolic");
 if ($db->connect_error) {  
  echo "Connection failed: " . $db->connect_error;
  }


  function CheckUser($email){
      global $db;
      $userData =  $db->query("SELECT id FROM users WHERE email = '$email'");
      return ($userData->num_rows===0);
  }
    if(CheckUser($email)){
      $mail->MsgHTML($content); 
      if(!$mail->Send()) {
        echo 'mail_not_send';
      } else {
        $SAVE_OTP_SQL_QUERY = "Insert INTO OTP(email,type,otp) VALUES ('$email','$otp_type','$otp')";
        $db->query($SAVE_OTP_SQL_QUERY);
        echo 'mail_send';
      }
    }
    else{
      echo 'user_available';
    }
  
    //Content 
 /*    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Here is the subject';
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
 */

?>