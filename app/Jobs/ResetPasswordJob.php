<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Mail\ResetPasswordEmail;
use Mail;

class ResetPasswordJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $email,$reset_token;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($email,$reset_token)
    {
        $this->email = $email;
        $this->reset_token = $reset_token;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $email = new ResetPasswordEmail($this->email,$this->reset_token); 
        Mail::to($this->email)->send($email); 
    }
}
