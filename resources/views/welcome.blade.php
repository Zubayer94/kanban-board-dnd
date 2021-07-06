<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Kanban board</title>
    {{-- <link rel="shortcut icon" type="image/x-icon" href="{{ asset('img/logo/edusms_favicon.png') }}" /> --}}
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Font Awesome -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="stylesheet" href="{{ asset('css/app.css') }}" >
    <script src="{{ asset('js/app.js') }}" defer ></script>
  
</head>
<body>
    <div id="app"></div>
</body>
</html>