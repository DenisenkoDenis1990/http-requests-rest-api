import './css/styles.css';
var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
import onClick from './fetchCountries.js';

const refs = {
  inputEl: document.querySelector('#search-box'),
  countryListEl: document.querySelector('.country-list'),
  countryInfoEl: document.querySelector('.country-info'),
};

refs.inputEl.addEventListener('input', debounce(onClick, DEBOUNCE_DELAY));
