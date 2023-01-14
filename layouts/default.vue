<template>
  <div>
    <Navbar />

    <div class="py-20 px-6 xl:px-0 lg:max-w-screen-lg mx-auto">
      <Nuxt />
    </div>
  </div>
</template>

<script>
  import Navbar from '~/components/layout/Navbar.vue';

  export default {
    components: {
      Navbar
    }
  }
</script>