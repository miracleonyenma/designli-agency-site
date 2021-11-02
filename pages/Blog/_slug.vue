<template>
  <main>
    <div v-if="article">
      <header class="px-4">
        <div class="cover img-cont h-full max-h-96">
          <img v-if="$store.state.url" class="rounded-b-2xl max-h-100" :src="$store.state.url + article.cover.formats.medium.url" alt="" />
        </div>
      </header>
      <div class="cont relative bg-gray-50 p-12 z-10 m-auto max-w-6xl rounded-2xl">
        <article class="prose prose-xl m-auto w-full">
          <span style="margin-bottom: 1rem" class=" uppercase text-sm font-thin text-gray-600">from the team</span>
          <h1 class="hero-text mt-4">{{ article.title }}</h1>
          <p>{{ article.intro }}</p>
          <p class="text-gray-600 text-sm mb-2"><span class="font-extrabold">Categories: </span> {{article.categories.map(x=>x["name"]).toString()}}</p>
          
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
    async asyncData({ params, $strapi }) {
      try {
        const [article] = await $strapi.$articles.find({ slug: params.slug })
        return { article }

      } catch (error) {
        console.log(error)
      }
    },
  }

</script>