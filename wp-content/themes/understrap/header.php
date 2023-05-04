<?php
/**
 * The header for our theme
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package UnderStrap
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

$container = get_theme_mod( 'understrap_container_type' );
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="apple-touch-icon" sizes="76x76" href="<?= get_template_directory_uri(); ?>/img/favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="<?= get_template_directory_uri(); ?>/img/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="<?= get_template_directory_uri(); ?>/img/favicon/favicon-16x16.png">
	<link rel="manifest" href="<?= get_template_directory_uri(); ?>/img/favicon/site.webmanifest">
	<link rel="mask-icon" href="<?= get_template_directory_uri(); ?>/img/favicon/safari-pinned-tab.svg" color="#0088c3">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="theme-color" content="#ffffff">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?> <?php understrap_body_attributes(); ?>>
<?php do_action( 'wp_body_open' ); 

?>
<div class="site" id="app">
	<div id="wrapper-navbar" class="container-grid bg-viva-magenta">
		<div class="content flex justify-between">
			<a href="/">
				<img src="<?= get_template_directory_uri(); ?>/img/logo.png" alt="logo Nova Priloznost" class="h-14">
			</a>
	
			<nav id="main-nav" aria-labelledby="main-nav-label">
				<?php
					get_template_part( 'partials/layout/navigation' );
				?>
			</nav>
		</div>
	</div><!-- #wrapper-navbar end -->
