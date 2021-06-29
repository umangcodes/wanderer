<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="triadicGlass" elevation="5" hover="true">
          <v-card-title> About Project: </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            officia dolore officiis tempore id impedit adipisci expedita minus
            laudantium inventore fugiat nemo eligendi asperiores ipsum doloribus
            optio maiores necessitatibus nam assumenda perspiciatis nostrum, in
            mollitia dolor! Aliquam a excepturi natus quia voluptate iure, sint
            maxime nemo minus similique. Neque cum, natus quam quibusdam omnis
            iusto eos ullam! Similique, itaque voluptatem exercitationem impedit
            autem beatae obcaecati esse doloribus cum, nulla illo nobis
            delectus, eius hic veritatis eveniet! Provident autem voluptas
            tempore expedita eos beatae est voluptatibus dignissimos corrupti
            temporibus, earum quaerat fuga cupiditate nisi architecto odit
            reiciendis maxime sequi laborum porro.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" lg="4">
        <v-card class="compGlass">
          <v-card-title> Card 1 </v-card-title>
          <v-card-text
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            molestiae vel ullam, qui quam quod non amet. Inventore, corrupti
            sapiente.</v-card-text
          >
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card class="anaGlass">
          <v-card-title> Card 2 </v-card-title>
          <v-card-text
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            molestiae vel ullam, qui quam quod non amet. Inventore, corrupti
            sapiente.</v-card-text
          >
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card class="compGlass">
          <v-card-title> Card 3 </v-card-title>
          <v-card-text
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            molestiae vel ullam, qui quam quod non amet. Inventore, corrupti
            sapiente.</v-card-text
          >
        </v-card>
      </v-col>
    </v-row>
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
