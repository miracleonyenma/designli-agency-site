<template>
  <li class="article md:grid gap-6 grid-cols-7 items-center mb-6 md:mb-0">
    <div class="img-cont h-full overflow-hidden rounded-xl col-start-1 col-end-3">
      <img :src="$store.state.url + article.cover.formats.medium.url" alt="">
    </div>
    <header class=" col-start-3 col-end-8">
      <h1 class="font-bold text-xl mb-2">{{article.title}}</h1>
      <p class="mb-2">{{article.intro}}</p>
      <nuxt-link :to="`/blog/${article.slug}`">
        <button class="cta w-max">Read more</button>
      </nuxt-link>
    </header>
  </li>
</template>

<script>
  export default {
    props: ['article'],
  }

</script>

<style scoped>

</style>
