<?php
$name = $_POST['name']
$phone = $_POST['phone']
$Kvm = $_POST['kvm']
// Токен телеграм бота
$token = "8193946447:AAGQCdeOOnGRtH43SBAm0uR2Rhk7K9NLtcs";
// ID Чата
$chat_id = "-4688805448";
$arr = array(
    'Имя' => $name,
    'Телефон' => $phone,
    'Квадратных метров:' => $Kvm
);
foreach($arr as $key => $value){
    $txt .= "<b>".$key."</b>".$value."%0A";
};
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

if ($sendToTelegram){
    header('Location:index.html');
    return true
}else{
    header('Location:index.html');
    echo('Error')
}