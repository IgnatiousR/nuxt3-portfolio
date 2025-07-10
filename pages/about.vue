<script setup>
// useHead({
//     title: 'About'
// })
const { data: about } = await useAsyncData(() => queryCollection('content').path('/about').first())
</script>

<template>
    <article class="prose dark:prose-invert md:mx-20 ">
        <ContentRenderer v-if="about" :value="about"/>
        <div v-else>Something went wrong.</div>
    </article>
</template>