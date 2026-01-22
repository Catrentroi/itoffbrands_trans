@props([
    'year' => date('Y'),
    'brand' => 'Off+Brand®',
])

<footer class="footer">
    <div class="footer-inner">
        <p class="footer-brand">
            {{ $brand }}
        </p>

        <p class="footer-copy">
            © {{ $year }} All rights reserved.
        </p>
    </div>
</footer>
