<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST["message"]);

    $to = "your-email@example.com";  // Replace with your actual email
    $subject = "New Message from Contact Form";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $fullMessage = "Email: $email\n\n";
    $fullMessage .= "Message:\n$message\n";

    mail($to, $subject, $fullMessage, $headers);

    echo "Message sent! I'll get back to you soon.";
} else {
    echo "Error! Please try again.";
}
?>
