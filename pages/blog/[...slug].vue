<script setup>
const route = useRoute()
// console.log(route.params.slug)
// const fooPost = await queryCollection('blog').path('/blog/first').first()
const slug = useRoute().params.slug
console.log(slug)
console.log("route: ",route.path)
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first()
})

const { data: p } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).all()
})

const fooPost = await queryCollection('blog').all()

console.log("FOo: ",fooPost)
console.log("Data: ",post)
console.log("P: ",p)
// const fooPost = await queryCollection('blog').path('/blog/first').first()
// console.log("Test: ",fooPost)
</script>


<template>
    <!-- <div>We are in a blog.</div>
    <div>The post id is {{route.params.id}}.</div> -->
    <ContentRenderer v-if="post" :value="post"/>
    <div v-else>Hello</div>
    <!-- <ContentRenderer :value="post" /> -->
</template>