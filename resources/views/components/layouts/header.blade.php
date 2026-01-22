@props(['title' => 'Offbrand'])
<header class="header">
    <h1>{{ $title }}</h1>
    <nav class="header-nav">
        <a href="{{ url('/') }}">Home</a>
        <a href="{{ url('/about') }}">About</a>
        <a href="{{ url('/contact') }}">Contact</a>
    </nav>
</header>
