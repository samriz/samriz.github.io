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

    <title>Sameer Rizvi &mdash; Resume</title>
</head>

<body>
    <div class="Menu"></div>
    <script>
        var extension = ".php";
        var links = new Array("Home" + extension, "Resume" + extension, "About"  + extension);
        CreateMenu(links,extension);
    </script>
    <div class="PDF">
        <!--<iframe src="C:\Users\srizv\OneDrive\Documents\My Portfolio\Miscellaneous\Sameer Rizvi - Resume.pdf" width="100%" height="100%"></iframe>-->
        <iframe src="../Miscellaneous/Sameer Rizvi - Resume.pdf" width="100%" height="100%"></iframe>
    </div>
</body>
</html>