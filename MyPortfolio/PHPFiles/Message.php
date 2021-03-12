<!DOCTYPE>
<html lang="en">
<head>
    <!-- Bootstrap below -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    <!--React-->
    <script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>

    <!--My CSS and JavaScript below-->
    <link rel="stylesheet" href="../CSSFiles/Styles.css">
    <script src="../JavaScriptFiles/MyScript.js"></script>
    <script src="../JavaScriptFiles/SendMail.js"></script>

    <title>Sameer Rizvi &mdash; Inquiry</title>
</head>

<body>
    <div class="Menu"></div>
    <script>
        var extension = ".php";
        var links = new Array("Home" + extension, "Resume" + extension, "About"  + extension);
        CreateMenu(links,extension);
    </script>
    <div id="Intro" class="jumbotron">
        <h1>Inquiries</h1>
        <!--<p>For Inquiries: <a href = "mailto: srizv82@gmail.com">srizv82@gmail.com</a></p>-->
    </div>
    
    <hr> <!--this is a horizontal line-->

    <center>
        <form action="../JavaScriptFiles/SendMail.js" method="post">
            <p>Name: <input type="text" name="name" /></p>
            <p>Email: <input type="text" name="email" /></p>
            <p>Subject: <input type="text" name="subject" /></p>
            <p>Message: <textarea type="text" name="message"></textarea></p>
            <p><input type="submit" onclick="mailfunction"/></p>
        </form>
    </center>


    <p id="mailmessage"></p>
</body>
</html>