<template>
  <div class="">
    <div v-if="loading">Loading...</div>
    <div v-else class="space-y-6">
      <div class="pb-4 border-b border-neutral-200 space-y-2">
        <h1 class="text-xl font-bold">{{ update.props.title }}</h1>
        <p class="text-sky-500 text-xs font-medium">
              {{ new Date(update.props.created).toDateString() }}
            </p>
      </div>
      <div v-html="$md.render(update.props.content)" class="prose"></div>
      <!-- <nuxt-content :document="update.props.content" class="prose"></nuxt-content> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      update: {},
      loading: false
    }
  },

  async created() {
    this.loading = true
    const data = await fetch(`${this.$config.baseUrl}/api/posts/get/${this.$route.params.key}`).then(res => res.json())

    if (data.key) {
      this.update = data
    }
    
    this.loading = false
  }
}
</script>