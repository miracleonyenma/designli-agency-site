<template>
<header class="cont fixed top-4 w-full flex px-4 z-20">
  <div class="wrapper relative w-full flex flex-nowrap justify-between items-center bg-white bg-opacity-60 shadow-md rounded-lg py-2 backdrop-filter backdrop-blur-lg px-4 m-auto max-w-5xl">
    <nuxt-link to="/">
      <figure class="SiteLogo flex items-center gap-2">
        <nuxt-logo class="w-8" />
        <h1 class=" text-lg font-black">Designli</h1>
      </figure>
    </nuxt-link>
    <site-nav />
  </div>
</header>
</template>

<script>
import NuxtLogo from './NuxtLogo.vue'
import SiteNav from './SiteNav.vue'
export default {
  components: { NuxtLogo, SiteNav },
}
</script>

<style></style>
