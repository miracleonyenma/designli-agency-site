<template>
  <main>
    <header class="px-4 mb-12">
      <div class="wrapper mt-28 m-auto max-w-6xl">
        <h1 class="hero-text">Our Blog</h1>
        <p>Front-end & back-end expertise from development to delivery</p>
      </div>
    </header>
    <ul class="m-auto px-4 max-w-5xl grid gap-8 mb-12">
      <article-card v-for="article in articles" :key="article.id" :article="article" />
    </ul>
  </main>
</template>

<script>
export default {
  async asyncData({ $strapi }) {
    try {
      const articles = await $strapi.$articles.find()
      return { articles }
    } catch (error) {
      console.log(error)
    }
  },
}
</script>