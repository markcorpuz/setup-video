<?php
/**
 * GeneratePress child theme functions and definitions.
 *
 * Add your custom PHP in this file.
 * Only edit this file if you have direct access to it on your server (to fix errors if they happen).
 */

// GP - Activate local fonts in editor
add_filter( 'generate_editor_styles', function( $editor_styles ) {
    $editor_styles[] = 'style.css';

    return $editor_styles;
} );