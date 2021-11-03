'use strict';

function apiService(curentCountry) {
  try {
    const data = fetch(`https://restcountries.com/v2/name/${curentCountry}`).then(response =>
      response.json(),
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default apiService;
