<?php

if(isset($_POST["sim"])) {
    
	$orderID = $_POST["orderID"];
	$labelCajonType = $_POST["labelCajonType"];
	$name = $_POST["name"];
    $email = $_POST["email"];
    $address = $_POST["address"];
    $comm = $_POST["comm"];
	
    
    
	
    //file_put_contents("test_con.txt", "name: " . $name . ", email: " . $email . ", phone: " . $phone . ", con: " . $con);

  	$toArr = array("cajonmajonshop@gmail.com");
    $subject = "ЗАКАЗ №" . $orderID;
	$email_text = "Номер Заказа: " . $orderID . PHP_EOL;
	$email_text .= "____" . PHP_EOL;
	$email_text .= " " . PHP_EOL;
	$email_text .= "Тип кахона: " . $labelCajonType . PHP_EOL;
	$email_text .= "Имя: " . $name . PHP_EOL;
	$email_text .= "E-mail: " . $email . PHP_EOL;
    $email_text .= "Адрес: " . $address . PHP_EOL;
	$email_text .= "Комментарий: " . $comm . PHP_EOL;
    
 	
    mail("cajonmajonshop@gmail.com", $subject, $email_text);
	echo print_r (error_get_last());
    //require_once("./email/send_mail.php");
}


echo "ok";

?>