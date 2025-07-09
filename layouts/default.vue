<template>
    <div class="container mx-auto my-2 px-2 font-bai">
        <header class="flex justify-between items-center">
            <div class="flex items-center space-x-20">
                <div><NuxtLink to="/" class="text-xl font-semibold p-1 hover:bg-neutral-200 dark:hover:bg-neutral-600">User</NuxtLink></div>
                <NavMenu />
            </div>
            <ClientOnly><ColorModeSelector/> </ClientOnly>
        </header>
        <main class="p-2 mt-10">
            <slot />
        </main>
    </div>
</template>