<template>
  <main class="pt-40">
    <h3 class="text-xl text-white mb-4">Tickets bestellen</h3>
    <section class="bg-white p-4 lg:p-12 pt-20 rounded-sm">
      <form action="/charge" method="post" id="payment-form" class="flex flex-col lg:flex-row">
        <div class="flex flex-col lg:w-1/2 items-center">
          <img
            style="width: 270px; max-height: 250px; height: auto; "
            src="~/assets/logo.png"
            class="bg-black p-12"
          />
          <label class="py-4">Eintrittskarte Stehplatz 17€</label>
          <input
            v-model="anzahl"
            style="width: 250px;"
            type="number"
            placeholder="Anzahl Stehplätze"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          />
          <div class="flex flex-col items-center">
            <p
              style="width: 270px;"
              v-if="!shipping"
              class="text-center"
            >Karten bei Mitglieder des Ballkommitees auslösen</p>
            <div class="text-gray-600">oder</div>

            <div class="flex align-center" style="width: 270px;">
              <input type="checkbox" v-model="shipping" class="mr-4 my-auto" />
              <p class="my-auto">
                Ich möchte meine Karte
                per Post erhalten (+2€ versand)
              </p>
            </div>
          </div>
          <div class="bg-gray-400 my-4" style="width: 270px; height: 1px;"></div>
          <div style="width: 270px;">
            <div class="flex justify-between flex-row">
              <span>Summe:</span>
              <span>{{ summe }}€</span>
            </div>
            <div class="flex justify-between flex-row">
              <span>davon Mehrwertsteuer:</span>
              <span>20%</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col mt-6 px-0 lg:mt-none lg:mt-none lg:w-1/2">
          <input
            v-model="vorname"
            type="text"
            required
            placeholder="Vorname"
            class="mb-6 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          />
          <input
            v-model="nachname"
            type="text"
            required
            placeholder="Nachname"
            class="mb-6 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          />
          <input
            v-model="email"
            type="email"
            required
            placeholder="E-Mail"
            class="mb-6 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          />
          <input
            v-model="anschrift"
            type="text"
            required
            placeholder="Straße & Hausnummer"
            class="mb-6 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          />
          <input
            v-model="stadt"
            type="text"
            required
            placeholder="Stadt"
            class="mb-6 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          />
          <input
            v-model="plz"
            type="text"
            required
            placeholder="PLZ"
            class="mb-6 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          />
          <input
            v-model="telefon"
            type="tel"
            placeholder="Telefon (Optional)"
            class="mb-6 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          />
          <div class="flex items-center mb-4">
            <input v-model="agb" type="checkbox" class="mr-2" />
            <p>
              Ich bestätige die
              <nuxt-link to="/agb">AGB</nuxt-link>&nbsp;zu akzeptieren.
            </p>
          </div>
          <button
            type="submit"
            :disabled="!formValid"
            class="text-white font-bold py-2 px-4 rounded"
            :class="{'bg-gray-400 cursor-not-allowed': !formValid, 'bg-blue-500 hover:bg-blue-700': formValid}"
          >Zahlen mit SOFORT</button>

          <div class="text-red-500 my-4" id="error-message" role="alert"></div>
        </div>
      </form>
    </section>
    <section class="mt-4 bg-white p-4 lg:p-12 rounded-sm">
      <h3 class="text-2xl">Reservierungen</h3>
      <p>Sitzplätze können nur von Mitgliedern des Ballkommitees reserviert und erworben werden.</p>
      <p></p>
    </section>
  </main>
</template>

<script>
var stripe = undefined
export default {
  name: 'Shop',
  data: () => ({
    anzahl: null,
    shipping: false,
    agb: false,
    vorname: null,
    nachname: null,
    email: null,
    anschrift: null,
    stadt: null,
    plz: null,
    telefon: null
  }),
  computed: {
    summe() {
      if (this.anzahl > 0) {
        return this.anzahl * 17 + (this.shipping ? 2 : 0)
      } else return 0
    },
    formValid() {
      return (
        !!this.anzahl &&
        !!this.agb &&
        !!this.email &&
        !!this.anschrift &&
        !!this.stadt &&
        !!this.plz
      )
    }
  },
  mounted() {
    stripe = window.Stripe('pk_live_YGkWsACbT1GwMiUVE0Tv0AlA00aZ4j988F')
    // stripe = window.Stripe('pk_test_0A12MlGA5KnFlgyzLb25KcGY00XphznvXd')
    this.mount()
  },
  methods: {
    mount() {
      var form = document.getElementById('payment-form')
      form.addEventListener('submit', (event) => {
        event.preventDefault()
        this.submitPayment()
      })
    },
    submitPayment() {
      var errorMessage = document.getElementById('error-message')
      var sourceData = {
        type: 'sofort',
        currency: 'eur',
        amount: parseInt(this.summe * 100),
        sofort: {
          country: 'AT'
        },
        redirect: {
          return_url: 'https://house-of-engineers.at/success'
        },
        owner: {
          name: `${this.vorname} ${this.nachname}`,
          // name: `succeeding_charge`,
          email: this.email,
          phone: this.telefon,
          address: {
            city: this.stadt,
            country: 'AT',
            line1: this.anschrift,
            line2: this.line2,
            postal_code: this.plz
          }
        },
        metadata: {
          shipping: this.shipping,
          anzahl: this.anzahl
        },
        mandate: {
          // Automatically send a mandate notification email to your customer
          // once the source is charged.
          notification_method: 'email'
        }
      }

      // Call `stripe.createSource` with the iban Element and additional options.
      stripe.createSource(sourceData).then(function(result) {
        if (result.error) {
          // Inform the customer that there was an error.
          errorMessage.textContent = result.error.message
          errorMessage.classList.add('visible')
        } else {
          // Send the Source to your server to create a charge.
          errorMessage.classList.remove('visible')
          // console.log(result)
          location.replace(result.source.redirect.url)
        }
      })
    }
  }
}
</script>
