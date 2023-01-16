<template>
  <div>
    <Navbar />

    <div class="py-20 px-6 xl:px-0 lg:max-w-screen-lg mx-auto min-h-screen">
      <Nuxt />
    </div>

    <Footer />
  </div>
</template>

<script>
  import Navbar from '~/components/layout/Navbar.vue';
  import Footer from '~/components/layout/Footer.vue';

  export default {
    components: {
      Navbar,
      Footer
    }
  }
</script>