import axiosInstance from './axiosInstance';

// 전체 조회
export const getUsers = async () => {
  const res = await axiosInstance.get('/users');
  return res.data;
};

// 추가
export const addUser = async (user) => {
  const res = await axiosInstance.post('/users', user);
  return res.data;
};

// 수정
export const editUsers = async (id, user) => {
  const res = await axiosInstance.patch('/users/' + id, user);
  if(res.status!=200) alert('id not found');
};

// 삭제
export const delUser = async (id) => {
  const res = await axiosInstance.delete('/users/' + id);
  if(res.status!=200) alert('id not found');
};