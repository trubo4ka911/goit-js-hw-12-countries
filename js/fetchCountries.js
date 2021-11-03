'use strict';

import apiService from './apiService';
import countryCard from '../template/template.hbs';
import countriesList from '../template/countries.hbs';
import getRefs from './refs.js';
import { showAlert, ALERTS } from './alertError';

const refs = getRefs();

var debounce = require('lodash.debounce');

refs.input.addEventListener('input', debounce(country, 500));

function country(e) {
  const curentCountry = e.target.value;

  apiService(curentCountry)
    .then(data => {
      if (data.length >= 2 && data.length <= 10) {
        renderCountryList(data);
        return data;
      }
      if (data.length === 1) {
        renderCountryCard(data);
        return data;
      }
      // errorPopup();
      showAlert(ALERTS.MATCH_RESULTS, `${data.length} results`);
    })
    .then(function (data) {
      const population = document.getElementById('population');
      const indexPopulation = data[0].population;
      population.innerHTML = `${indexPopulation.toLocaleString()}`;
      const language = document.getElementById('language');
      const indexLanguage = data[0].languages;
      language.innerHTML = indexLanguage.map(l => `${l.name} (${l.iso639_1})`).join(', ');
    })
    .catch(showAlert(ALERTS.NOT_FOUND));
  // .finally(() => refs.form.reset());
}

function renderCountryCard(data) {
  const markup = countryCard(...data);
  refs.cardContainer.innerHTML = markup;
}

function renderCountryList(dataList) {
  const countriesName = dataList.map(item => item.name);
  const markup = countriesList({ countriesName });
  refs.cardContainer.innerHTML = markup;
}
