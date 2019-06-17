import axios from "axios";

export default {
  getLolbox: () => axios.get(`/api/lolbox/`),
  getUserLolbox: userId => axios.get(`/api/users/${userId}`),
  deleteLolboxItem: (userId, id) => axios.delete(`/api/lolbox/${userId}/${id}`),
  saveLolboxItem: lolboxData => axios.post("/api/lolbox", lolboxData),
  editLolbox: (id, lolboxData) => axios.put(`/api/lolbox/${id}`, lolboxData),
  signup: formProps => axios.post("/auth/signup", formProps),
  login: formProps => axios.post("/auth/login", formProps),
  getSession: token =>
    axios.get("/auth", { headers: { authorization: token } }),
  postComment: (userId, id, username, comment) =>
    axios.put(`/comment/${userId}/${id}`, { username, comment }),
  fetchComments: id => axios.get(`/comment/${id}`)
};
