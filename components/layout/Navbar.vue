<template>
  <nav class="fixed top-0 left-0 w-full h-14 border-b border-black/10 bg-white/95
  backdrop-blur-sm">
    <div class="h-full px-6 xl:px-0 lg:max-w-screen-lg mx-auto flex items-center justify-between">
      <nuxt-link to="/" class="font-bold">cyclic</nuxt-link>

      <div class="flex items-center gap-4">
        <nuxt-link
          to="/updates/new"
          class="text-sm font-medium text-neutral-500 hover:text-black transition"
        >
          + New
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>