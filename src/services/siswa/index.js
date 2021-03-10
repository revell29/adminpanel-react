import request from '../request';

const getAllSiswa = async (page, pageSize, query = '') => {
  return new Promise((resolve, reject) => {
    request
      .get(`/siswa/all?page=${page}&pageSize=${pageSize}&search=${query}`, {
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

const createSiswa = async (data) => {
  return new Promise((resolve, reject) => {
    request
      .post(`/siswa`, data, { withCredentials: true })
      .then((res) => resolve(res.data))
      .catch((err) => reject(err.response));
  });
};

export { getAllSiswa, createSiswa };
