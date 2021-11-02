<template>
  <footer class="site-footer bg-gray-800 text-gray-50 p-4">
    <div class="cont py-12 m-auto max-w-6xl">
      <div class="wrapper md:grid grid-cols-5">
        <header style="height: max-content" class="grid col-start-1 col-end-3 mb-6 text-center md:text-left" >
          <figure
            class=" SiteLogo flex items-center justify-center md:justify-start gap-2 mb-2 " >
            <nuxt-logo class="w-12" />
            <h1 class="text-2xl font-black">Designli</h1>
          </figure>

          <p>Obsessed with beautiful innovation.</p>
        </header>
        <div class="link-group md:grid grid-cols-3 col-start-3 col-end-6">
          <section class="mb-4 text-center md:text-left">
            <h1 class="text-xl font-extrabold">Company</h1>
            <ul>
              <li><nuxt-link to="/about">About</nuxt-link></li>
              <li><nuxt-link to="/projects">Projects</nuxt-link></li>
              <li><nuxt-link to="/blog">Blog</nuxt-link></li>
            </ul>
          </section>
          <section class="mb-4 text-center md:text-left">
            <h1 class="text-xl font-extrabold">Services</h1>
            <ul>
              <li><nuxt-link to="/services#branding">Branding</nuxt-link></li>
              <li><nuxt-link to="/services#graphics">Graphics</nuxt-link></li>
              <li><nuxt-link to="/services#ui/ux">UI/UX</nuxt-link></li>
            </ul>
          </section>
          <section class="text-center md:text-left">
            <h1 class="text-xl font-extrabold">Contact</h1>
            <ul>
              <li><nuxt-link to="/contact">Send us a message</nuxt-link></li>
              <li><a href="tel:+00000000">+2345678900</a></li>
              <li><a href="mailto:mail@mail.com">mail@mail.com</a></li>
            </ul>
          </section>
        </div>
      </div>
      <hr class="w-full my-12" />
      <ul class="socials flex gap-6 justify-center">
        <li><a href="http://facebook.com">FB</a></li>
        <li><a href="http://instagram.com">IG</a></li>
        <li><a href="http://twitter.com">TW</a></li>
      </ul>
      <p class="text-center mt-4">© Designli. All rights reserved</p>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style></style>
