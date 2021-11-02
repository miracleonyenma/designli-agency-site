<template>
  <main>
    <header class="px-4 mb-12">
      <div class="wrapper mt-28 m-auto max-w-6xl">
        <h1 class="hero-text">Our Projects</h1>
        <p>See what we've been up to</p>
      </div>
    </header>
    <ul class="m-auto px-4 max-w-5xl mb-12">
      <project-card v-for="project in projects" :key="project.id" :project="project" />
    </ul>
  </main>
</template>

<script>
export default {
  async asyncData({ $strapi }) {
    try {
      const projects = await $strapi.$projects.find()
      return { projects }
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style></style>
