<script setup>
//const slug = useRoute().params.slug
const route = useRoute()
// const firstPost = await queryCollection('blog').path('/blog/first').first()
// console.log("FIrst: ",firstPost)
// const { data: post } = await useAsyncData(`blog-${slug}`, () => {
//   return queryCollection('blog').path(`/blog/${slug}`).first()
// })

const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

</script>


<template>
  <article class="prose dark:prose-invert">
    <ContentRenderer v-if="post" :value="post"/>
    <div v-else>Hello</div>
  </article>
</template>