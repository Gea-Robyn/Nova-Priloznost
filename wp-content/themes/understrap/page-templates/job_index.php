<?php

/**
 * Template Name: Job index
 *
 * Template for displaying a page just with the header and footer area and a "naked" content area in between.
 * Good for landingpages and other types of pages where you want to add a lot of custom markup.
 *
 * @package understrap
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;

// static HTML design goes here - its recommended to use get_header & get_footer functionality for header/footer
get_header();
?>
<custom-element class="my-container"></custom-element>

<?php
get_footer();

/* if ( WP_ENV != 'development' ) { 
	// unstyled functionality code goes here  

  while (have_posts()) : the_post();
    the_content();
  endwhile;
} */


?>