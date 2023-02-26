import { API_KEY, baseUrl } from "constants.js";

export const randomNumber = (max, min = 0) => Math.floor(Math.random() * (max - min + 1) + min);

export const myFetch = (path, qs = "") => {
  return fetch(baseUrl + path + API_KEY + qs)
    .then((res) => res.json())
    .catch((error) => {
      if (error.response) {
        console.log("response error >>>", error.response.headers);
      } else if (error.request) {
        console.log("error request >>>", error.request);
      } else {
        console.log("message error >>>", error.message);
      }
    });
};

export const randomNoRepeats = (array) => {
  var copy = array.slice(0);

  return function () {
    if (copy.length < 1) {
      copy = array.slice(0);
    }
    var index = Math.floor(Math.random() * copy.length);
    var item = copy[index];
    copy.splice(index, 1);

    return item;
  };
};
