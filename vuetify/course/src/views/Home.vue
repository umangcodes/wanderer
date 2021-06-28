<template>
  <v-container>
    <h1 class="pa-5">
      with spacer
      <v-icon>mdi-arrow-down-thick</v-icon>
    </h1>
    <v-row>
      <v-col>
        <v-card class="cardColor">
          <h1 class="pa-5">Card 1</h1>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
      <v-col>
        <v-card class="cardColor">
          <h1 class="pa-5">Card 2</h1>
        </v-card>
      </v-col>
    </v-row>
    <h1 class="pa-5">
      without spacer
      <v-icon>mdi-arrow-down-thick</v-icon>
    </h1>
    <v-row>
      <v-col>
        <v-card class="cardColor">
          <h1 class="pa-5">Card 1</h1>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="cardColor">
          <h1 class="pa-5">Card 2</h1>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  components: {},
};
</script>
