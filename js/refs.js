'use strict';

export default function getRefs() {
  return {
    form: document.getElementById('countries'),
    cardContainer: document.querySelector('.map-result'),
    countriesList: document.getElementById('countries'),
    input: document.querySelector('input'),
  };
}
