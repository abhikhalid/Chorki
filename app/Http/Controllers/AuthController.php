<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\User; 
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegistrationForm;

use App\Jobs\VerifyEmailJob;
use App\Jobs\ResetPasswordJob;
use Redirect; 

use Illuminate\Http\Request;

use DB;
class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','register','emailVerify',
        'forgotPassword','resetPassword','resetPasswordRedirect']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */


    public function register(RegistrationForm $request){

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        // $user->user_type = $request->user_type;
        $insert = $user->save();

        $credentials = $request->only('email', 'password');
        $token = JWTAuth::attempt($credentials);
        $data = ['access_token' => $token, 'user' => Auth::user()];

        #send verification link via email
        $verify_token = uniqid();

        $details['email'] = $request->email; 
        $details['verify_token'] = $verify_token;

        $store_verify_token = User::where('email', $request->email)
                            ->update(['verify_token' => $verify_token]);

        dispatch(new VerifyEmailJob($details)); //mail send koresi

        return response()->json([
            'status'=>200,
            'access_token'=>$token,
            'user'=>Auth::user(),
            'message'=>'Registration success!',
        ]);
        
        //return $this->apiResponse('A mail verification link is sended!', $data, Response::HTTP_OK, true);
    }

    public function emailVerify($email,$verify_token){

        #Now check given token and verify token is same or not

        $get_user = User::where('email', $email)->first();

        if($get_user->verify_token == $verify_token){

            $email_verified_at = date("Y-m-d H:i:s"); 

            $update_user = User::where('email', $email)
                            ->update(['email_verified_at' => $email_verified_at]);

            return Redirect::to('http://localhost:3001');

        }else{
            return response()->json(['message' => 'Verify token not match!']);
        }
    }



    public function login()
    {
        $credentials = request(['email', 'password']);

        // if (! $token = auth()->attempt($credentials)) {
        //     return response()->json(['error' => 'Unauthorized'], 401);
        // }

        if (! $token = auth()->attempt($credentials)) {
            return response()->json([
                'status'=>401,
                'message'=>'Email or password wrong',
            ]);

            //return response()->json(['error' => 'username or password wrong!'], 401);
        }
        else
        {
            return response()->json([
                'status'=>200,
                'access_token'=>$token,
                
                'message'=>'Login successful!',
            ]);
        }

        // return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }

    public function forgotPassword(Request $request){



        $find_user = DB::table('users')->where('email',$request->email)->first();

        // return response()->json(['email:'=>$request->email,'token'=>$reset_token]); 

        if($find_user){

            $reset_token = uniqid(); 

            // return response()->json(['email:'=>$request->email,'token'=>$reset_token]); 

            dispatch(new ResetPasswordJob($request->email,$reset_token)); 

            return response()->json([
                'status'=>200,
                'message'=>'Reset link send! Check your email',
            ]);
        }else{
            return response()->json([
                'status'=>500,
                'message'=>'Email not found',
            ]);
        }

    }

    public function resetPassword(Request $request){

        $find_user = User::where('email',$request->email)->first();

        if($find_user){

            if($find_user->reset_token == $request->reset_token){

                    $reset_password = User::where('email', $request->email)
                                    ->update(['password' => bcrypt($request->new_password)]); 

                                    return response()->json([
                                        'status'=>200,
                                        'message'=>'Password reset successfully',
                                        'new password'=>$request->new_password,
                                    ]);
                
            }else{
                return response()->json([
                    'status'=>500,
                    'message'=>'Reset token not match',
                ]);
            }
        }else{
            return response()->json([
                'status'=>500,
                'message'=>'Email not found',
            ]);
        }                  

    }

    public function resetPasswordRedirect($email,$reset_token){


        $user = User::where('email', $email)->first();

        if($user){

            if($user->reset_token==null){
                return response()->json(['message' => 'Token not valid!']);
            }

            if($user->reset_token == $reset_token){
        
                return Redirect::to('http://localhost:3000/reset-password-'.$email.'-'.$reset_token);  
            
            }else{
                
                return response()->json(['message' => 'Verify token not match!']);
            }
        }else{
            return response()->json(['message' => 'Email not found!']);
        }
    }


    



}