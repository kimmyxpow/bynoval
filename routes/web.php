<?php

use Illuminate\Support\Facades\Http;
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

Route::get('/articles', function () {
    $filters = [
        'categories' => request('categories', []),
        'tags' => request('tags', []),
        'search' => request('search', ''),
    ];

    return Inertia::render('articles/index', [
        'filters' => fn() => $filters,
    ]);
})->name('articles.index');

Route::get('/snippets', function () {
    $filters = [
        'search' => request('search', ''),
    ];

    return Inertia::render('snippets/index', [
        'filters' => fn() => $filters,
    ]);
})->name('snippets.index');

Route::get('/guest-book', function () {
    return Inertia::render('guest-book/index');
})->name('guest-book.index');

Route::get('/about', function () {
    $commitResponse = Http::get('https://api.github.com/repos/kimmyxpow/bynoval/commits', [
        'per_page' => 10
    ]);
    $commits = $commitResponse->json();

    return Inertia::render('about/index', [
        'commits' => $commits
    ]);
})->name('about.index');

Route::get('/goals', function () {
    return Inertia::render('goals/index');
})->name('about.index');
