let name = document.getElementById('name').value;
let km = document.getElementById('km-da-percorrere').value;
let age = document.getElementById('eta').value;
const genera = document.getElementById('bottone1');
const reset = document.getElementById('bottone2');
console.log(name, km, age, genera, reset);

const prezzoKm = 0.21;
let standard = prezzoKm * km;

// Button1
genera.addEventListener('click', function() {
  
  let totale = standard;

  if (age === 'under18'){
    totale -= (standard / 100) * 20;
    document.getElementById('offerta').innerHTML = 'Biglietto Under18';
    console.log('totale',totale);
  }else if (age === 'over65'){
    totale -= (standard / 100) * 40;
    document.getElementById('offerta').innerHTML = 'Biglietto Over65';
    console.log('totale',totale);
  }else{
    document.getElementById('offerta').innerHTML = 'Biglietto Standard';
    console.log('totale',totale);
  }

  document.getElementById('biglietto').classList.add('d-block');
  document.getElementById('passeggero').innerHTML = name;
  document.getElementById('carrozza').innerHTML = (Math.random() * 100).toFixed();
  document.getElementById('cp').innerHTML = (Math.random() * 100000).toFixed();
  document.getElementById('costo').innerHTML = totale.toFixed(2) + '&euro;';
});

// Button2
reset.addEventListener('click', function() {

  name.innerHTML = '';
  km.innerHTML = 0;
  age.innerHTML = 'default';
  document.getElementById('biglietto').classList.remove('d-block');
})




