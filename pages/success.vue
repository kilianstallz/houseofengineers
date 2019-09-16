<template>
  <main class="pt-32">
    <section class="p-12 bg-white flex flex-col items-start">
      <h1 class="text-2xl text-green-400">Zahlung erfolgt!</h1>
      <h1
        class="text-xl"
      >Wir verarbeien deine Bestellung sobald die Zahlung bei uns eingegangen ist!</h1>
      <button class="px-3 py-2 border mt-4" @click="goToHome">Zurück</button>
    </section>
  </main>
</template>

<script>
export default {
  methods: {
    goToHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style>
input,
.StripeElement {
  height: 40px;
  padding: 10px 12px;

  color: #32325d;
  background-color: white;
  border: 1px solid transparent;
  border-radius: 4px;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

input:focus,
.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}
button {
  border-radius: 5px;
}
.bg-primary {
  background: #eb9522;
}
.text-primary {
  color: #eb9522;
}
li.text-primary {
  color: #f5d50b;
}
.bg-dark {
  background: #292a2e;
}
.active--exact {
  color: #eb9522;
  text-decoration: underline;
}
a:hover {
  color: #f5d50b;
}
.logo {
  width: 500px;
}
.flex-bg {
  height: 100vh;
}
.grid-media {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 14px;
}
@media (max-width: 599px) {
  .logo {
    width: 96%;
    margin: 0 auto;
  }
}
@media (max-width: 1024px) {
  .flex-bg {
    height: 100vh;
  }
  .grid-media {
    grid-template-columns: 1fr;
  }
}
</style>
