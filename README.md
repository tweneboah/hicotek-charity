# hicotek-Charity
This is a project to help the poor and the needy people. Givers never lack


<%- include('./includes/header.ejs') %>
<!-- <link rel="stylesheet" href="/css/product.css"> -->

<!-- Custom styles for this template -->
<link href='css/registration.css' rel="stylesheet">
</head>

<body>
    <style>
        .bd-placeholder-img {
            font-size: 1.125rem;
            text-anchor: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        @media (min-width: 768px) {
            .bd-placeholder-img-lg {
                font-size: 3.5rem;
            }
        }
    </style>
    <main>
        <h1>Register Form</h1>
        <form action="/register" method="POST">



            <% if (errorMessage) { %>
            <div class="user-message user-message--error"><%= errorMessage %></div>
            <% } %>


            </h2>
            <div>
                <h1>

                </h1>

                <input placeholder="username" name="username" value="<%=oldInput.username%>" />
            </div>

            <div>


                <input placeholder="Firstname" name="firstname" value="<%=oldInput.firstname%>" />
            </div>


            <div>
                <input placeholder="lastname" name="lastname" value="<%=oldInput.lastname%>" />
            </div>

            <div>
                <input placeholder="Email" name="email" value="<%=oldInput.email%>" />
            </div>


            <div>
                <input placeholder="country" name="country" value="<%=oldInput.country%>" />
            </div>


            <div>
                <input placeholder="Password" name="password" />
            </div>

            <button type="submit">Register</button>

        </form>



       
    </main>
    <%- include('./includes/footer.ejs') %>











    //login

    <%- include('./includes/header.ejs') %>
<!-- <link rel="stylesheet" href="/css/product.css"> -->
</head>

<body>

    <main>
        <h1>Login</h1>
        <%=errorMessage%>
        <form action="/login" method="POST">
            <div>
                <input placeholder="username" name="username" />
            </div>
            <div>
                <input placeholder="Password" name="password" />
            </div>

            <button type="submit">Loin</button>

        </form>
    </main>
    <%- include('./includes/footer.ejs') %>



//home

<%- include('./includes/header.ejs') %>
<!-- <link rel="stylesheet" href="/css/product.css"> -->
</head>

<body>

    <main>
        <h1>Welcome to ....Charity</h1>
    </main>
    <%- include('./includes/footer.ejs') %>



    //header
    <!-- <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Bootstrap CSS -->
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/floating-labels/"> -->



    <title>Hello, world!</title>
    <title>Hicotek Charity </title>


    <h3>Welcome to Hicotek-Charity</h3>

    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/register">Register</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/login">Login</a></li>

    </ul> -->



