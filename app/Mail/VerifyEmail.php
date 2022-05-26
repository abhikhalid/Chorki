<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

use Auth;

class VerifyEmail extends Mailable
{
    use Queueable, SerializesModels;

    protected $email,$verify_token;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($email,$verify_token)
    {
        $this->email = $email;
        $this->verify_token = $verify_token;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $mail = $this->email; 
        $verify_token = $this->verify_token;

        return $this->view('email.verify_mail', compact('mail','verify_token')); 
    }
}
