<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

/**
 * AuthController
 */
class AuthController extends Controller
{    
    /**
     * signup
     *
     * @param  mixed $request
     * @return void
     */
    public function signup(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
            'password_confirmation' => 'required|same:password'
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        return response()->json(['success' => true, 'message' => 'User successfully registered. Now you may login to the system.']);
    }
    
    /**
     * login
     *
     * @param  mixed $request
     * @return void
     */
    public function login(Request $request)
    {
        if (!$token = auth('apiUser')->attempt($request->only('email', 'password'))) {
            return response(['success' => false, 'message' => 'Unauthorized']);
        }

        return response()->json([
            'success' => true,
            'accessToken' => $token,
            'userData' => auth('apiUser')->user()
        ]);
    }
}
