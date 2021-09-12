<template>
<v-row align="center" class="list px-3 mx-auto">
    <v-col cols="12" md="8">
        <v-text-field v-model="id" label="Search Course by Student Id"></v-text-field>
    </v-col>

    <v-col cols="12" md="4">
        <v-btn small @click="searchId">
            Search
        </v-btn>
    </v-col>

    <v-col cols="12" sm="12">
        <v-card class="mx-auto" tile>
            <v-card-title>Course Enroll By Student</v-card-title>

            <v-data-table :headers="headers" :items="studentcourses" disable-pagination :hide-default-footer="true">
            </v-data-table>

        </v-card>
    </v-col>
</v-row>
</template>

<script>
import CourseEnrollmentDataService from "../services/CourseEnrollmentDataService";
export default {
    name: "studentcourses-list",
    data() {
        return {
            studentcourses: [],
            id: "",
            headers: [
                {
                    text: "Course Id",
                    value: "courseId",
                    align: "start",
                    sortable: false,
                },
                {
                    text: "Course Code",
                    value: "courseCode",
                    sortable: false
                },
                {
                    text: "Course Name",
                    value: "courseName",
                    sortable: false
                },
                {
                    text: "Tutor Id",
                    value: "tutorId",
                    sortable: false
                },
                {
                    text: "Tutor Name",
                    value: "tutorName",
                    sortable: false
                },
                {
                    text: "Tutor Phone No",
                    value: "tutorPhoneNo",
                    sortable: false
                }
            ],
        };
    },
    methods: {
        searchId() {
            console.log(`request search id `, this.id);
            CourseEnrollmentDataService.getByStudentId(this.id)
                .then((response) => {
                    console.log(response.data);
                    this.studentcourses = response.data.courses.map(this.getDisplayCourses);
                })
                .catch((e) => {
                    alert("Student Id Record Not Found");
                    console.log(e);
                });

        },
        getDisplayCourses(studentcourses) {
            return {
                //id: this.id,
                courseId: studentcourses.courseId,
                courseCode: studentcourses.courseCode,
                courseName: studentcourses.courseName,
                tutorId: studentcourses.tutorId,
                tutorName: studentcourses.tutorName,
                tutorPhoneNo: studentcourses.tutorPhoneNo,
            };
        },
    },
};
</script>

<style>
.list {
    max-width: 750px;
}
</style>
