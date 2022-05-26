<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\MovieController;

use App\Http\Controllers\AuthController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// Route::post("register",[UserController::class,"register"]);

// Route::post("login",[UserController::class,"login"]);

Route::get("userList",[UserController::class,"userList"]);

Route::delete("deleteUser/{id}",[UserController::class,"deleteUser"]);

Route::post("addMovieTrendingNow",[MovieController::class,"addMovieTrendingNow"]);

Route::post("addMovieTopRated",[MovieController::class,"addMovieTopRated"]);

Route::post("addMovieRomance",[MovieController::class,"addMovieRomance"]);

Route::post("addMovieHorror",[MovieController::class,"addMovieHorror"]);

Route::post("addMovieComedy",[MovieController::class,"addMovieComedy"]);

Route::post("addMovieChorkiOriginal",[MovieController::class,"addMovieChorkiOriginal"]);

Route::post("addActionMovie",[MovieController::class,"addActionMovie"]);

// get movie


Route::get("getActionMovie",[MovieController::class,"getActionMovie"]);

Route::get("getChorkiOriginalsMovie",[MovieController::class,"getChorkiOriginalsMovie"]);

Route::get("getComdeyMovie",[MovieController::class,"getComdeyMovie"]);

Route::get("getHorrorMovie",[MovieController::class,"getHorrorMovie"]);

Route::get("getRomanceMovie",[MovieController::class,"getRomanceMovie"]);

Route::get("getTopRatedMovie",[MovieController::class,"getTopRatedMovie"]);

Route::get("getTrendingNewMovie",[MovieController::class,"getTrendingNewMovie"]);

//delete movie

Route::delete("deletegetActionMovie/{id}",[MovieController::class,"deletegetActionMovie"]);

Route::delete("deletegetChorkiOriginalsMovie/{id}",[MovieController::class,"deletegetChorkiOriginalsMovie"]);


Route::delete("deletegetComdeyMovie/{id}",[MovieController::class,"deletegetComdeyMovie"]);

Route::delete("deletegetHorrorMovie/{id}",[MovieController::class,"deletegetHorrorMovie"]);

Route::delete("deletegetRomanceMovie/{id}",[MovieController::class,"deletegetRomanceMovie"]);

Route::delete("deletegetTopRatedMovie/{id}",[MovieController::class,"deletegetTopRatedMovie"]);

Route::delete("deletegetTrendingNewMovie/{id}",[MovieController::class,"deletegetTrendingNewMovie"]);


// cutomer api starts here


Route::post("customerRegister",[UserController::class,"customerRegister"]);

Route::post("customerLogin",[UserController::class,"customerLogin"]);

Route::post("customerLogout",[UserController::class,"customerLogout"]);


// customer add to watch later list

Route::post("customeraddtowatchlaterlist",[MovieController::class,"customeraddtowatchlaterlist"]);


//customer get all watch later list (based on his/her id)


Route::get('customerviewWatchList/{id}',[MovieController::class,"customerviewWatchList"]);

// Customer delete his/her watchList

Route::delete('deleteWatchList/{id}',[MovieController::class,"deleteWatchList"]);


//Customer search movie

Route::get('search/{movieName}',[MovieController::class,"search"]);


//Admin Add Chart Data

//Admin addLineBarAreaChartData

Route::post('addLineBarAreaChartData',[UserController::class,"addLineBarAreaChartData"]);


//Admin search user from Chat List


Route::get('searchUserFromChatList/{customerName}',[UserController::class,"searchUserFromChatList"]);



Route::post("addPieChartData",[UserController::class,"addPieChartData"]);

Route::post("addScatterChartData",[UserController::class,"addScatterChartData"]);


//get chart data to display

Route::get("lineBarAreaChartDataFetch",[UserController::class,"lineBarAreaChartDataFetch"]);

Route::get("pieChartDataFetch",[UserController::class,"pieChartDataFetch"]);

Route::get("scatterChartDataFetch",[UserController::class,"scatterChartDataFetch"]);



//Customer send message for chat list data

Route::post("customerChatList",[UserController::class,"customerChatList"]);

//Customer change password

Route::post("customerChangePassword",[UserController::class,"customerChangePassword"]);




//customer chat list data  (admin dekhbe)

Route::get("getCustomerAdminChatHead",[UserController::class,"getCustomerAdminChatHead"]);


Route::post("writecustomerActiveStatus",[UserController::class,"writecustomerActiveStatus"]);


//this api is for only testing purposes
Route::get('getFakeData',[UserController::class,"getFakeData"]);


//register


Route::get('get-user',[UserController::class,"getUser"]);


Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('register', [AuthController::class,"register"]);    
    Route::post('login', [AuthController::class,"login"]);
    Route::post('logout', [AuthController::class,"logout"]);
    Route::post('refresh', [AuthController::class,"refresh"]);
    Route::post('me', [AuthController::class,"me"]);
    Route::get('email-verify-{email}-{verify_token}',[AuthController::class,"emailVerify"]);

    Route::post('forgot-password',[AuthController::class,"forgotPassword"]); 
    Route::post('reset-password',[AuthController::class,"resetPassword"]);
    Route::get('reset-password-redirect-{email}-{reset_token}',[AuthController::class,"resetPasswordRedirect"]);  

});


// Route::get('email-verify-{email}-{verify_token}','Api\AuthController@emailVerify');

// Route::get('email-verify-{email}-{verify_token}',[AuthController::class,"emailVerify"]);

// Route::post('forgot-password','Api\AuthController@forgotPassword'); 



// Route::post('forgot-password','Api\AuthController@forgotPassword'); 



// Route::post('reset-password','Api\AuthController@resetPassword'); 




// Route::get('reset-password-redirect-{email}-{reset_token}','Api\AuthController@resetPasswordRedirect'); 





