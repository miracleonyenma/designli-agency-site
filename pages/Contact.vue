<template>
  <main>
    <div class="px-4">
      <div class="cover img-cont h-full max-h-96">
        <img class="rounded-b-2xl max-h-100" src="~/assets/img/hero.jpg" alt="" />
      </div>
    </div>
    <div class="section relative bg-gray-50 p-12 z-10 m-auto max-w-4xl rounded-2xl overflow-hidden">
      <header class="mb-8">
        <h1 class="hero-text">Contact Us</h1>
        <p>Submit a project request or send a message</p>
      </header>

      <form ref="form" @submit.prevent="submitForm()">
        <div class="wrapper flex flex-col gap-8 mb-8">
          <div class="form-group">
            <div class="form-control">
              <label for="name">Full name</label>
              <input type="text" id="name" v-model="name" value="Miracleio"  required/>
            </div>
            <!-- <div class="form-control">
              <label for="company">Company name</label>
              <input type="text" id="company" v-model="company" value="Miracleio"  required/>
            </div> -->
          </div>
          <div class="form-control">
            <label for="email">Email Address</label>
            <input type="email" id="email" v-model="email" value="Miracleio@gmail.com"  required/>
          </div>
          <div class="wrapper">
            <h3 class="">Pick a service</h3>
            <div class="form-group check">
              <div class="form-control check">
                <input type="checkbox" name="services" id="branding" value="branding" v-model="services">
                <label for="branding">Branding</label>
              </div>
              <div class="form-control check">
                <input type="checkbox" name="services" id="web_design" value="web_design" v-model="services">
                <label for="web_design">Web design</label>
              </div>
              <div class="form-control check">
                <input type="checkbox" name="services" id="ui/ux" value="ui/ux" v-model="services">
                <label for="ui/ux">UI/UX</label>
              </div>
            </div>
          </div>
          <div class="form-control">
            <label for="message">What's your request or message?</label>
            <textarea id="message" placeholder="Write message here" rows="12" v-model="message" required>What's up</textarea>
          </div>
        <div class="action-cont">
          <button class="cta" >Send message</button>
        </div>
        </div>
        <div  v-if="success" class=" absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white" >
          <h1 class="header-text w-8/12">Great! Your message is on it's way to us!</h1>
        </div>
      </form>
    </div>

  </main>
</template>

<script>
  export default {
    data(){
      return{
        success: false,
        name: 'Miracle',
        // company: 'Miracleio',
        email: 'mio@mio.co',
        services: ['branding'],
        message: 'What\'s up yo?'
      }
    },
    methods: {
      async submitForm(){
        const data = {
          name: this.name,
          // company: this.company,
          email: this.email,
          project_categories: this.services,
          body: this.message
        }

        try {
          // send a POST request to create a new entry
          const msgs = await fetch(`${this.$store.state.apiUrl}/visior-messages`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({data})
          })

          if(msgs) this.success = true
        } catch (error) {
          console.log(error);
        }
      }
    }
  }

</script>

<style scoped>
  .form-group {
    @apply flex flex-wrap gap-4;
  }

  .form-control {
    @apply flex flex-col flex-grow;
  }

  .form-control label {
    @apply font-bold text-gray-600 mb-2;
  }

  .form-control input,
  .form-control textarea {
    @apply p-4 bg-gray-200 rounded-lg;
  }

  .form-control.check {
    @apply relative flex items-center justify-center cursor-pointer;
  }

  .form-control.check label {
    @apply m-0 w-full h-full p-4 text-center;
  }

  .form-control.check input {
    @apply absolute opacity-0;
  }

  .form-control.check input:checked ~ label{
    @apply border-opacity-0 text-gray-50 bg-gray-700;
  }

  .form-control.check label:hover {
    @apply border-opacity-100
  }

  .form-control.check label {
    @apply border-2 border-gray-600 border-opacity-30 rounded-lg;
  }

</style>
