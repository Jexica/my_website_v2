<?php

require_once 'functions.inc';

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$myEmail = "jessica.lm15@yahoo.no";

// Sanitize received values
$name = sanitize($name);
$email = sanitize($email);
$message = sanitize($message);

// Validate the form
if (validateForm($name, $email, $message)) {
    // Send the email
    $success = mail($myEmail, "$name ($email)", $message);
    if ($success) {
        sendReply(200, "Email sent");
    } else {
        sendReply(500, "Failed to send email, please try again later");
    }
} else {
    // The form validation failed
    sendReply(400, "Some fields are empty or contain wrong values");
}
