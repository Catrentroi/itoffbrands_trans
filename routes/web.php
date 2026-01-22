<?php

use Illuminate\Support\Facades\Route;


use App\Http\Controllers\HomeController;

// Route::get('/', [HomeController::class, 'index']);
Route::get('/', function () {
    return view('home');
});

Route::view('/about', 'about');
Route::view('/contact', 'contact');
