import axios from "axios";

class UserService {
  constructor() {
    this.user = axios.create({
      baseURL: "http://localhost:5000/api/user",
      withCredentials: true,
    });
  }
  getUser(id) {
    const pr = this.user.get(`/${id}`).then(({ data }) => data);
    return pr;
  }

  updateUser(id,name,email) {
    const pr = this.user.put(`/${id}`, {name,email}).then(({ data }) => data);
    return pr;
  }

  deleteUser(id) {
    const pr = this.user.delete(`/${id}`).then(({ data }) => data);
    return pr; 
  }
}

const userService = new UserService();

export default userService;
