import { header } from '../components/header.js'
import { footer } from '../components/footer.js'
document.querySelector('#header').innerHTML = header();
document.querySelector('#footer').innerHTML = footer();
let data = JSON.parse(localStorage.getItem("mycart"));
document.querySelector('#mycart').innerText = data[0];

document.querySelector('#checkout>form').addEventListener('submit', e => {
  e.preventDefault();
  setTimeout(() => {
    alert("Subscribing to magazine for 1 year");
  }, 1500);
  setTimeout(() => {
    alert("Subscribtion successful");
  }, 3000);
});