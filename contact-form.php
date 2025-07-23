<?php
// Ambil data dari form
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Token bot Telegram
$token = "8166538633:AAGLeF1hlhJgsCO_g3pTu4iqSMJ6ZSp5Mrw";

// ID Chat Anda (bisa ID pribadi atau channel/group)
$chat_id = "6774841698";

// Format pesan
$text = "📬 Pesan Baru dari Website Portofolio:\n\n";
$text .= "👤 Nama: $name\n";
$text .= "📧 Email: $email\n";
$text .= "💬 Pesan:\n$message";

// Kirim ke Telegram
$url = "https://api.telegram.org/bot$token/sendMessage";

$data = [
    'chat_id' => $chat_id,
    'text' => $text,
];

file_get_contents($url . "?" . http_build_query($data));

// Redirect kembali
header("Location: contact.html");
exit;
?>
