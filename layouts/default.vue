<template>
  <div>
    <header
      style="position: fixed; width: 100%; z-index: 99999;"
      class="flex bg-surface pt-2 px-2 lg:pt-6"
    >
      <nav
        class="w-full mx-auto flex items-center justify-between flex-wrap bg-white layout p-6 lg:mt-4 shadow-lg"
      >
        <div class="w-full flex flex-row items-center lg:hidden">
          <button
            class="flex items-center px-3 py-2 border rounded border hover:text-grey-600 hover:border-grey-600"
            @click="showNav = !showNav"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
          <div style="flex-grow: 1;"></div>

          <nuxt-link
            to="/shop"
            class="inline-block text-sm px-4 py-2 leading-none"
            @click.native="closeMenu"
          >Tickets kaufen</nuxt-link>
        </div>
        <div
          class="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:mx-6"
          :class="{'hidden': !showNav}"
        >
          <div class="text-sm lg:flex-grow">
            <nuxt-link
              to="/"
              class="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-500 mr-4"
              @click.native="closeMenu"
            >Willkommen</nuxt-link>
            <nuxt-link
              to="/#event"
              class="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-500 mr-4"
              @click.native="closeMenu"
            >Event</nuxt-link>
            <!-- <nuxt-link
              to="/#cashless"
              class="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-500 mr-4"
            >Cashless</nuxt-link>-->
            <nuxt-link
              to="/#media"
              class="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-500 mr-4"
              @click.native="closeMenu"
            >Media</nuxt-link>
            <nuxt-link
              to="/#travel"
              class="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-500 mr-4"
              @click.native="closeMenu"
            >Anreise</nuxt-link>
            <nuxt-link
              to="/sponsors"
              class="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-500 mr-4"
              @click.native="closeMenu"
            >Sponsoren</nuxt-link>
          </div>
          <div class="flex flex-col lg:flex-row items-start lg:items-center lg:my-none">
            <nuxt-link
              to="/shop"
              tag="div"
              class="inline-block text-sm px-4 lg:mr-4 py-2 leading-none mt-4 lg:mt-0 cta cursor-pointer"
              @click.native="closeMenu"
            >Tickets kaufen</nuxt-link>
          </div>
        </div>
      </nav>
    </header>
    <main class="layout">
      <nuxt />
    </main>
    <hr />
    <footer class="mt-16 lg:pb-16">
      <div class="layout flex flex-col lg:flex-row">
        <div class="w-full lg:w-1/3 p-4 my-auto">
          <img src="~/assets/logo.png" width="160px" />
        </div>
        <div class="w-full lg:w-1/3 p-4">
          <ul class="text-white leading-relaxed list-none">
            <nuxt-link tag="li" to="/">Home</nuxt-link>
            <!-- <nuxt-link tag="li" to="/cashless">Cashless</nuxt-link> -->
            <nuxt-link tag="li" to="/#travel">Anreise</nuxt-link>
            <nuxt-link tag="li" to="/#media">Media</nuxt-link>
            <nuxt-link tag="li" to="/impressum">Impressum</nuxt-link>
            <nuxt-link tag="li" to="/agb">AGB</nuxt-link>
            <nuxt-link tag="li" to="/shop">Tickets kaufen</nuxt-link>
          </ul>
        </div>
        <div class="w-full lg:w-1/3 p-4">
          <ul class="text-white leading-relaxed">
            <nuxt-link tag="li" to="https://www.instagram.com/houseofengineers/">Instagram</nuxt-link>
            <nuxt-link tag="li" to="https://www.facebook.com/events/751695565281780/">Facebook</nuxt-link>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data: () => ({
    showNav: false
  }),
  methods: {
    closeMenu() {
      this.showNav = false
    }
  },
  mounted() {
    // Animation Observer
    const toAnimate = document.querySelectorAll('.animate')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const animatedOnce = entry.target.classList.contains('anm-once')
        if (animatedOnce) {
          entry.target.style.opacity = 1
        }
        if (entry.intersectionRatio > 0 && !animatedOnce) {
          const delay = entry.target.dataset.delay || '0s'
          const duration = entry.target.dataset.duration || '.6s'
          const animateOnce = entry.target.dataset.once
          entry.target.style.animation = `anim1 ${duration} ${delay} forwards ease-out`
          if (animateOnce) {
            entry.target.classList.add('anm-once')
          }
        } else {
          entry.target.style.animation = 'none'
        }
      })
    })
    toAnimate.forEach((el) => {
      observer.observe(el)
    })
  }
}
</script>

<style>
:root {
  --dark: #0e152f;
  --yellow: #f5d50b;
}
html {
  scroll-behavior: smooth;
}
body {
  font-family: 'Work Sans', 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background: var(--dark);
}
.bg-dark {
  background: var(--dark);
}
.bg-surface {
  background: var(--dark);
}
.layout {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.cta {
  color: var(--dark);
  background: var(--yellow);
  font-size: 14px;
  font-weight: 500;
  padding: 12px 18px;
  box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.15);
}

.animate {
  opacity: 0;
}

li {
  cursor: pointer;
}

@keyframes anim1 {
  from {
    transform: translateY(-100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
