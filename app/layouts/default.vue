<script setup>
useHead({
    titleTemplate: '%s - Portfolio Site',
    link: [
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap',
            crossorigin: ''
        }
    ]
})
</script>

<style>
body {
    font-family: 'Bai Jamjuree';
}
</style>

<template>
    <div class="container mx-auto my-2 px-2">
        <header class="flex justify-between items-center">
            <div><NuxtLink to="/" class="text-xl font-semibold p-1 hover:bg-neutral-200">User</NuxtLink></div>
            <Menu />
        </header>
        <main class="p-2 mt-10">
            <slot />
        </main>
    </div>
</template>