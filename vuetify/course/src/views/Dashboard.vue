<template>
  <v-card app class="pa-5 mx-auto">
    <v-data-table
      :headers="headers"
      :items="employees"
      item-key="name"
      class="elevation-1"
      :search="search"
      :custom-filter="filterOnlyCapsText"
      @click:row="selectRow"
    />
    <v-snackbar v-model="snackbar">
      You click on {{ currentItem }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      currentitem: "",
      search: "",
      calories: "",
      employees: [
        {
          id: 12875,
          name: "Dwight Schrute",
          title: "Assistant to the Regional Manager",
          salary: 65000,
        },
        {
          id: 14094,
          name: "Kelly Kapoor",
          title: "Customer Service Representative",
          salary: 40000,
        },
        {
          id: 12894,
          name: "Darryl Philbin",
          title: "Warehouse Foreman",
          salary: 68000,
        },
        {
          id: 13893,
          name: "Angela Martin",
          title: "Accountant",
          salary: 54000,
        },
        {
          id: 12943,
          name: "Phyllis Vance",
          title: "Saleswoman",
          salary: 65000,
        },
        {
          id: 19523,
          name: "Karen Filippeli",
          title: "Saleswoman",
          salary: 65000,
        },
        {
          id: 18349,
          name: "Toby Flenderson",
          title: "Human Resources Representative",
          salary: 60000,
        },
        {
          id: 11853,
          name: "Michael Scott",
          title: "Regional Manager",
          salary: 70000,
        },
        {
          id: 14821,
          name: "Pam Beasley",
          title: "Secretary",
          salary: 45000,
        },
        {
          id: 15834,
          name: "Jim Halpert",
          title: "Salesman",
          salary: 65000,
        },
      ],
    };
  },
  computed: {
    headers() {
      return [
        {
          text: "Employee Id",
          align: "start",
          sortable: true,
          value: "id",
        },
        {
          text: "Employee Name",
          value: "name",
        },
        { text: "Title", value: "title" },
        { text: "Salary", value: "salary" },
      ];
    },
  },
  methods: {
    filterOnlyCapsText(value, search) {
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value.toString().toLocaleUpperCase().indexOf(search) !== -1
      );
    },
    selectRow(event) {
      // eslint-disable-next-line prettier/prettier
      (this.snackbar = false),
        (this.snackbar = true),
        (this.currentItem = event.name);
    },
  },
};
</script>

<style scoped></style>
