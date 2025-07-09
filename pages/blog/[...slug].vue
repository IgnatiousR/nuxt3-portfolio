<script setup>
const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first()
})

</script>


<template>
  <article class="prose dark:prose-invert">
    <ContentRenderer v-if="post" :value="post"/>
    <div v-else>Hello</div>
  </article>
</template>