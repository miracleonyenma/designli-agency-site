<template>
  <nav class="SiteNav">
    <button class="menu-btn md:hidden">Show</button>
    <ul class="">
      <li><n-link to="/about">About</n-link></li>
      <li><n-link to="/blog">Blog</n-link></li>
      <li><n-link to="/projects">projects</n-link></li>
      <li>
        <n-link to="/contact">
          <button class="cta">Contact Us</button>
        </n-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>     
<style scoped>
.SiteNav:focus-within ul {
  @apply opacity-100 visible w-max h-auto;
}

.menu-btn:active ~ ul,
.menu-btn:focus ~ ul {
  @apply opacity-100 visible w-max h-auto;
}

ul {
  @apply absolute right-4 flex-col gap-6 bg-white rounded-md p-6 px-8 shadow-lg text-3xl font-black text-right capitalize opacity-0 invisible w-0 h-0 overflow-hidden;
  @apply md:relative right-0 flex md:flex-row md:bg-transparent md:items-center md:gap-4 md:opacity-100 md:visible md:w-max md:h-auto md:shadow-none md:p-0 md:font-bold md:text-sm text-gray-700 md:overflow-visible;
}

li{
    @apply hover:text-gray-900;
}
</style>
