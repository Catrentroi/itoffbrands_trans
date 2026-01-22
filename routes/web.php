<?php

use Illuminate\Support\Facades\Route;


use App\Http\Controllers\HomeController;

Route::get('/', function () {
    return view('pages.home');
});

Route::view('/about', 'pages.about');
Route::view('/contact', 'pages.contact');
