<template>
  <!--  start carousel section-->
  <v-carousel
      cycle
      height="600"
      hide-delimiter-background
      show-arrows="hover"
  >
    <v-carousel-item
        v-for="(item, i) in slideImage"
        :key="i"
        :src="item.src"
        cover
    ></v-carousel-item>
  </v-carousel>
  <!--  end carousel section-->

  <br/>

  <!--  start card section-->
  <v-container>
    <v-row class="fill-height" align="center" justify="center">
      <v-col cols="12" md="4">
        <v-card class="mx-auto" max-width="600">
          <v-img
              class="align-end text-white"
              height="200"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              cover
          >
            <v-card-title>Top 10 Australian beaches</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4"> Number 10</v-card-subtitle>

          <v-card-text>
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange"> Share</v-btn>

            <v-btn color="orange"> Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="mx-auto" max-width="600">
          <v-img
              class="align-end text-white"
              height="200"
              src="https://images.unsplash.com/photo-1549851991-5b5c9c586f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              cover
          >
            <v-card-title>Top 10 Australian beaches</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4"> Number 10</v-card-subtitle>

          <v-card-text>
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange"> Share</v-btn>

            <v-btn color="orange"> Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="mx-auto" max-width="600">
          <v-img
              class="align-end text-white"
              height="200"
              src="https://images.unsplash.com/photo-1615543892746-9168e2e37eb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              cover
          >
            <v-card-title>Top 10 Australian beaches</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4"> Number 10</v-card-subtitle>

          <v-card-text>
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange"> Share</v-btn>

            <v-btn color="orange"> Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <!--  start card section-->

  <!--  start tours section-->
  <v-container>
    <div class="mb-10">
      <p class="text-h3 text-center">
        <span class="text-orange">Top Tours</span> For You
      </p>
      <p class="text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
        autem quaerat fugit? Consectetur aperiam voluptates, quasi numquam
        assumenda sint ipsum!.
      </p>
    </div>
    <v-row>
      <v-col cols="12" md="3">
        <v-card class="mx-auto" color="" max-width="600" v-bind="props">
          <v-img
              :aspect-ratio="16 / 9"
              cover
              src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
          >
          </v-img>

          <v-card-text class="pt-6" style="position: relative">
            <div class="font-weight-light text-grey text-h6 mb-2">
              Burij Khalifa
            </div>
            <h3 class="font-weight-light mb-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </h3>
            <div class="text-h6 mb-2 d-flex justify-space-between">
              <div class="font-weight-bold">Dubai,UAE</div>
              <div class="font-weight-bold">$80,000</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="mx-auto" color="" max-width="600" v-bind="props">
          <v-img
              :aspect-ratio="16 / 9"
              cover
              src="https://images.unsplash.com/photo-1596422434223-df6d933dfe52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          >
          </v-img>

          <v-card-text class="pt-6" style="position: relative">
            <div class="font-weight-light text-grey text-h6 mb-2">
              Burij Khalifa
            </div>
            <h3 class="font-weight-light mb-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </h3>
            <div class="text-h6 mb-2 d-flex justify-space-between">
              <div class="font-weight-bold">Dubai,UAE</div>
              <div class="font-weight-bold">$80,000</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="mx-auto" color="" max-width="600" v-bind="props">
          <v-img
              :aspect-ratio="16 / 9"
              cover
              src="https://images.unsplash.com/photo-1521791599124-2b274f9a52c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
          >
          </v-img>

          <v-card-text class="pt-6" style="position: relative">
            <div class="font-weight-light text-grey text-h6 mb-2">
              Burij Khalifa
            </div>
            <h3 class="font-weight-light mb-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </h3>
            <div class="text-h6 mb-2 d-flex justify-space-between">
              <div class="font-weight-bold">Dubai,UAE</div>
              <div class="font-weight-bold">$80,000</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="mx-auto" color="" max-width="600" v-bind="props">
          <v-img
              :aspect-ratio="16 / 9"
              cover
              src="https://images.unsplash.com/photo-1526308422422-6a57b9567eff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          >
          </v-img>

          <v-card-text class="pt-6" style="position: relative">
            <div class="font-weight-light text-grey text-h6 mb-2">
              Burij Khalifa
            </div>
            <h3 class="font-weight-light mb-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </h3>
            <div class="text-h6 mb-2 d-flex justify-space-between">
              <div class="font-weight-bold">Dubai,UAE</div>
              <div class="font-weight-bold">$80,000</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="3">
        <v-card class="mx-auto" color="" max-width="600" v-bind="props">
          <v-img
              :aspect-ratio="16 / 9"
              cover
              src="https://images.unsplash.com/photo-1590523277398-53f5cccc8996?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          >
          </v-img>

          <v-card-text class="pt-6" style="position: relative">
            <div class="font-weight-light text-grey text-h6 mb-2">
              Burij Khalifa
            </div>
            <h3 class="font-weight-light mb-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </h3>
            <div class="text-h6 mb-2 d-flex justify-space-between">
              <div class="font-weight-bold">Dubai,UAE</div>
              <div class="font-weight-bold">$80,000</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="mx-auto" color="" max-width="600" v-bind="props">
          <v-img
              :aspect-ratio="16 / 9"
              cover
              src="https://images.unsplash.com/photo-1592193771708-d520bef0a78d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          >
          </v-img>

          <v-card-text class="pt-6" style="position: relative">
            <div class="font-weight-light text-grey text-h6 mb-2">
              Burij Khalifa
            </div>
            <h3 class="font-weight-light mb-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </h3>
            <div class="text-h6 mb-2 d-flex justify-space-between">
              <div class="font-weight-bold">Dubai,UAE</div>
              <div class="font-weight-bold">$80,000</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="mx-auto" color="" max-width="600" v-bind="props">
          <v-img
              :aspect-ratio="16 / 9"
              cover
              src="https://images.unsplash.com/photo-1531012451721-432c0ae74527?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          >
          </v-img>

          <v-card-text class="pt-6" style="position: relative">
            <div class="font-weight-light text-grey text-h6 mb-2">
              Burij Khalifa
            </div>
            <h3 class="font-weight-light mb-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </h3>
            <div class="text-h6 mb-2 d-flex justify-space-between">
              <div class="font-weight-bold">Dubai,UAE</div>
              <div class="font-weight-bold">$80,000</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="mx-auto" color="" max-width="600" v-bind="props">
          <v-img
              :aspect-ratio="16 / 9"
              cover
              src="https://images.unsplash.com/photo-1621787084911-63ea336fa93b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          >
          </v-img>

          <v-card-text class="pt-6" style="position: relative">
            <div class="font-weight-light text-grey text-h6 mb-2">
              Burij Khalifa
            </div>
            <h3 class="font-weight-light mb-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </h3>
            <div class="text-h6 mb-2 d-flex justify-space-between">
              <div class="font-weight-bold">Dubai,UAE</div>
              <div class="font-weight-bold">$80,000</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <!--  end tours section-->

  <!-- start footer section-->
  <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column">

    <div>
      <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          :icon="icon"
          variant="text"
      ></v-btn>
    </div>

    <div class="pt-0">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
      Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
      accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a
      sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
      lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
      iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor
      vel ut orci. Orci varius natoque penatibus et magnis dis parturient
      montes, nascetur ridiculus mus.
    </div>

    <v-divider></v-divider>
    <div>{{ new Date().getFullYear() }} — <strong>Vuetify</strong></div>

  </v-footer>
  <!-- End footer section-->

</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      slideImage: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    }
  }
}
</script>

<style scoped>
.v-footer {
  flex: none;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>