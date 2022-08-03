export default function onClick(e) {
  console.log(e.target.value);
  fetchCountries(e.target.value);
}
function fetchCountries(name) {
  return fetch(`https://restcountries.com/v2/${name}/${name}?fields=capital,currencies
`)
    .then(response => response.json())
    .then(response => console.log(response));
}
