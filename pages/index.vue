<template>
    <div>
        <ContentRenderer v-if="home" :value="home"/>
        <div v-else>Index Page</div>
    </div>
</template>

<script setup>
import { ContentRenderer } from '#components'

const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())
console.log(home)

useSeoMeta({
  title: 'Main page',
  description: 'Main Page',
  ogTitle: 'Main Page',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>