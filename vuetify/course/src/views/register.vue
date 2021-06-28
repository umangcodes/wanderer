<template>
  <v-container>
    <v-card class="ma-5 pa-5">
      <v-row
        ><v-col> <h1 class="pa-5">Register</h1> </v-col></v-row
      >
      <v-row>
        <v-col cols="0" md="2"></v-col>
        <v-col cols="12" md="8">
          <v-text-field
            v-model="userName"
            label="Your name"
            prepend-icon="mdi-account"
            :rules="userNameRules"
          >
          </v-text-field>
        </v-col>
        <v-col cols="0" md="2"></v-col>
      </v-row>
      <v-row>
        <v-col cols="0" md="2"></v-col>
        <v-col cols="12" md="8">
          <v-autocomplete
            label="Where did you hear about us?"
            prepend-icon="mdi-account-group-outline"
            :items="references"
          ></v-autocomplete>
        </v-col>
        <v-col cols="0" md="2"></v-col>
      </v-row>
      <v-row>
        <v-col cols="0" md="2"></v-col>
        <v-col cols="12" md="8">
          <v-file-input label="Demo file input"> </v-file-input>
        </v-col>
        <v-col cols="0" md="2"></v-col>
      </v-row>
      <v-row>
        <v-col cols="0" md="2"></v-col>
        <v-col cols="12" md="8">
          <v-text-field
            label="Pick a Special Date"
            v-model="specialDate"
            prepend-icon="mdi-calendar-range"
            readonly
          ></v-text-field>
        </v-col>
        <v-col cols="0" md="2"></v-col>
      </v-row>

      <v-row>
        <v-col cols="0" md="2"></v-col>
        <v-col cols="12" md="8">
          <v-date-picker
            v-model="specialDate"
            justify="center"
            label="Pick a Special Date"
            color="rgba(209, 122, 34, 0.5)"
          >
          </v-date-picker>
        </v-col>
        <v-col cols="0" md="2"></v-col>
      </v-row>

      <v-row>
        <v-col cols="0" md="2"></v-col>
        <v-col cols="12" md="8">
          <v-checkbox
            v-model="acceptTerms"
            label="Please accept terms and conditions"
            :rules="acceptTermsRules"
          ></v-checkbox>
        </v-col>
        <v-col cols="0" md="2"></v-col>
      </v-row>
      <v-row>
        <v-col cols="0" md="2"></v-col>
        <v-col cols="12" md="8">
          <v-btn type="submit">Submit</v-btn>
        </v-col>
        <v-col cols="0" md="2"></v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      references: ["Social Media", "Educational Websites", "others"],
      specialDate: "",
      userName: "",
      acceptTerms: false,
      acceptTermsRules: [(value) => !!value || "Please accept to continue."],
      userNameRules: [
        (value) => !!value || "Please provide a valid name",
        (value) => value.length >= 2 || "Username must be atleast 2 letters",
      ],
    };
  },
};
</script>

<style scoped></style>
