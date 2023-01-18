export const save = function (key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};

export const get = function (key) {
  return JSON.parse(localStorage.getItem(key));
};
