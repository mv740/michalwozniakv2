<?php

    $post_date = file_get_contents('php://input');
    //error_log($post_date);
    $data = json_decode($post_date);

    //error_log(($data->name));

    $valid = FALSE;

    if (!empty($data->name) || !empty($data->email) || !empty($data->message)) {
        $name = $data->name;
        $email = $data->email;
        $message = $data->message;

	//error_log($name);
	//error_log($email);
	//error_log($message);


        $valid = TRUE;
    };

    $pattern = "/^[A-Z0-9._-]+@[A-Z0-9.-]+\\.[A-Z0-9.-]+$/i";
    if ($valid) {
        if(preg_match($pattern, $email))
        {


            $from = 'From: michalwozniak.ca';
            $to = 'michalwozniak@live.ca';
            $subject = 'Email Inquiry';

            $body = "From: $name\n E-mail: $email\n Message:\n\n $message";

            //send email
            mail($to, $subject, $body, $from);
            return FALSE;
        }
    }
