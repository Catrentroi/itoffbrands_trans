@extends('components.layouts.master')

@section('content')
    @include('sections.hero')
    @include('sections.services')
@endsection

@section('scripts')
    @parent
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            gsap.from(".hero-title .line span", {
                yPercent: 120,
                stagger: 0.12
            });
        });
    </script>
@endsection
