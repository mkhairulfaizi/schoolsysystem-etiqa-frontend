<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center mr-2">
        Student System
      </div>

      <v-btn to="/student/all" text>
        Students
      </v-btn>

      <v-btn to="/add" text>
        Add
      </v-btn>

      <v-btn to="/courses" text>
        Student Courses
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "app",
};
</script>