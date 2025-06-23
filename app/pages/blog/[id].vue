<template>
    <div>We are in a blog.</div>
    <div>The post id is {{route.params.id}}.</div>
</template>

<script setup>
const route = useRoute()
// console.log(route)
</script>