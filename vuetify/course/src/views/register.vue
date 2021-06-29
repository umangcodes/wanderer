<template>
  <v-container>
    <v-card class="ma-5 pa-5">
      <v-card-title>
        Register
        <v-icon>mdi-pen-plus</v-icon>
      </v-card-title>
      <v-card-text>
        <!-- Username -->
        <v-form>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="userName"
                label="Your name *"
                prepend-icon="mdi-account"
                :rules="userNameRules"
                required
              >
              </v-text-field>
              <v-autocomplete
                label="Where did you hear about us? *"
                prepend-icon="mdi-account-group-outline"
                :items="references"
              ></v-autocomplete>

              <v-text-field
                v-model="email"
                label="Your email *"
                prepend-icon="mdi-email"
                :rules="emailRules"
                required
              >
              </v-text-field>
              <v-file-input label="Demo file input"> </v-file-input>

              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Pick a special date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    color="black"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="specialDate" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text @click="modal = false"> Cancel </v-btn>
                  <v-btn text @click="$refs.dialog.save(date)"> OK </v-btn>
                </v-date-picker>
              </v-dialog>
              <v-checkbox
                v-model="acceptTerms"
                label="Please accept terms and conditions"
                :rules="acceptTermsRules"
              ></v-checkbox>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-form>
          <v-row>
            <v-col>
              <v-btn type="submit" color="success">Submit</v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
              <v-btn color="warning">Reset Validation</v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
              <v-btn color="error">Reset</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-actions>
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
      email: "",
      emailRules: [
        (value) => !!value || "Email is required.",
        (value) => value.indexOf("@") !== 0 || "email is invalid",
        (value) => value.includes("@") || "email is invalid.",
        (value) =>
          value.indexOf(".") - value.indexOf("@") > 3 || "Invalid domain name.",
        (value) =>
          value.indexOf(".") <= value.length - 3 || "Invalid domain extension",
      ],
      acceptTerms: false,
      acceptTermsRules: [(value) => !!value || "Please accept to continue."],
      userNameRules: [
        (value) => !!value || "Please provide a valid name",
        (value) => value.length >= 2 || "Username must be atleast 2 letters",
      ],
      menu: false,
      modal: false,
      menu2: false,
    };
  },
};
</script>

<style scoped></style>
