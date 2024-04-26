<?php
/**
 * Plugin Name:       Confetti
 * Text Domain:       confetti
 */

function register_block() {
    register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'register_block' );