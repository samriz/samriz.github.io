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

    <title>Sameer Rizvi &mdash; Home</title>
</head>

<body>
    <div class="Menu"></div>
    <script>
        var extension = ".php";
        var links = new Array("Home" + extension, "Resume" + extension, "About"  + extension);
        CreateMenu(links,extension);
    </script>
    <!--<div class="Menu">
        <a class="active" href="#">Home</a>
        <a href="Resume.html">Resume</a>
        <a href="AboutMe.html">About</a>
    </div>-->

    <div id="Intro" class="jumbotron">
        <h1>Sameer Rizvi</h1>
        <!--<p><img src="C:\Users\srizv\OneDrive\Documents\My Portfolio\Pictures\LinkedInPicture1.png" id="ProfilePic" class="center"></p>-->
    </div>
    <hr>

    <div id="ExternalLinks">
        <h3>Relevant External Links:</h3>
        <ul>
            <!--<li><a href="Resume.html">Resume</a></li>-->
            <li><a href="https://www.linkedin.com/in/sameer-rizvi-bb788375" target="_blank">LinkedIn</a></li>
            <li><a href="https://github.com/samriz" target="_blank">GitHub</a></li>
            <!--<li><a href="AboutMe.html">About Me</a></li>-->
        </ul>      
    </div>
    
    <!--<div id="CodeSamples">
        <h3>My Code Samples:</h3>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>      
    </div>-->

</body>
</html>