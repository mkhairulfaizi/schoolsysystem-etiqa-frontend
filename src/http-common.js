import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/v1/school",
  headers: {
  "Content-type": "application/json"
  }
});