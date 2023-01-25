<template>
  <div class="space-y-6">
    <h1 class="font-bold text-xl">Create new update</h1>

    <div class="">
      <form class="grid gap-10 grid-cols-1 lg:grid-cols-5" @submit="handleSubmit">
        <!-- UPDATE -->
        <div class="space-y-4 col-span-1 lg:col-span-3">
          <div class="w-full space-y-2">
            <input
              class="py-4 border-b border-b-black/10 w-full text-xl focus:border-b-black
              transition outline-none"
              type="text"
              placeholder="Add title"
              v-model="title"
              name="title"
              required
            >
            <p class="text-xs text-neutral-800 font-medium">Title</p>
          </div>
          
          <div class="w-full space-y-2">
            <input
              class="py-4 border-b border-b-black/10 w-full focus:border-b-black
              transition outline-none"
              type="text"
              placeholder="Add description"
              v-model="description"
              name="description"
              required
            >
            <p class="text-xs text-neutral-800 font-medium">Description</p>
            
          </div>
          
          <div class="w-full space-y-2">
            <input
              class="py-4 border-b border-b-black/10 w-full focus:border-b-black
              transition outline-none"
              type="text"
              placeholder="Add tag"
              v-model="tag"
            >
            <p class="text-xs text-neutral-800 font-medium">Tag</p>
          </div>

          <div class="w-full space-y-2">
            <!-- <client-only>
              <editor v-model="content" />
            </client-only> -->

            <textarea
              class="w-full py-4 border-b border-b-black/10 focus:border-b-black
              transition outline-none"
              placeholder="Write away..."
              v-model="content"
              rows="5"
            ></textarea>
            <p class="text-xs text-neutral-800 font-medium">Content</p>
          </div>
          
          <div class="w-full space-y-2">
            <input id="imageUpload" type="file" @change="input_file=$event.target.files[0]"/>
            <p class="text-xs text-neutral-800 font-medium">Image</p>
          </div>

        </div>

        <!-- CREDENTIALS -->
        <div class="col-span-1 lg:col-span-2 bg-neutral-100 p-6 rounded-xl
        space-y-4 h-max lg:sticky lg:top-20">
          <h3 class="font-semibold">Add Credentials</h3>

          <div class="pb-4 space-y-2">
            <div class="w-full space-y-2">
              <input
                class="py-2 border-b border-b-black/10 w-full focus:border-b-black
                transition outline-none bg-transparent text-sm"
                type="text"
                placeholder="Enter username"
                v-model="username"
                name="username"
                required
              >
              <p class="text-xs text-neutral-800 font-medium">Username</p>
              
            </div>
            
            <div class="w-full space-y-2">
              <input
                class="py-2 border-b border-b-black/10 w-full focus:border-b-black
                transition outline-none bg-transparent text-sm"
                type="password"
                placeholder="Enter password"
                v-model="password"
                name="password"
                required
              >
              <p class="text-xs text-neutral-800 font-medium">Password</p>
              
            </div>
          </div>
        </div>

        <!-- CONTROLS -->
        <div class="">
          <button type="submit" class="px-6 py-3 rounded-full flex items-center justify-center bg-black text-white
          capitalize text-xs font-medium gap-3">
            <span class="text-sm">+</span>
            add update
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { presignUpload, uploadToS3 } from '~/utils/s3'

export default {
  data() {
    return {
      title: '',
      description: '',
      tag: '',
      image: '',
      markdown: '',
      username: '',
      password: '',
      content: '',
      input_file: null
    }
  },

  methods: {
    async handleSubmit(e) {
      e.preventDefault()

      // Image upload.
      if (this.input_file) {
        const fileInfo = await presignUpload({
          name: this.input_file.name,
          type: this.input_file.type
        }, this.$config.baseUrl)

        await uploadToS3(fileInfo, this.input_file)
        this.image = fileInfo.fields.key
      }

      const body = {
        title: this.title,
        description: this.description,
        tag: this.tag,
        image: this.image,
        content: this.content,
        user: this.username,
        published: new Date()
      }

      const options = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + `${Buffer(this.username + ':' + this.password).toString('base64')}`
        }
      }

      const data = await fetch(`${this.$config.baseUrl}/api/posts/create`, options)
        .then(res => res.json())
      
      if (data.key) {
        this.$router.push(`/updates/${data.key}`)
      }
    },
  }
}
</script>