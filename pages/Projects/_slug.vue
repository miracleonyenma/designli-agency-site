<template>
  <!-- pages/Projects/_slug.vue -->
  <main>
    <div v-if="project">
      <header>
        <div class="cover img-cont h-full max-h-96">
          <img
            v-if="coverImageUrl"
            class="rounded-b-2xl"
            :src="coverImageUrl"
            alt=""
          />
        </div>
      </header>
      <div
        class="cont relative bg-gray-50 p-12 z-10 m-auto max-w-6xl rounded-2xl"
      >
        <article class="prose prose-xl m-auto w-full">
          <p class="text-gray-600 text-sm mb-2">
            {{ projectCategories }}
          </p>
          <h1 class="hero-text">{{ project.title }}</h1>
          <p>{{ project.intro }}</p>

          <!-- use markdownit to render the markdown text to html -->
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
  // use destructuring to get the context.params and context.store
  async asyncData({ params, store }) {
    try {

      // fetch data by slug using Strapi query filters
      const { data } = await (
        await fetch(
          `${store.state.apiUrl}/projects?filters[slug][$eq]=${params.slug}&populate=*`
        )
      ).json()

      return { project: data[0].attributes }
    } catch (error) {
      console.log(error)
    }
  },

  computed: {
    coverImageUrl() {
      const url = this.$store.state.url
      const imagePath = this.project.cover.data.attributes.formats.medium.url
      return url + imagePath
    },
    projectCategories() {
      return this.project.project_categories.data
        .map((x) => x.attributes['name'])
        .toString()
    },
  },
}
</script>