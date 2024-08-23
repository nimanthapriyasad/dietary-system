import { axiosClient, resolver } from "../client";

export default {
  signInUser(data) {
    return resolver(axiosClient.post("/user/login", data));
  },
  signUpUser(data) {
    return resolver(axiosClient.post("/user/admin/add-moderator", data));
  },
  getUser(userId) {
    return resolver(axiosClient.get(`/user/${userId}`));
  },
  getAllUsers() {
    return resolver(axiosClient.get("/user/admin/mod-info"));
  },
  removeUser() {
    return resolver(axiosClient.delete("/user/admin/mod-info"));
  },
  updateIsActive(email, isActive) {
    const data = { email: email, isActive: isActive };
    return resolver(axiosClient.post("/user/admin/mod-info", data));
  },
};
