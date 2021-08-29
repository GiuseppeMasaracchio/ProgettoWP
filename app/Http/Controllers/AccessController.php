<?php

use Illuminate\Routing\Controller as BaseController;

class AccessController extends BaseController {

    public function accessMode() {
        $mode = request('_mode');
        if($mode == 'Login') {
            //Validazione login
            $res = User::where('username', request('l_user'))->first();
            if (isset($res) && Hash::check(request('l_pass'), $res->password)) {
                Session::put('user_id', $res->id);
                return redirect('home');
            } else {
                return view('login')
                    ->with('csrf_token', csrf_token())
                    ->with('login_error', 'true');
            }
        } else {
            //Validazione signup
            User::create(array('username' => request('s_user'), 'password' => BCRYPT(request('s_pass')), 'email' => request('s_email')));
            return redirect('login');
        }
    }

    public function mainPage() {
        if (session('user_id') != NULL) {
            return redirect('home');
        } else {
            return view('login')
            ->with('csrf_token', csrf_token());
        }
    }

    public function logout() {
        Session::flush();
        return redirect('login');
    }

    public function checkUser($user) {
        $res = User::where('username', $user)->exists();
        return ['exists' => $res];
    }

    public function checkEmail($email) {
        $res = User::where('email', $email)->exists();
        return ['exists' => $res];
    }
}
