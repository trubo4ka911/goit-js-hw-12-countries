'use strict';

// function apiService(name) {
//   const apiService = new Promise((resolve, reject) => {
//     fetch(`https://restcountries.com/v2/name/${name}`).then(responce => responce.json());
//   });
//   return apiService;
// }

function apiService(curentCountry) {
  try {
    const data = fetch(`https://restcountries.com/v2/name/${curentCountry}`).then(response =>
      response.json(),
    );
    return data;
  } catch (error) {
    console.log(error);
  }

  // return apiService;
}

export default apiService;
