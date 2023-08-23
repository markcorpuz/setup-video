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

// SETUP-GP - Override GPs default color schemes
add_filter( 'option_generate_settings', function( $settings ) {
    $settings['global_colors'] = [
        [
            'name' => __( 'Black', 'generatepress' ),
            'slug' => 'black',
            'color' => '#000000',
        ],
        [
            'name' => __( 'Darker', 'generatepress' ),
            'slug' => 'darker',
            'color' => '#191919',
        ],
        [
            'name' => __( 'Dark', 'generatepress' ),
            'slug' => 'dark',
            'color' => '#333333',
        ],
        [
            'name' => __( 'Mid', 'generatepress' ),
            'slug' => 'mid',
            'color' => '#666666',
        ],
        [
            'name' => __( 'Light', 'generatepress' ),
            'slug' => 'light',
            'color' => '#999999',
        ],
        [
            'name' => __( 'Lighter', 'generatepress' ),
            'slug' => 'lighter',
            'color' => '#cccccc',
        ],
        [
            'name' => __( 'Lightest', 'generatepress' ),
            'slug' => 'lightest',
            'color' => '#e5e5e5',
        ],
        [
            'name' => __( 'Lightest2x', 'generatepress' ),
            'slug' => 'lightest2x',
            'color' => '#efefef',
        ],
        [
            'name' => __( 'Lightest3x', 'generatepress' ),
            'slug' => 'lightest3x',
            'color' => '#f0f0f0',
        ],
        [
            'name' => __( 'White', 'generatepress' ),
            'slug' => 'white',
            'color' => '#ffffff',
        ],
        [
            'name' => __( 'Main', 'generatepress' ),
            'slug' => 'main',
            'color' => '#555555',
        ],
        [
            'name' => __( 'Accent', 'generatepress' ),
            'slug' => 'accent',
            'color' => '#1e73be',
        ],
        [
            'name' => __( 'Highlight', 'generatepress' ),
            'slug' => 'highlight',
            'color' => '#4799e2',
        ],
        [
            'name' => __( 'Main DM', 'generatepress' ),
            'slug' => 'maindm',
            'color' => '#f0f0f0',
        ],
        [
            'name' => __( 'Accent DM', 'generatepress' ),
            'slug' => 'accentdm',
            'color' => '#d0e5f8',
        ],
        [
            'name' => __( 'Highlight DM', 'generatepress' ),
            'slug' => 'highlightdm',
            'color' => '#f2f8fd',
        ],
        // And so on..
    ];

    return $settings;
} );

// SETUP-GP - Add custom body class defined by acf field
// https://wpdevdesign.com/how-to-add-custom-body-classes-to-pages-in-wordpress/
add_filter( 'body_class', 'custom_body_class' );
function custom_body_class( array $classes ) {
    $body_class = is_singular() ? get_post_meta( get_the_ID(), 'css_body', true ) : null;

    if ( $body_class ) {
        $classes[] = $body_class;
    } else {}

    return $classes;
}