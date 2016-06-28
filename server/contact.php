<?php

    if (!empty($_REQUEST['name']) || !empty($_REQUEST['email']) || !empty($_REQUEST['message'])) {
        $name = $_REQUEST['name'];
        $email = $_REQUEST['email'];
        $message = $_REQUEST['message'];


    };

    $pattern = "/^[A-Z0-9._-]+@[A-Z0-9.-]+\\.[A-Z0-9.-]+$/i";
    if(preg_match($pattern, $email))
    {


        $from = 'From: michalwozniak.ca';
        $to = 'michalwozniak@live.ca';
        $subject = 'Email Inquiry';

        $body = "From: $name\n E-mail: $email\n Message:\n $message";

        //send email
        mail($to, $subject, $body, $from);
        return FALSE;
    }


//        $pattern = '/^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z0-9.-]+$/i/';
//        preg_match($pattern, $email, $matches);
//
//


