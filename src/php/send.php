<?php
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $mail = new PHPMailer\PHPMailer\PHPMailer();

  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;
  $mail->isHTML(true);
  $mail->Debugoutput = function ($str, $level) {
    $GLOBALS['status'][] = $str;
  };

  // Настройки вашей почты
  $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера вашей почты
  $mail->Username   = 'info@dim-event.ru'; // Логин на почте
  $mail->Password   = ''; // Пароль на почте
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;
  $mail->setFrom('info@dim-event.ru', 'Даша и Медведь — креативное EVENT-АГЕНТСТВО'); // от кого будет уходить письмо?

  // Переменные
  $user_name    = (!empty($_POST['user_name']))    ? $_POST['user_name']  : 'Не указано';
  $user_phone   = (!empty($_POST['user_phone']))   ? $_POST['user_phone'] : 'Не указан';
  $user_email   = (!empty($_POST['user_email']))   ? $_POST['user_email'] : 'Не указана';
  $user_request   = (!empty($_POST['user_request']))   ? $_POST['user_request'] : 'Не указана';
  $user_message   = (!empty($_POST['user__message']))   ? $_POST['user__message'] : 'Не указано';

  $phone_formatted = str_replace(['(', ')', '-', ' ', ''], '', $user_phone);

  // Формирование содержимого письма
  $subject = "Заявка с сайта dim-event.ru";
  $body =
    "
    <html>
     <p>
      Контактная информация: <br> <br>
      <b>Имя: </b> $user_name <br>
	    <b>Номер телефона: </b> <a href='tel:+$phone_formatted'>+$user_phone</a><br>
      <b>Электронная почта: </b> <a href='mailto:$user_email'>$user_email</a><br>
	    <b>Нужная услуга: </b>$user_request<br>
      <b>Сообщение: </b>$user_message <br><br>
     </p>
    </html>
   ";

  // Получатель письма
  $mail->addAddress('info@dim-event.ru');

  // Отправка сообщения
  $mail->Subject = $subject;
  $mail->Body = $body;

  if ($mail->send()) $status = "Сообщение успешно отправлено";
  else $status =  "Сообщение не было отправлено. Причина ошибки: " . $mail->ErrorInfo;

  echo json_encode($status);
}
