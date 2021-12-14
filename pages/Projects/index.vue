<template>
  <main>
    <header class="px-4 mb-12">
      <div class="wrapper mt-28 m-auto max-w-6xl">
        <h1 class="hero-text">Our Projects</h1>
        <p>See what we've been up to</p>
      </div>
    </header>
    <ul class="m-auto px-4 max-w-5xl mb-12">
      <project-card v-for="project in projects" :key="project.id" :project="project.attributes" />
    </ul>
  </main>
</template>

<script>
export default {
  async asyncData({ store }) {
    try {
      // const projects = await $strapi.$projects.find()
      const { data } = await (
        await fetch(`${store.state.apiUrl}/projects?populate=*`)
      ).json()
      return { projects: data }
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style></style>
