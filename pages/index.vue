<template>
  <main>
    <!-- <site-header /> -->
    <section class="site-section hero-section h-screen">
      <div
        class="wrapper flex items-center justify-center h-full m-auto max-w-6xl"
      >
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
      <!-- <div class=" wrapper grid md:grid-cols-2 md:gap-8 items-center h-full m-auto max-w-6xl ">
        <header class="text-center md:text-left row-start-2 md:row-start-1 md">
          <h1 class="hero-text">
            Designli - Beautiful Innovation
          </h1>
          <p class="mb-4">
            We at Designli are obsessed with beautiful innovation. That's why we
            go for a modern approach in providing high end premium services to
            our customers and boy are they happy with the results so far!
          </p>
          <button class="cta">Get in touch</button>
        </header>
        <div class=" media-cont flex items-center justify-center h-72 w-full row-start-1 ">
          <div class="wrapper relative h-full w-96 max-w-full">
            <div class="img-cont w-52 h-52 top-10 left-0">
              <img src="~/assets/img/hero.jpg" alt="" />
            </div>
            <div class="img-cont w-32 h-32 top-0 left-60">
              <img src="~/assets/img/work/pic.jpg" alt="" />
            </div>
            <div class="img-cont w-24 h-24 top-52 left-52">
              <img src="~/assets/img/work/q.png" alt="" />
            </div>
          </div>
        </div> -->
      <!-- </div> -->
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
        <ul class=" services grid md:grid-cols-3 gap-6 transform md:-translate-y-20">
          <service-card v-for="service in services" :key="service.name" :service="service" />
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
          <project-card
            v-for="project in projects"
            :key="project.id"
            :project="project"
          />
        </ul>
        <div class="action-cont text-center mt-12">
          <nuxt-link to="/projects">
            <button class="cta">View more</button>
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="site-section blog-section">
      <div
        class=" wrapper py-12 md:grid gap-8 grid-cols-7 items-center m-auto max-w-6xl">
        <header
          style="height: min-content"
          class="md:grid col-start-1 col-end-3 mb-8"
        >
          <h1 class="header-text">Our Blog</h1>
          <p class="mb-2">Helpful content from from the team to you.</p>
          <button class="cta w-max">Explore our blog</button>
        </header>
        <ul
          v-if="articles"
          class="articles md:grid gap-6 col-start-3 col-end-8"
        >
          <article-card
            v-for="article in articles"
            :key="article.id"
            :article="article"
          />
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
export default {
    data() {
    return {
      services: [
        {
          name: 'Branding',
          description:
            "We at Designli are obsessed with beautiful innovation. That's why we go for a modern approach in providing high end premium services",
        },
        {
          name: 'UI/UX',
          description:
            "We at Designli are obsessed with beautiful innovation. That's why we go for a modern approach in providing high end premium services",
        },
        {
          name: 'Graphics',
          description:
            "We at Designli are obsessed with beautiful innovation. That's why we go for a modern approach in providing high end premium services",
        },
      ],
    }
  },

  async asyncData(context) {
    try {
      const projects = await context.$strapi.$projects.find()
      const articles = await context.$strapi.$articles.find()
      const services = await context.$strapi.find('project-categories')

      return { projects, articles, services}
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style></style>
