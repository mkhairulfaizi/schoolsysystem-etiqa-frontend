<template>
  <v-row align="center" class="list px-3 mx-auto">
    <v-col cols="12" md="8">
      <v-text-field v-model="id" label="Search by Student Id"></v-text-field>
    </v-col>

    <v-col cols="12" md="4">
      <v-btn small @click="searchId">
        Search
      </v-btn>
    </v-col>

    <v-col cols="12" sm="12">
      <v-card class="mx-auto" tile>
        <v-card-title>Students</v-card-title>

        <v-data-table
          :headers="headers"
          :items="students"
          disable-pagination
          :hide-default-footer="true"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editStudent(item.id)">mdi-pencil</v-icon>
            <v-icon small @click="deleteStudent(item.id)">mdi-delete</v-icon>
          </template>
        </v-data-table>

      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import StudentDataService from "../services/StudentDataService";
export default {
  name: "students-list",
  data() {
    return {
      students: [],
      id: "",
      headers: [
        { text: "Id", align: "start", sortable: false, value: "id" },
        { text: "Card Id", value: "cardId", sortable: false },
        { text: "Name", value: "name", sortable: false },
        { text: "Phone", value: "phoneNo", sortable: false },
        { text: "Ic No", value: "icNo", sortable: false },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    retrieveStudents() {
      StudentDataService.getAll()
        .then((response) => {
          this.students = response.data.map(this.getDisplayStudent);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveStudents();
    },
    editStudent(id) {
      this.$router.push({ name: "student-details", params: { id: id } });
    },
    deleteStudent(id) {
      StudentDataService.delete(id)
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    searchId() {
      StudentDataService.get(this.id)
        .then((response) => {
          console.log(response.data);
          this.students = [];
          this.students[0] = this.getDisplayStudent(response.data);
        })
        .catch((e) => {
          alert ("Student Id Record Not Found");
          console.log(e);
        });
    },
    getDisplayStudent(student) {
      return {
        id: student.id,
        cardId: student.cardId,
        name: student.name,
        phoneNo: student.phoneNo,
        icNo: student.icNo,
      };
    },
  },
  mounted() {
    this.retrieveStudents();
  },
};
</script>

<style>
.list {
  max-width: 750px;
}
</style>