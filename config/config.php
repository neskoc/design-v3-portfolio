<?php
if (session_status() == PHP_SESSION_NONE) {
    $name = preg_replace("/[^a-z\d]/i", "", __DIR__);
    // var_dump($name);
    session_name($name);
    session_start();
}
