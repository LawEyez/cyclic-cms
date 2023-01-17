<template>
  <div class="space-y-6">
    <div class="">
      <h1 class="font-bold text-xl">Updates</h1>
    </div>

    <div class="space-y-4">
      <div v-for="update of updates" :key="update.key" class="border-b pb-4 border-black/10">
        <nuxt-link :to="`updates/edit/${update.key}`">
          <div class="space-y-1">
            <h3 class="text-lg font-semibold">{{ update.props.title }}</h3>

            <p class="text-sky-500 text-xs font-medium">
              {{ new Date(update.props.created).toDateString() }}
            </p>
          </div>
          <nuxt-link class="text-xs capitalize" :to="`updates/${update.key}`">view</nuxt-link>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  async asyncData({ $config: { baseUrl } }) {
    const data = await fetch(`${baseUrl}/api/posts`)
      .then(res => res.json())

    return {
      updates: data
    }
  }
}
</script>
