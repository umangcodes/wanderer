<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="triadicGlass" elevation="5" hover="true">
          <v-card-title> About Project: </v-card-title>
          <v-card-text>
            Demo project created by Umang A. This project is developed using
            vuetify components. The project does not use any backend tech and is
            solely for the purpose of demonstration. For more details visit
            <a href="https://vuetifyjs.com/en/" style="text-decoration: none">
              Vuetify</a
            >. For theme, colors and icons please visit
            <a href="https://material.io">MD</a>.
            <br />
            For any more details please contact the developer.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" lg="4">
        <v-card class="compGlass">
          <v-card-title> Latest changes </v-card-title>
          <v-card-text>
            <h3>Register module</h3>
            <ul>
              <li>Form validation</li>
              <li>Form actions</li>
              <li>Form spacing [removed redun. grid comp]</li>
            </ul></v-card-text
          >
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card class="anaGlass">
          <v-card-title> Git changes </v-card-title>
          <v-card-text>
            <h3><v-icon>mdi-github</v-icon> GitHub</h3>
            <ul>
              <li>active branch:lesson 7</li>
              <li>staging branch: staging</li>
              <li>dep branch: main</li>
            </ul></v-card-text
          >
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card class="compGlass">
          <v-card-title> Deployment </v-card-title>
          <v-card-text>
            <ul>
              <li>platform: vercel</li>
              <li>branch: main</li>
            </ul></v-card-text
          >
        </v-card>
      </v-col>
    </v-row>
    <v-row
      ><v-col><h1>Random stuff</h1></v-col></v-row
    >
    <v-row>
      <v-col cols="3"></v-col>
      <v-col cols="6">
        <v-card
          height="200"
          class="triadicGlass2"
          elevation="5"
          img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/launch-1529352838.jpg?crop=1.00xw:0.888xh;0,0.0643xh&resize=480:*"
        >
          <div class="cardContent">
            <v-card-title class="justify-center">
              Launch in 3, 2, 1 ....
            </v-card-title>
          </div>
        </v-card>
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.cardContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50%;
  background-color: rgba(255, 255, 255, 0.15);
}
</style>
