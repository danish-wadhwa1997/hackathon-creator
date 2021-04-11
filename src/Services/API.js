import { get } from "axios";

const BASE_URL = "http://localhost:3000/";
const verifyEmployee = (employeeID) => {
  return get(`${BASE_URL}employee/${employeeID}`);
};

export const login = (employeeID) => {
  verifyEmployee(employeeID)
    .then((res) => {
      if (res.status === 200) {
        return true;
      }
    })
    .catch((error) => {
      return false;
    });
};

export const getChallenge = (id) => {
  return get(`${BASE_URL}challenges/${id}`);
};

export const getChallenges = () => {
  return get(`${BASE_URL}challenges`);
};

export const getFixedTags = () => {
  return get(`${BASE_URL}fixedTags`);
};
