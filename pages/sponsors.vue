<template>
  <div>
    <header class="flex bg-surface pt-2 px-2 lg:pt-6">
      <nav
        class="w-full mx-auto flex items-center justify-between flex-wrap bg-white layout p-6 lg:mt-4 shadow-lg rounded"
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

          <a href="https://instagram.com/houseofengineers" class="social-icons mr-4">
            <img
              style="height: 24px; width: auto;"
              src="~/assets/instagram-seeklogo.com.png"
              alt="Instagram"
            />
          </a>
          <a href="https://www.facebook.com/events/751695565281780/" class="social-icons">
            <img
              style="height: 24px; width: auto;"
              src="~/assets/f_logo_RGB-Grey_58.png"
              alt="Facebook"
            />
          </a>
        </div>
        <div
          class="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:mx-6"
          :class="{'hidden': !showNav}"
        >
          <div class="text-sm lg:flex-grow">
            <nuxt-link
              to="/"
              class="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-500 mr-4"
            >Willkommen</nuxt-link>
            <nuxt-link
              to="/#event"
              class="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-500 mr-4"
            >Event</nuxt-link>
            <!-- <nuxt-link
              to="/#cashless"
              class="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-500 mr-4"
            >Cashless</nuxt-link>-->
            <nuxt-link
              to="/#media"
              class="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-500 mr-4"
            >Media</nuxt-link>
            <nuxt-link
              to="/#travel"
              class="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-500 mr-4"
            >Anreise</nuxt-link>
            <nuxt-link
              to="/sponsors"
              class="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-500 mr-4"
            >Sponsoren</nuxt-link>
          </div>
          <div class="flex flex-row my-2 lg:my-none">
            <!-- <nuxt-link
              to="/tickets"
              class="inline-block text-sm px-4 py-2 leading-none border rounded hover:border-blue-500 hover:text-white hover:bg-blue-500 mt-4 lg:mt-0"
            >Tickets kaufen</nuxt-link>-->
            <a href="https://instagram.com/houseofengineers" class="social-icons mr-4">
              <img
                style="height: 24px; width: auto;"
                src="~/assets/instagram-seeklogo.com.png"
                alt="Instagram"
              />
            </a>
            <a
              href="https://www.facebook.com/House-of-Engineers-Maturaball-HTL-Wels-110862703604570"
              class="social-icons"
            >
              <img
                style="height: 24px; width: auto;"
                src="~/assets/f_logo_RGB-Grey_58.png"
                alt="Facebook"
              />
            </a>
          </div>
        </div>
      </nav>
    </header>
    <main style="min-height: 100vh;" class="layout">
      <h2 class="text-center text-white text-3xl my-24">Herzlichen Dank an unsere Sponsoren</h2>
      <div class="grid cat-1">
        <img style="box-shadow: none" src="~/assets/sponsors/1/eww/eww.png" alt="EWW" />
        <img src="~/assets/sponsors/1/StarlimSterner.jpg" alt="StarlimSterner" />
        <img src="~/assets/sponsors/1/FitInn/FitInn.jpg" alt="FitInn" />
        <img src="~/assets/sponsors/1/JobsExpert.jpg" alt="JobsExpert" />
      </div>
      <div class="grid cat-2 mt-8">
        <img
          src="~/assets/sponsors/2/ABB/ABB_Logo_Print_4C.jpeg"
          alt="ABB"
          class="bg-black px-16 py-4 w-full"
          width="1000px"
        />
        <img
          src="~/assets/sponsors/2/Kremsmueller/Kremsmueller.jpg"
          alt="Kremsmueller"
          class="my-6"
        />
        <img
          src="~/assets/sponsors/2/Liwest/LIWEST_Logo_CMYK_blau.jpg"
          alt="LIWEST"
          class="bg-white px-2 py-6"
        />
        <img src="~/assets/sponsors/2/TGW.jpg" alt="TGW" />
        <img src="~/assets/sponsors/2/AignerAbsaugtechnologie.jpg" alt="Aigner Absaugtechnologie" />
        <img src="~/assets/sponsors/2/ecx.io-Logo.jpg" alt="ECX.IO" />
        <img src="~/assets/sponsors/2/Lechenauer.jpg" alt="Lechenauer" />
        <img src="~/assets/sponsors/2/Teufelberger_Logo_4c_RZ.jpg" alt="Teufelberger" />
        <img class="p-3" src="~/assets/sponsors/2/Xjam/Xjam_Logo_FINAL17.png" alt="Xjam" />
      </div>

      <div class="grid cat-3 mt-8">
        <img class="py-3 px-2 bg-white" src="~/assets/sponsors/3/BR-full.jpg" alt="B&R" />
        <img src="~/assets/sponsors/3/digigebau-logo.png" alt="digi Gebau" class="bg-white p-2" />
        <img src="~/assets/sponsors/3/Connex/Connex.jpg" alt="Connex Marketing Group" />
        <img
          src="~/assets/sponsors/3/BRS-Logo/BRS-Logo/BZR_LOGO_Bezirk_4c.jpg"
          alt="EZW Werkzeugbau"
        />
        <img src="~/assets/sponsors/3/eurofoam.jpg" alt="Eurofoam" class="bg-white p-4" />
        <img src="~/assets/sponsors/4/BistroBox.jpg" alt="Bistro Box" />
        <img src="~/assets/sponsors/3/EZW.jpg" alt="EZW Werkzeugbau" />
        <img src="~/assets/sponsors/4/fill-logo.jpg" alt="Fill" />
        <img src="~/assets/sponsors/4/KEBA_Logo.jpg" alt="KEBA" />
        <img class="bg-white py-3" src="~/assets/sponsors/4/EREMA_Freisteller_RGB.png" alt="EREMA" />
        <img src="~/assets/sponsors/4/Geroldinger_Logo.png" alt="Geroldinger" class="bg-white p-4" />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'SponsorPage',
  data: () => ({
    showNav: false
  })
}
</script>

<style scoped>
.grid.cat-1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 16px;
}
.grid.cat-2 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 16px;
}
.grid.cat-3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 16px;
}
.grid img {
  width: 100%;
  height: auto;
}

img {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
}

a > img {
  box-shadow: none;
}

@media (max-width: 599px) {
  .grid.cat-1 {
    grid-template-columns: 1fr;
  }
  .grid.cat-2,
  .grid.cat-3,
  .grid.cat-4 {
    grid-template-columns: 1fr;
  }
}
</style>
