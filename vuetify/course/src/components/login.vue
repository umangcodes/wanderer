<template>
  <v-card width="400" class="mx-auto mt-5">
    <v-card-title>Login</v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          label="username"
          prepend-icon="mdi-account-circle"
          v-model="username"
        />
        <v-text-field
          label="password"
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="togglePassword"
          v-model="password"
        />
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="success">Register</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="info">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null,
      showPassword: false,
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    login() {}, // add login feature
    register() {}, // add register feature
  },
};
</script>
