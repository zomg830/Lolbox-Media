import axios from "axios";

export default {
  getLolbox: () => axios.get("/api/lolbox/"),
  getUserLolbox: userId => axios.get("/api/users/" + userId),
  deleteLolboxItem: id => axios.delete("/api/lolbox/" + id),
  saveLolboxItem: lolboxData => axios.post("/api/lolbox", lolboxData),
  editLolbox: (id, lolboxData) => axios.put("/api/lolbox/" + id, lolboxData),
  signup: formProps => axios.post("/auth/signup", formProps),
  login: formProps => axios.post("/auth/login", formProps),
  getSession: token => axios.get("/auth", { headers: { authorization: token } })
};
