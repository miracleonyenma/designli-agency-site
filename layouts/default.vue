<template>
  <div>
    <site-header />
    <Nuxt />
    <site-footer />
  </div>
</template>

<script>
import SiteFooter from '~/components/SiteFooter.vue'
import SiteHeader from '~/components/SiteHeader.vue'
export default {
    components: {
        SiteHeader,
        SiteFooter
    }
}
</script>

<style></style>