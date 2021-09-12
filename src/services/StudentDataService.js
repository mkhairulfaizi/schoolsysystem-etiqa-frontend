import http from '../http-common';

class StudentDataService {
  getAll() {
    return http.get("/student/list");
  }

  get(id) {
    return http.get(`/student/${id}`);
  }

  create(data) {
    return http.post("/student", data);
  }

  update(data) {
    return http.post("/student", data);
  }

  delete(id) {
    return http.delete(`/student/${id}`);
  }

}

export default new StudentDataService();