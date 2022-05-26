<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Models\User;
use DB;
class ResetPasswordEmail extends Mailable
{
    use Queueable, SerializesModels;
    
    protected $email, $reset_token;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($email,$reset_token)
    {
        $this->email = $email;
        $this->reset_token = $reset_token;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $email = $this->email; 
        $reset_token = $this->reset_token; 

        $store_reset_token = DB::table('users')->where('email', $email)
                            ->update(['reset_token' => $reset_token]);

        return $this->view('email.reset_pass_mail', compact('email','reset_token'));  
    }
}
