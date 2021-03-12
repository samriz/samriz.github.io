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

    <title>Sameer Rizvi &mdash; About</title>
</head>

<body>
    <div class="Menu"></div>
    <script>
        var extension = ".php";
        var links = new Array("Home" + extension, "Resume" + extension, "About"  + extension);
        CreateMenu(links,extension);
    </script>
    <div id="Intro" class="jumbotron">
        <h1>Sameer Rizvi</h1>
        <p>
            <!--<img src="C:\Users\srizv\OneDrive\Documents\My Portfolio\Pictures\LinkedInPicture1.png" id="ProfilePic" class="center">-->
            <img src="../Pictures/LinkedInPicture1.png" id="ProfilePic" class="center">
        </p>
        <!--<p>For Inquiries: <a href = "mailto: srizv82@gmail.com">srizv82@gmail.com</a></p>-->
        <a href = "./Message.php">For Inquiries</a>
    </div>
    
    <hr> <!--this is a horizontal line-->

    <h3><a name="Education"></a>Education</h3>
    <center><table cellspacing="5" cellpadding="5" width="90%" border="0">
    <tbody>
        <tr valign="TOP">
        <td>
            Mid &mdash; Late 2021 (Expected Completion):
        </td> 
        <td>
            Syracuse University &mdash; Syracuse, NY
            <br>              
            M.S. in Computer Science, 
            <br>
        <ul>
        </ul>
        </td>
        </tr>

    <tr valign="TOP">
        <td>
        2015:</td> 
        <td>
            Loyola University Chicago &mdash; Chicago, IL 
            <br>              
            B.S. in Computer Science, Cum Laude
            <br>      
    <ul>
    </ul>
    </td> 
    </tr>
    </tbody></table></center>

    <h3><a name="Employment"></a>Professional Experience</h3>
    <center><table cellspacing="5" cellpadding="5" width="90%" border="0">
    <tbody>
        <tr valign="TOP">
        <td>
        2018:
        </td> 
        <td>
            American Hotel Register Company &mdash; Vernon Hills, IL <br>              
            Junior Software Developer
            <br>     
        <ul>
            <li>Utilized C#/.NET for development and maintenance on e-commerce website</li>
            <li>Assisted with the entire lifecycle of analysis &mdash; design, coding, testing, implementation and product support</li>
            <li>Implemented all aspects of application design &mdash; high performance design, coding, caching mechanisms, security, encryption, state management, error logging, debugging, code reviews, development environment configuration, and testing</li>
        </ul>
        </td>
        </tr>

    <tr valign="TOP">
        <td>
        2016-2018:
    </td> 
        <td>
            ACS Group &mdash; New Berlin, WI 
            <br>              
            Information Systems Specialist
            <br>      
    <ul>
        <li>Constructed a separate <q>Configurator</q> &mdash; an application that allows Sales and Engineering to configure any product offered by the company, generate quotes and sales orders - for each product offered by the company </li>
        <li>Tested inside of Microsoft Dynamics which is the platform used to launch the <q>Configurator</q>, while providing Microsoft Dynamics training to end users </li>
        <li>Interacted, introduced, and reviewed requirements with Sales, Engineering and Production departments to ensure proper solution is delivered in a timely manner</li>
    </ul>
    </td> 
    </tr>

    <tr valign="TOP">
        <td>
        2014-2015:</td> 
        <td>
            Parker Hannifin Corporation &mdash; Lincolnshire, IL 
            <br>              
            Software Development Intern
            <br>      
    <ul>
        <li>Built ASP.NET webforms application (C# for backend) for a Microsoft SQL Server database</li>
        <li>Hosted web application on Windows Server 2012 via IIS</li>
        <li>Designed barcode labels using Zebra Designer Pro software</li>
        <li>Answered help desk tickets and addressed any technical employee concerns related to software and/or hardware</li>
    </ul>
    </td> 
    </tr>

    <tr valign="TOP">
        <td>
        2014:</td> 
        <td>
            Northwestern Mutual &mdash; Milwaukee, WI 
            <br>              
            I.T. Intern
            <br>      
    <ul>
        <li>Developed interactive reports using Cognos Report Studio and tested them for format and/or data defects </li>
        <li>Learned SQL in order to write queries via Rapid SQL and facilitated in debugging and fixing C# code that caused an application to crash</li>
        <li>Used various Microsoft Office applications to collaborate and complete tasks </li>
    </ul>
    </td> 
    </tr>
    </tbody></table></center>   
</body>
</html>