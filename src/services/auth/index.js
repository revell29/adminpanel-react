import request from "../request";

const loginRequest = async (data) => {
  return new Promise((resolve, reject) => {
    request
      .post(`/auth/login`, data, { withCredentials: true })
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};

const verifyUser = async (data) => {
  return new Promise((resolve, reject) => {
    request
      .post(`/auth/verify`, data, {
        withCredentials: true,
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};

export { loginRequest, verifyUser };
