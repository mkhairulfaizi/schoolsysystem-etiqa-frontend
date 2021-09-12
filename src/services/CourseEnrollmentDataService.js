import http from '../http-common';

class CourseEnrollmentDataService {

  getByStudentId(studentId) {
    //return http.get('/course-enrollment', {param : { 'student-id': studentId}});
    return http.get(`/course-enrollment/student/${studentId}`);
  }

}

export default new CourseEnrollmentDataService();