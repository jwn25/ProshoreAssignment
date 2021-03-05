<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\NewsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/user-signup', [AuthController::class, 'signup']);
Route::post('/user-login', [AuthController::class, 'login']);
Route::get('/news-likes', [NewsController::class, 'getNewsLikes']);

Route::middleware('auth:apiUser')->group(function () {
    Route::post('/news/action', [NewsController::class, 'postAction']);
});