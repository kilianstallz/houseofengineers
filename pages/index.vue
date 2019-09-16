<template>
  <main>
    <section
      style="height: 100vh;"
      class="flex flex-col-reverse justify-center items-center lg:flex-row lg:justify-around lg:items-center"
    >
      <div class="intro-text">
        <h1 class="hidden font-medium leading-tight text-white text-6xl lg:block">
          Maturaball
          <br />der HTL Wels
        </h1>
        <hr style="width: 40%;" class="ml-0 invisible lg:visible" />
        <p class="hidden text-white text-lg mt-4 lg:block">
          📍 Hallen 20 - 21, Messe Wels
          <br />📅 09. November 2019
        </p>
        <div class="flex flex-row mt-12 lg:mt-8">
          <!-- <nuxt-link tag="button" to="/#event" class="bg-white py-4 px-6 mr-4 shadow-md">Mehr Infos</nuxt-link> -->
          <nuxt-link
            tag="button"
            to="/#event"
            class="bg-primary text-white py-4 px-6 mr-4 shadow-md"
          >Mehr Infos</nuxt-link>
          <nuxt-link
            tag="button"
            to="/shop"
            class="hidden lg:block py-4 px-6 bg-primary text-white shadow-md"
          >Karten kaufen</nuxt-link>
        </div>
      </div>
      <div class="logo">
        <img src="~/assets/logo.png" class="logo" />
        <p class="text-white text-center text-md md:text-2xl mt-5 lg:hidden">
          📍 Hallen 20 - 21, Messe Wels
          <br />📅 09. November 2019
        </p>
      </div>
    </section>
    <section id="news" class="pt-12 pb-32 text-center text-white">
      <h3 class="text-2xl lg:text-3xl">Neuigkeiten zum Event</h3>
      <h1 class="text-white text-4xl lg:text-5xl">Unsere Social Media Accounts sind nun online!</h1>
    </section>
    <section id="event" class="pt-12 lg:pt-32">
      <h2 class="text-4xl text-white">Das Event</h2>

      <hr style="width: 62px;" class="ml-0 mb-4" />
      <div style="min-height: 40vh" class="flex flex-col md:flex-row -mx-4 my-12">
        <div class="w-full lg:w-1/3 p-2">
          <div class="py-6">
            <h4 class="text-md text-gray-500 font-medium">Erneut vor der Probe</h4>
            <h3 class="text-2xl text-primary">gebührend zu feiern.</h3>
            <p class="text-gray-400 mt-6">
              Nach einem Jahr warten ist es nun wieder so weit!
              <br />Die Schüler der HTL Wels laden zu ihrem Maturaball und versucht natürlich auch heuer wieder eine Schippe drauf zu legen.
              <br />Auch heuer wieder in der besten Location.
            </p>
          </div>
        </div>
        <div class="w-full lg:w-1/3 p-2" data-once="true" data-delay="0.2s">
          <div class="p-6 bg-white rounded">
            <h4 class="text-md text-gray-500 font-medium">Festlich eingerichtet</h4>
            <h3 class="text-2xl text-primary">der Ballsaal</h3>
            <p class="mt-6">
              Lasst euch in dem festlichen Ambiente des Ballsaals verzaubern,
              <br />feiert und tanzt mit den Schülerinnen und Schülern.
              <br />Für reichlich Verpflegung ist natürlich auch gesorgt.
            </p>
          </div>
        </div>
        <div class="w-full lg:w-1/3 p-2" data-once="true" data-delay="0.2s">
          <div class="p-6 bg-white rounded">
            <h4 class="text-md text-gray-500 font-medium">Zum feiern geschaffen</h4>
            <h3 class="text-2xl text-primary">die Discohalle</h3>
            <p class="mt-6">
              Für alle die nicht in der Stimmung für einen festlichen Ball sind,
              <br />haben wir natürlich auch dieses Jahr wieder unsere Discohalle.
              <br />Gefüllt mit vielen der besten DJs der Umgebung lassen wir es richtig krachen.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- ###
      ### Cashless ###
    ###-->
    <!-- <section id="cashless" style="min-height: 60vh;" class="pt-24 pb-32">
        <div class="flex flex-col lg:flex-row items-center">
          <div class="w-full lg:flex-1 pr-6">
            <h1 class="text-5xl font-medium text-white">Maturaball Cashless</h1>
            <hr style="width: 35%;" class="text-left ml-0 my-6" />
            <p class="text-gray-400">
              Um Bargeld chaos musst du dir nun endlich keine Sorgen mehr machen!
              <br />Nun kannst du dich Bargeldlos am Maturaball der HTL Wels vergnügen.
            </p>
    <div class="flex flex-row mt-12 lg:mt-8">-->
    <!-- <button class="bg-white py-4 px-6 mr-4 shadow-md">Mehr Infos</button> -->
    <!-- <button class="py-4 px-6 bg-primary text-white shadow-md">Karten kaufen</button> -->
    <!-- </div>
          </div>
          <div class="w-full mt-12 lg:w-1/3">
            <div class="bg-dark text-white p-6 rounded shadow-lg animate">
              <ul class="list-disc w-full ml-6 flex flex-col">
                <li class="my-4">Chip Armband holen</li>
                <li class="my-4">Bargeldlos bezahlen</li>
                <li class="my-4">
                  Bequem wieder aufladen
                  <br />mit Bargeld oder am Automaten
                </li>
              </ul>
            </div>
          </div>
        </div>
    </section>-->
    <section id="media" class="py-24 lg:py-32">
      <div class="flex flex-col md:flex-row">
        <div class="w-full flex flex-col my-auto bg-dark rounded p-8 md:mr-2 shadow-lg">
          <div class="text-center">
            <h4 class="text-primary text-lg mb-2 text-center">Folge uns auf Social Media</h4>
            <h4 class="text-white text-2xl mb-6 text-center">für Gewinnspiele & aktuelle News</h4>
          </div>
          <div
            class="flex w-full flex-col items-center lg:flex-row lg:justify-center lg:items-center"
          >
            <button
              style="background: #833AB4;"
              class="flex flex-row justify-center align-middle px-4 py-3 w-40 my-4 text-white mr-6"
              @click="goTo('https://www.instagram.com/houseofengineers/')"
            >
              <img
                src="~/assets/instagram-seeklogo.com.png"
                alt="Instagram"
                style="height: 24px; width: auto;"
                class="mr-3"
              />Instagram
            </button>
            <button
              style="background: #3C5A99;"
              class="px-4 py-3 w-40 my-4 text-white mr-6 flex justify-center"
              @click="goTo('https://www.facebook.com/House-of-Engineers-Maturaball-HTL-Wels-110862703604570/')"
            >
              <img
                src="~/assets/f_logo_RGB-White_58.png"
                alt="Facebook"
                style="height: 24px; width: auto;"
                class="mr-3"
              />Facebook
            </button>
          </div>
        </div>
        <div class="hidden lg:flex justify-center">
          <blockquote
            class="instagram-media shadow-2xl"
            data-instgrm-permalink="https://www.instagram.com/p/B1OGMc4gSYh/"
            data-instgrm-version="12"
            style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"
          >
            <div style="padding:16px;">
              <a
                href="https://www.instagram.com/p/B1OGMc4gSYh/"
                style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;"
                target="_blank"
              >
                <div style=" display: flex; flex-direction: row; align-items: center;">
                  <div
                    style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"
                  ></div>
                  <div
                    style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"
                  >
                    <div
                      style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"
                    ></div>
                    <div
                      style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"
                    ></div>
                  </div>
                </div>
                <div style="padding: 19% 0;"></div>
                <div style="display:block; height:50px; margin:0 auto 12px; width:50px;">
                  <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                        <g>
                          <path
                            d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div style="padding-top: 8px;">
                  <div
                    style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"
                  >Sieh dir diesen Beitrag auf Instagram an</div>
                </div>
                <div style="padding: 12.5% 0;"></div>
                <div
                  style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"
                >
                  <div>
                    <div
                      style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"
                    ></div>
                    <div
                      style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"
                    ></div>
                    <div
                      style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"
                    ></div>
                  </div>
                  <div style="margin-left: 8px;">
                    <div
                      style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"
                    ></div>
                    <div
                      style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"
                    ></div>
                  </div>
                  <div style="margin-left: auto;">
                    <div
                      style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"
                    ></div>
                    <div
                      style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"
                    ></div>
                    <div
                      style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"
                    ></div>
                  </div>
                </div>
              </a>
              <p style=" margin:8px 0 0 0; padding:0 4px;">
                <a
                  href="https://www.instagram.com/p/B1OGMc4gSYh/"
                  style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;"
                  target="_blank"
                >Nach einem Jahr warten ist es nun wieder so weit! Die Schüler der HTL Wels laden nun wieder zu ihrem Maturaball. Ein festlicher Ballsaal und die heftigste Mainstage der Maturaball Geschichte powered by Zwisl erwarten Schüler, Familien und Partybegeisterte am diesjährigen Maturaball der HTL Wels. 📣🎉🎉 WO: Messehallen 20-21, Messe Wels WANN: 09.11.2019 19:00 Einlass ab 16 Jahren Amtlicher Lichtbildausweis erforderlich!</a>
              </p>
              <p
                style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"
              >
                Ein Beitrag geteilt von
                <a
                  href="https://www.instagram.com/houseofengineers/"
                  style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;"
                  target="_blank"
                >Maturaball der HTL Wels</a> (@houseofengineers) am
                <time
                  style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;"
                  datetime="2019-08-16T09:43:38+00:00"
                >Aug 16, 2019 um 2:43 PDT</time>
              </p>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
    <section id="travel" style="min-height: 60vh;" class="py-24 pt-32">
      <div class="flex flex-col lg:flex-row mb-12 text-right">
        <h2 class="text-4xl text-white">Anreise</h2>
        <hr style="width: 62px;" class="mr-0 mb-4" />
        <p class="text-gray-400 text-right w-full">
          Wir arbeiten daran, für eine noch bequemere
          <br />An- & Abreise
          einen Shuttleservice
          <br />zu organisieren.
        </p>
      </div>
      <div class="flex items-end flex-col lg:flex-row">
        <div class="w-full my-6 lg:mx-2">
          <iframe
            class="w-full"
            height="500"
            frameborder="0"
            style="border:0"
            src="https://www.google.com/maps/embed/v1/place?q=place_id:EiFNZXNzZWdlbMOkbmRlLCA0NjAwIFdlbHMsIEF1c3RyaWEiLiosChQKEgk_R7Q5kPJzRxHUV9AWw6-3GRIUChIJmX0myqHyc0cRGH7sOE_IgOk&key=AIzaSyDcL7nJYp29MEVLF_VCzndbkEkqFKh1O3M"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  mounted() {},
  methods: {
    goTo(url) {
      window.location.href = url
    }
  }
}
</script>

<style>
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
@media (max-width: 599px) {
  .logo {
    width: 80%;
    margin: 0 auto;
  }
}
@media (max-width: 1024px) {
  .flex-bg {
    height: 100vh;
  }
}
</style>
