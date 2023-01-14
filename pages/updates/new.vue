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

          <div class="w-full">
            <textarea id="editor"></textarea>
          </div>
        </div>

        <!-- CREDENTIALS -->
        <div class="col-span-1 lg:col-span-2 bg-neutral-100 p-6 rounded-xl
        space-y-4 h-max sticky top-16">
          <h3 class="font-semibold">Add Credentials</h3>

          <div class="pb-4 space-y-2">
            <div class="w-full space-y-2">
              <input
                class="py-2 border-b border-b-black/10 w-full focus:border-b-black
                transition outline-none bg-transparent text-sm"
                type="text"
                placeholder="Enter username"
                v-model="username"
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
// import EasyMDE from 'easymde'

// const easyMDE = new EasyMDE({element: document.getElementById('editor')});

export default {
  data() {
    return {
      title: '',
      description: '',
      tag: '',
      image: '',
      markdown: '',
      username: '',
      password: ''
    }
  },

  methods: {
    async handleSubmit(e) {
      e.preventDefault()

      const body = {
        title: this.title,
        description: this.description,
        tag: this.tag,
        image: this.image,
        markdown: this.markdown,
        username: this.username,
        password: this.password
      }

      console.log(body)

      // const options = {
      //   method: 'POST',
      //   body: JSON.stringify(body),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // }

      // const data = await fetch('http://localhost:8000/api/posts/create', options)
    }
  }
}
</script>