const osoba1 = {
  jmeno: 'Alena',
  uspory: 50000
}
const osoba2 = {
  jmeno: 'Karolína',
  uspory: 10000
}


const celkem = osoba1.uspory + osoba2.uspory;
console.log(celkem)

if (celkem >= 100000) {
  if (osoba1.uspory >= 50000 && osoba2.uspory >= 50000) {
    console.log("Máte dostatek peněz")
  }
  else if (osoba1.uspory < 50000) {
    console.log(`${osoba1.jmeno} dluží ${50000 - osoba1.uspory}`)
  } else {
    console.log(`${osoba2.jmeno} dluží ${50000 - osoba2.uspory}`)
  }
} else {
  console.log(`Kamaradkam chybi ${100000 - celkem}`);
  if (osoba1.uspory < 50000) {
    console.log(`${osoba1.jmeno} musí naspořit ${50000 - osoba1.uspory}`);
  }
  if (osoba2.uspory < 50000) {
    console.log(`${osoba2.jmeno} musí naspořit ${50000 - osoba2.uspory}`)
  }
}