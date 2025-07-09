<script setup>
const {error, pending, data} = await useFetch('https://api.github.com/users/IgnatiousR/repos')
const repos = computed(
  () => data.value.filter(repo => repo.description)
)

</script>

<template>
    <p class="mb-10">Github projects.</p>

    <section v-if="pending">Loading...</section>
    <section v-if="error">Something went wrong...Try again.</section>
    <section v-else>
        <ul class="grid grid-cols-1 gap-4">
            <li v-for="repository in repos" :key="repository.id"
            class="border border-neutral-200 rounded-sm p-4 hover:bg-neutral-300 dark:hover:bg-neutral-600">
                <a :href="repository.html_url" target="_blank">
                    <div class="flex items-center justify-between text-sm">
                        <div class="font-semibold">{{ repository.name }}</div>
                        <div class="hidden">{{ repository.stargazers_count }}</div>
                    </div>
                    <p class="text-sm">{{ repository.description }}</p>
                </a>
            </li>
        </ul>
    </section>
</template>