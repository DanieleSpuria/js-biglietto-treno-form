let km = document.getElementById('km-da-percorrere').value;
let age = document.getElementById('eta').value;
const genera = document.querySelector('button');
console.log(km, age, genera);


const prezzoKm = 0.21;
let standard = prezzoKm * km;

genera.addEventListener('click', function() {
  
  let totale = standard;

  if (age === 'under18'){
    totale -= (standard / 100) * 20;
    console.log('totale',totale);
  }else if (age === 'over65'){
    totale -= (standard / 100) * 40;
    console.log('totale',totale);
  }else{
    console.log('totale',totale);
  }

});


