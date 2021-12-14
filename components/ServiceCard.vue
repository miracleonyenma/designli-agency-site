<template>
  <li class="service rounded-xl shadow-lg">
    <header>
      <div class="img-cont h-36 overflow-hidden rounded-xl">
        <img v-if="coverImageUrl" :src="coverImageUrl" alt="" />
      </div>
      <div class="text-wrapper p-4">
        <h3 class="font-bold text-xl mb-2">{{service.name}}</h3>
        <p class="mb-2">
          {{service.description}}
        </p>
      </div>
    </header>
  </li>
</template>

<script>
export default {
  props: ['service'],
  computed: {
    coverImageUrl(){
      const url = this.$store.state.url
      const imagePath = this.service.cover.data.attributes.formats.medium.url
      return url + imagePath
    }
  }
}
</script>

<style scoped>
.service:nth-of-type(3n + 2) {
  @apply transform md:translate-y-20;
}
</style>
