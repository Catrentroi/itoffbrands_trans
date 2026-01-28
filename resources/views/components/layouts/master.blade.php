<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OffBrand</title>
    @vite(['resources/css/style.css', 'resources/js/app.js'])

</head>

<body>

    @include('components.layouts.header', ['title' => isset($title) ? $title : 'Offbrand'])
    @yield('content')
    @include('components.layouts.footer')

</body>

</html>
