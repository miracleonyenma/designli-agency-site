<template>
  <main>
    <div v-if="project">
      <header class="px-4">
        <div class="cover img-cont h-full max-h-96">
          <img v-if="url" class="rounded-b-2xl" :src="url + project.cover.formats.large.url" alt="" />
        </div>
      </header>
      <div class="cont relative bg-gray-50 p-12 z-10 m-auto max-w-6xl rounded-2xl">
        <article class="prose prose-xl m-auto w-full">
          <p class="text-gray-600 text-sm mb-2">{{project.project_categories.map(x=>x["name"]).toString()}}</p>
          <h1 class="hero-text">{{ project.title }}</h1>
          <p>{{ project.intro }}</p>
          <div v-html="$md.render(project.body)" class="body"></div>
        </article>
      </div>
    </div>
    <div v-else class="h-screen flex items-center justify-center text-center">
      <header class="">
        <h1 class="hero-text">Oops..</h1>
        <p>That project doesnt exist</p>
      </header>
    </div>
  </main>
</template>

<script>
  export default {
    async asyncData({
      params,
      $strapi
    }) {
      try {
        const [project] = await $strapi.$projects.find({
          slug: params.slug
        })
        return {
          project
        }
      } catch (error) {
        console.log(error)
      }
    },
    data() {
      return {
        url: ''
      }
    },

    mounted() {
      this.url = this.$store.state.url
      console.log(this.url)
    },
  }

</script>

<style></style>
