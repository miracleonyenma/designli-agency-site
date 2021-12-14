<template>
  <main>
    <div v-if="article">
      <header class="">
        <div class="cover img-cont h-full max-h-96">
          <img v-if="coverImageUrl" class="rounded-b-2xl" :src="coverImageUrl" alt="" />
        </div>
      </header>
      <div class="cont relative bg-gray-50 p-12 z-10 m-auto max-w-6xl rounded-2xl">
        <article class="prose prose-xl m-auto w-full">
          <span style="margin-bottom: 1rem" class=" uppercase text-sm font-thin text-gray-600">from the team</span>
          <h1 class="hero-text mt-4">{{ article.title }}</h1>
          <p>{{ article.intro }}</p>
          <p class="text-gray-600 text-sm mb-2"><span class="font-extrabold">Categories: </span> {{ articleCategories }}</p>
          
          <!-- use markdownit to render the markdown text to html -->
          <div v-html="$md.render(article.body)" class="body"></div>
        </article>
      </div>
    </div>
    <div v-else class="h-screen flex items-center justify-center text-center">
      <header class="">
        <h1 class="hero-text">Oops..</h1>
        <p>That article doesnt exist</p>
      </header>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ params, store }) {
    try {
      // fetch data by slug using Strapi query filters
      const { data } = await (
        await fetch(
          `${store.state.apiUrl}/articles?filters[slug][$eq]=${params.slug}&populate=*`
        )
      ).json()

      return { article: data[0].attributes }
    } catch (error) {
      console.log(error)
    }
  },

  computed: {
    coverImageUrl() {
      const url = this.$store.state.url
      const imagePath = this.article.cover.data.attributes.formats.medium.url
      return url + imagePath
    },
    articleCategories() {
      return this.article.categories.data
        .map((x) => x.attributes['name'])
        .toString()
    },
  },
}
</script>