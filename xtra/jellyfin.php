<?php
// Replace with your router's public IP
$routerPublicIP = 'vgr325b3t';
$internalURL   = 'bgtrewn65n';
$publicURL     = 'http://minecraft.austinmiller.net:bvg5b31';

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
