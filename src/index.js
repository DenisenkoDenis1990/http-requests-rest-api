import './css/styles.css';
var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
import fetchCountries from './fetchCountries.js';
import Notiflix from 'notiflix';
import countryItemTempl from './tamplates/country-item-template.hbs';
import countryInfoTempl from './tamplates/country-info-template.hbs';

var helpers = require('handlebars-helpers');
var objectHelpers = helpers.object();

const refs = {
  inputEl: document.querySelector('#search-box'),
  countryListEl: document.querySelector('.country-list'),
  countryInfoEl: document.querySelector('.country-info'),
};

refs.inputEl.addEventListener('input', debounce(onClick, DEBOUNCE_DELAY));

function onClick(e) {
  //console.log(countryItemTempl(countries));
  refs.countryListEl.innerHTML = '';
  refs.countryInfoEl.innerHTML = '';
  fetchCountries(e.target.value.trim()).then(countries => {
    renderCountriesList(countries);
  });
}
function renderCountriesList(countries) {
  if (countries.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  } else if (countries.length >= 2 && countries.length <= 10) {
    const markup = countries.map(countryItemTempl).join('');
    refs.countryListEl.insertAdjacentHTML('beforeend', markup);
  } else if (countries.length === 1) {
    const markup = countries.map(countryInfoTempl).join('');
    refs.countryInfoEl.insertAdjacentHTML('beforeend', markup);
  }
}
