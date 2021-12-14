<template>
  <main>
    <section class="site-section hero-section h-screen">
      <div class="wrapper flex items-center justify-center h-full m-auto max-w-6xl">
        <header class="text-center md:w-2/3">
          <h1 class="hero-text md:text-7xl">Designli - Beautiful Innovation</h1>
          <p class="mb-4">
            We at Designli are obsessed with beautiful innovation. That's why we
            go for a modern approach in providing high end premium services to
            our customers and boy are they happy with the results so far!
          </p>
          <button class="cta">Get in touch</button>
        </header>
      </div>
    </section>
    <section class="site-section services-section">
      <div class="wrapper m-auto py-12 max-w-6xl">
        <header class="relative grid md:grid-cols-3 gap-6 z-10 text-center">
          <div class="wrapper col-start-2">
            <h1 class="header-text">Our Services</h1>
            <p class="mb-4">
              We at Designli are obsessed with beautiful innovation.
            </p>
          </div>
        </header>
        <ul class="services grid md:grid-cols-3 gap-6 transform md:-translate-y-20">
          <service-card v-for="service in services" :key="service.id" :service="service.attributes" />
        </ul>
      </div>
    </section>
    <section class="site-section projects-section">
      <div class="wrapper py-12 m-auto max-w-4xl">
        <header class="text-center mb-6">
          <h1 class="header-text">Our Projects</h1>
          <p>We at Designli are obsessed with beautiful innovation.</p>
        </header>
        <ul v-if="projects" class="projects">
          <project-card v-for="project in projects" :key="project.id" :project="project.attributes" />
        </ul>
        <div class="action-cont text-center mt-12">
          <nuxt-link to="/projects">
            <button class="cta">View more</button>
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="site-section blog-section">
      <div class=" wrapper py-12 md:grid gap-8 grid-cols-7 items-center m-auto max-w-6xl">
        <header style="height: min-content" class="md:grid col-start-1 col-end-3 mb-8">
          <h1 class="header-text">Our Blog</h1>
          <p class="mb-2">Helpful content from from the team to you.</p>
          <button class="cta w-max">Explore our blog</button>
        </header>
        <ul v-if="articles" class="articles md:grid gap-6 col-start-3 col-end-8">
          <article-card v-for="article in articles" :key="article.id" :article="article.attributes" />
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
  export default {
    async asyncData({ $strapi, store }) {
      try {
        const services = await (await fetch(`${store.state.apiUrl}/project-categories?populate=*`)).json()
        const projects = await (await fetch(`${store.state.apiUrl}/projects?populate=*`)).json()
        const articles = await (await fetch(`${store.state.apiUrl}/articles?populate=*`)).json()

        // const projects = await $strapi.$projects.find()
        // const articles = await $strapi.$articles.find()
        // const services = await $strapi.find('project-categories')

        return { projects: projects.data, articles: articles.data, services: services.data }
      } catch (error) {
        console.log(error)
      }
    },
  }

</script>