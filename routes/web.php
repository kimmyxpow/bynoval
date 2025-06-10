<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('hi');
})->name('home');

Route::get('/projects', function () {

    $filters = [
        'categories' => request('categories', []),
        'tags' => request('tags', []),
        'search' => request('search', ''),
    ];

    return Inertia::render('projects/index', [
        'filters' => fn() => $filters,
    ]);
})->name('projects.index');
