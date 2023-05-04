<?php
global $navigation;
$navigation = wp_get_nav_menu_items('header-nav');
?>

<ul class="flex items-center h-full gap-6 font-montserrat-medium tracking-wide">
  <?php foreach ($navigation as $item) { ?>
    <a href="<?= $item->url ?>" class="text-white hover:text-cerulian transition-colors duration-300"><?= $item->title ?></a>
  <?php } ?>
</ul>