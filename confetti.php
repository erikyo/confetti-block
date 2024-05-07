<?php
/**
 * Plugin Name: Confetti
 * Description: Confetti block
 * Version:     1.0.0
 * Author:      me
 * Text Domain: confetti
 */

function register_block() {
    register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'register_block' );