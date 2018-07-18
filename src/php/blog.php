<?php

function get($resource, array $params = array()){
    header("Access-Control-Allow-Origin: *");
    $apiUrl = 'http://promo-17.codeur.online/blog/index.php/wp-json';
    $json = file_get_contents($apiUrl.$resource.'?'.http_build_query($params));
    $result = json_decode($json);
    return $result;
}
// var_dump($result);



// $pages = get('/wp/v2/pages', array(
//     'orderby' => 'author',
//     'order' => 'asc',
// ));
 
// foreach ($pages as $page) {
//     echo 'Page ' . $page->id . ' : ' . $page->slug . '<br>';
// }

// var_dump($pages);

