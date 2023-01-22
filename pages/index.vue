<template>
  <div class="space-y-6">
    <div class="">
      <h1 class="font-bold text-xl">Updates</h1>
    </div>

    <div v-if="loading">Loading...</div>
    <div v-else class="space-y-4">
      <div v-for="update of updates" :key="update.key" class="border-b pb-4 border-black/10">
        <div class="flex items-center justify-between">
          <nuxt-link :to="`updates/edit/${update.key}`">
            <div class="space-y-1">
              <h3 class="text-lg font-semibold">{{ update.props.title }}</h3>
  
              <p class="text-sky-500 text-xs font-medium">
                {{ new Date(update.props.created).toDateString() }}
              </p>
            </div>

          </nuxt-link>

          <button v-on:click="() => handleDelete(update.key)" class="text-xs">
            Delete
          </button>
        </div>

        <nuxt-link class="text-xs capitalize" :to="`updates/${update.key}`">view</nuxt-link>
      </div>

      <div class="" v-if="updates.length === 0">No updates to show.</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  // async asyncData({ $config: { baseUrl } }) {
  //   const data = await fetch(`${baseUrl}/api/posts`)
  //     .then(res => res.json())

  //   return {
  //     updates: data
  //   }
  // },
  // meta: {
  //   cache: {
  //     revalidate: true
  //   }
  // },
  async created() {
    this.loading = true
    const data = await fetch(`${this.$config.baseUrl}/api/posts`)
      .then(res => res.json())

    this.updates = data
    this.loading = false
  },

  data() {
    return {
      loading: false,
      updates: []
    }
  },

  methods: {
    async handleDelete(key) {
      const username = prompt('Username')
      const password = prompt('Password')

      const options = {
        method: 'DELETE',
        headers: {
          'Authorization': `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`
        }
      }

      const data = await fetch(`${this.$config.baseUrl}/api/posts/delete/${key}`, options)
        .then(res => res.json())
      
      console.log(data)
    }
  }

}
</script>
