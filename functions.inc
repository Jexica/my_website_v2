<?php

/**
 * Removes potentially dangerous content
 *
 * @param string $value String to sanitize
 * @return string Sanitized string
 */
function sanitize ($value) {
    $value = strip_tags($value);
    $value = htmlspecialchars($value, ENT_QUOTES);
    return $value;
}

/**
 * Validate the form, not including the captcha.
 *
 * @param string $name Value of the name input field
 * @param string $email Value of the email input field
 * @param string $message Value of the message input field
 * @return boolean Whether if the form is valid
 */
function validateForm($name, $email, $message) {
    $valid = true;
    // The name must have at least 2 characters
    if (strlen($name) < 2) {
        $valid = false;
    }
    // The email must be valid
    $emailPattern = '/^\w+@[\w_\-]+?(\.[a-zA-Z]{2,})+$/';
    if (!preg_match($emailPattern, $email)) {
        $valid = false;
    }
    // The message must have a minimum content
    if (strlen($message) < 5) {
        $valid = false;
    }
    return $valid;
}

/**
 * Sends the reply to the HTTP request. Must be the script's only output.
 *
 * @param integer $statusCode HTTP status code (200, 400 or 500)
 * @param string $message Message to send (will be put in a JSON object)
 */
function sendReply($statusCode, $message) {
    switch ($statusCode) {
        case 200:
            header("HTTP/1.1 200 OK");
            break;
        case 400:
            header("HTTP/1.1 400 Bad Request");
            break;
        case 500:
            header("HTTP/1.1 500 Internal Server Error");
            break;
    }
    echo json_encode(array(
        "msg" => $message
    ));
}
