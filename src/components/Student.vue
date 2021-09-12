<template>
  <div v-if="currentStudent" class="edit-form py-3">
    <p class="headline">Edit Tutorial</p>

    <v-form ref="form" lazy-validation>
      <v-text-field
        v-model="currentStudent.name"
        :rules="[(v) => !!v || 'Name is required']"
        label="name"
        required
      ></v-text-field>

      <v-text-field
        v-model="currentStudent.icNo"
        :rules="[(v) => !!v || 'Ic No is required']"
        label="icNo"
        required
      ></v-text-field>

      <v-text-field
        v-model="currentStudent.phoneNo"
        :rules="[(v) => !!v || 'Phone No is required']"
        label="phoneNo"
        required
      ></v-text-field>

        <v-text-field
        v-model="currentStudent.cardId"
        :rules="[(v) => !!v || 'Student Card Id is required']"
        label="cardId"
        required
      ></v-text-field>

      <v-btn color="error" small class="mr-2" @click="deleteStudent">
        Delete
      </v-btn>

      <v-btn color="success" small @click="updateStudent">
        Update
      </v-btn>
    </v-form>

    <p class="mt-3">{{ message }}</p>
  </div>

  <div v-else>
    <p>Please click on a Student...</p>
  </div>
</template>

<script>
import StudentDataService from "../services/StudentDataService";
export default {
  name: "student",
  data() {
    return {
      currentStudent: null,
      message: "",
    };
  },
  methods: {
    getStudent(id) {
      StudentDataService.get(id)
        .then((response) => {
          this.currentStudent = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updateStudent() {
      StudentDataService.update(this.currentStudent)
        .then((response) => {
          console.log(response.data);
          this.message = "The Student was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteStudent() {
      StudentDataService.delete(this.currentStudent.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "students" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getStudent(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>