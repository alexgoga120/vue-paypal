<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>
    <link href="/css/app.css" rel="stylesheet">
</head>
<body class="antialiased">
<div id="app">

</div>
<script src="{{"https://www.paypal.com/sdk/js?client-id=".env("PAYPAL_CLIENT_ID")."&components=buttons"}}"></script>
<script src="{{ mix('/js/app.js') }}"></script>
</body>
</html>
