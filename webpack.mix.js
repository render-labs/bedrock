let mix = require('laravel-mix');

mix.js('src/js/app.js', 'js/app.js')
    .postCss('src/css/app.css', 'css/app.css', [require('tailwindcss')])
    .setPublicPath('assets');
