<!DOCTYPE>
<html lang="en">
<head>
    <!-- Bootstrap below -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    <!--My CSS and JavaScript below-->
    <!--<link rel="stylesheet" href="C:\Users\srizv\OneDrive\Documents\My Portfolio\CSS Files\Styles.css">
    <script src="C:\Users\srizv\OneDrive\Documents\My Portfolio\JavaScript Files\MyScript.js"></script>-->
    <!--My CSS and JavaScript below-->
    <link rel="stylesheet" href="../CSSFiles/Styles.css">
    <script src="../JavaScriptFiles/MyScript.js"></script>

    <title>Sameer Rizvi &mdash; Send</title>
</head>

<body>
    <div class="Menu"></div>
    <script>
        var extension = ".php";
        var links = new Array("Home" + extension, "Resume" + extension, "About"  + extension);
        CreateMenu(links,extension);
    </script>
    <div id="Intro" class="jumbotron">
        <!--<h1>Inquiries</h1>-->
        <!--<p>For Inquiries: <a href = "mailto: srizv82@gmail.com">srizv82@gmail.com</a></p>-->
    </div>
    
    <hr> <!--this is a horizontal line-->

    <center>
        <?php
        $to      = 'srizv82@gmail.com';
        $subject = 'the subject';
        $message = 'hello';
        $headers = 'From: webmaster@example.com' . "\r\n" .
            'Reply-To: webmaster@example.com' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();
            ini_set("SMTP", "localhost");
            ini_set("smtp_port", "25");
        mail($to, $subject, $message, $headers);
        ?>
    </center>   
</body>
<footer>
    <hr>
    <p>Copyright © 2021 Sameer Rizvi</p>
</footer>
</html>