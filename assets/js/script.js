let name = document.getElementById('name');
let km = document.getElementById('km-da-percorrere');
let age = document.getElementById('eta');

const genera = document.getElementById('bottone1');
const reset = document.getElementById('bottone2');
console.log(name, km, age, genera, reset);

const prezzoKm = 0.21;
let standard = prezzoKm * km.value;

// Button1
genera.addEventListener('click', function() {
  
  let totale = standard;

  if (age.value === 'under18'){
    totale -= (standard / 100) * 20;
    document.getElementById('offerta').innerHTML = 'Biglietto Under18';
    console.log('totale',totale);
  }else if (age.value === 'over65'){
    totale -= (standard / 100) * 40;
    document.getElementById('offerta').innerHTML = 'Biglietto Over65';
    console.log('totale',totale);
  }else{
    document.getElementById('offerta').innerHTML = 'Biglietto Standard';
    console.log('totale',totale);
  }

  document.getElementById('biglietto').classList.add('d-block');
  document.getElementById('passeggero').innerHTML = name.value;
  document.getElementById('carrozza').innerHTML = (Math.random() * 100).toFixed();
  document.getElementById('cp').innerHTML = (Math.random() * 100000).toFixed();
  document.getElementById('costo').innerHTML = totale.toFixed(2) + '&euro;';
});

// Button2
reset.addEventListener('click', function() {

  name.value = '';
  km.value = '';
  age.value = 'default';
  document.getElementById('biglietto').classList.remove('d-block');
})




