import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/student/all",
      name: "students",
      component: () => import("./components/StudentList")
    },
    {
      path: "/student/:id",
      name: "student-details",
      component: () => import("./components/Student")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddStudent")
    },
    {
      path: "/courses",
      name: "student-course",
      component: () => import("./components/CourseEncrollmentList")
    }
  ]
});