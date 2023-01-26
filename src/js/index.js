import axios from 'axios';
const root = document.querySelector('.list__methods');
const BASE_URL = 'http://localhost:3000';
let someID;

// ======================================================
// ======================================================
// =================== FETCH ============================
// ======================================================

// const getAllUsers = function () {
//   return fetch(`${BASE_URL}/users`)
//     .then(response => {
//       // if (!response.ok) {
//       //   throw new Error('Bad Request');
//       // }
//       return response.json();
//     })
//     .then(({ data }) => {
//       console.log(data);
//       someID = data[2].id;
//     })
//     .catch(err => console.log(err));
// };

// const getOneUser = function () {
//   return fetch(`${BASE_URL}/user/${someID}`)
//     .then(response => {
//       return response.json();
//     })
//     .then(({ data }) => {
//       console.log(data);
//     })
//     .catch(err => console.log(err));
// };

// const addOneUser = function () {
//   return fetch(`${BASE_URL}/user`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       login: 'some@domain.com',
//       rules: 'manager',
//     }),
//   })
//     .then(response => {
//       return response.json();
//     })
//     .then(({ data }) => {
//       console.log(data);
//     })
//     .catch(err => console.log(err));
// };

// // const updateOneUser = function () {
// //   return fetch(`${BASE_URL}/user/${someID}`, {
// //     method: 'PUT',
// //     headers: {
// //       'Content-Type': 'application/json',
// //     },
// //     body: JSON.stringify({
// //       login: 'wwwwwwwwwwww@domain.com',
// //       rules: 'manager',
// //     }),
// //   })
// //     .then(response => {
// //       return response.json();
// //     })
// //     .then(({ data }) => {
// //       console.log(data);
// //     })
// //     .catch(err => console.log(err));
// // };

// const updateOneUser = function () {
//   return fetch(`${BASE_URL}/user`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       login: 'dddddww@domain.com',
//       rules: 'manager',
//     }),
//   })
//     .then(response => {
//       return response.json();
//     })
//     .then(({ data }) => {
//       console.log(data);
//     })
//     .catch(err => console.log(err));
// };

// const patchOneUser = function () {
//   return fetch(`${BASE_URL}/user/${someID}`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       login: '2222222@domain.com',
//       rules: 'admin',
//     }),
//   })
//     .then(response => {
//       return response.json();
//     })
//     .then(({ data }) => {
//       console.log(data);
//     })
//     .catch(err => console.log(err));
// };

// const deleteOneUser = function () {
//   return fetch(`${BASE_URL}/user/${someID}`, {
//     method: 'DELETE',
//   })
//     .then(response => {
//       return response.json();
//     })
//     .then(({ data }) => {
//       console.log(data);
//     })
//     .catch(err => console.log(err));
// };

// ======================================================
// ======================================================
// =================== AXIOS ============================
// ======================================================

// axios({
// url: "http://....."
// method: "post",
// data: {}
// headers: {
//
//}
//});

// axios.get(url, data, option)
// axios.post(url, data, option);
// axios.put(url, data, option);
// axios.delete(url, data, option);

const httpAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getAllUsers = function () {
  return axios(`${BASE_URL}/users`)
    .then(({ data }) => {
      console.log(data.data);
      someID = data.data[2].id;
    })
    .catch(err => console.log(err));
};

const getOneUser = function () {
  return axios
    .get(`${BASE_URL}/user/${someID}`)
    .then(({ data }) => {
      console.log(data.data);
    })
    .catch(err => console.log(err));
};

const addOneUser = function () {
  return axios({
    url: `${BASE_URL}/user`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      login: '2222222@domain.com',
      rules: 'admin',
    },
  })
    .then(({ data }) => console.log(data))
    .catch(err => console.log(err));
};

const updateOneUser = function () {
  return axios
    .put(
      `${BASE_URL}/user/${someID}`,
      {
        login: '111112@domain.com',
        rules: 'manager',
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    .then(({ data }) => {
      console.log(data.data);
    })
    .catch(err => console.log(err));
};

const patchOneUser = function () {
  return httpAPI
    .patch(`/user/${someID}`, {
      login: 'ffffff@domain.com',
      rules: 'user',
    })
    .then(({ data }) => {
      console.log(data.data);
    })
    .catch(err => console.log(err));
};

const deleteOneUser = function () {
  return httpAPI
    .delete(`/user/${someID}`)
    .then(({ data }) => {
      console.log(data.data);
    })
    .catch(err => console.log(err));
};

const onClick = event => {
  if (event.target.nodeName === 'BUTTON') {
    switch (event.target.classList[1]) {
      case 'get__all': {
        getAllUsers();
        break;
      }
      case 'get': {
        getOneUser();
        break;
      }
      case 'post': {
        addOneUser();
        break;
      }
      case 'put': {
        updateOneUser();
        break;
      }
      case 'patch': {
        patchOneUser();
        break;
      }
      case 'delete': {
        deleteOneUser();
        break;
      }
    }
  }
};

root.addEventListener('click', onClick);
