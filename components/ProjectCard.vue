<template>
  <li class="project grid gap-4 md:gap-8 md:grid-cols-7 items-center mb-8 md:mb-12">
    <header style="height: min-content;" class="md:grid md:col-start-5 md:col-end-8">
      <h1 class="text-xl md:text-3xl font-bold">{{project.title}}</h1>
      <p>{{project.intro}}</p>
      <!-- map through the project categories and convert the array to string -->
      <!-- to display categories seperated by commas -->
      <p class="text-gray-600 text-sm mb-2">{{ projectCategories }}</p>
      <nuxt-link :to="`/projects/${project.slug}`">
        <button class="cta w-max">View Project</button>
      </nuxt-link>
    </header>

    <div
      class="img-cont rounded-xl h-full max-h-40 md:max-h-72 row-start-1 md:col-start-1 md:col-end-5 overflow-hidden">
      <img v-if="coverImageUrl" :src="coverImageUrl" alt="">
    </div>
  </li>
</template>

<script>
  export default {
    props: ['project'],
    computed: {
      coverImageUrl(){
        const url = this.$store.state.url
        const imagePath = this.project.cover.data.attributes.formats.medium.url
        return url + imagePath
      },
      projectCategories(){
        return this.project.project_categories.data.map(
          x=>x.attributes["name"]
        ).toString()
      }
    }
  }

</script>

<style scoped>
  @layer components {
    .project:nth-last-of-type(1) {
      @apply md:mb-0;
    }

    .project:nth-of-type(even) header {
      @apply md:col-start-1 md:col-end-4;
    }

    .project:nth-of-type(even) .img-cont {
      @apply md:col-start-4 md:col-end-8
    }
  }

</style>
