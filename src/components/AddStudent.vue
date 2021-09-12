<template>
  <div class="submit-form mt-3 mx-auto">
    <p class="headline">Add Student</p>

    <div v-if="!submitted">
      <v-form ref="form" lazy-validation>
        <v-text-field
        v-model="student.name"
        :rules="[(v) => !!v || 'Name is required']"
        label="name"
        required
       ></v-text-field>

       <v-text-field
        v-model="student.icNo"
        :rules="[(v) => !!v || 'Ic No is required']"
        label="icNo"
        required
      ></v-text-field>

      <v-text-field
        v-model="student.phoneNo"
        :rules="[(v) => !!v || 'Phone No is required']"
        label="phoneNo"
        required
      ></v-text-field>

        <v-text-field
        v-model="student.cardId"
        :rules="[(v) => !!v || 'Student Card Id is required']"
        label="cardId"
        required
      ></v-text-field>

      </v-form>

      <v-btn color="primary" class="mt-3" @click="saveStudent">Submit</v-btn>
    </div>

    <div v-else>
      <v-card class="mx-auto">
        <v-card-title>
          Submitted successfully!
        </v-card-title>

        <v-card-subtitle>
          Click the button to add new Student.
        </v-card-subtitle>

        <v-card-actions>
          <v-btn color="success" @click="newStudent">Add</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import StudentDataService from "../services/StudentDataService";
export default {
  name: "add-Student",
  data() {
    return {
      student: {
        id: null,
        name: "",
        cardId: "",
        icNo: "",
        phoneNo: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveStudent() {
      var data = {
        title: this.student.id,
        name: this.student.name,
        cardId: this.student.cardId,
        icNo: this.student.icNo,
        phoneNo: this.student.phoneNo
      };
      StudentDataService.create(data)
        .then((response) => {
          this.student.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    newStudent() {
      this.submitted = false;
      this.student = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
}
</style>