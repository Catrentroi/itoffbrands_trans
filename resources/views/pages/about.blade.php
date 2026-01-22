<x-layout title ="About Us">
    <h1>About Us</h1>
    <p>This is the about page of our application.</p>
    <p><a href="/">Return Home</a></p>
</x-layout>

<x-idea-card href="{{ route('idea.show', $idea) }}">
    <h2 class="font-semibold text-xl mb-2">{{ $idea->title }}</h2>
    <p class="text-gray-700">{{ $idea->description }}</p>

</x-idea-card>
