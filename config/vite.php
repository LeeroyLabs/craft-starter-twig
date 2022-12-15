<?php
use craft\helpers\App;

$isDev = App::env('CRAFT_ENVIRONMENT') === 'dev';

return [
    'checkDevServer' => $isDev,
    'devServerInternal' => 'http://localhost:3000',
    'devServerPublic' => Craft::getAlias('@web') . ':3000',
    'errorEntry' => 'src/scripts/main.js',
    'manifestPath' => Craft::getAlias('@webroot') . '/dist/manifest.json',
    'serverPublic' => Craft::getAlias('@web') . '/dist/',
    'useDevServer' => $isDev,
];
