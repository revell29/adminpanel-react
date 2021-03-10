import request from '../request';

const getAllKelas = async () => {
  return new Promise((resolve, reject) => {
    request
      .get(`/kelas/all`, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};

export { getAllKelas };
