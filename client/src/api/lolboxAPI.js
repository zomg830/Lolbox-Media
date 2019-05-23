import axios from "axios";

export default {
  getLolbox: function() {
    return axios.get("/api/lolbox/");
  },
  getUserLolbox: function(userId) {
    return axios.get("/api/users/" + userId);
  },
  getLolboxById: function(id) {
    return axios.get("/api/lolbox/" + id);
  },
  deleteLolbox: function(id) {
    return axios.delete("/api/lolbox/" + id);
  },
  saveLolbox: function(lolboxData) {
    return axios.post("/api/lolbox", lolboxData);
  },
  editLolbox: function(id, lolboxData) {
    return axios.put("/api/lolbox/" + id, lolboxData);
  }
};
