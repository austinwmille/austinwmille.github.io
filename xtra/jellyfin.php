<?php
// Replace with your router's public IP
$routerPublicIP = '24.164.18.89';
$internalURL   = 'http://eero:8096';
$publicURL     = 'http://minecraft.austinmiller.net:8096';

// Get the visitor's IP address
$visitorIP = $_SERVER['REMOTE_ADDR'];

// If the visitor's IP matches your router's public IP,
// redirect them to the internal Jellyfin URL.
if ($visitorIP === $routerPublicIP) {
    header("Location: http://eero:8096");
    exit();
}

// Otherwise, show the normal page content.
?>
