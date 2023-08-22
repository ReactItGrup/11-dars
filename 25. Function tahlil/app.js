// Tahlil

function calcAge(tugilganYil, Ism) {
  const yosh = 2023 - tugilganYil;
  console.log(`${Ism} siz ${yosh} yoshga kirdingiz`);
  return yosh;
}

const age = calcAge(2006, "Asilbek");

// function => nima ekanligini bildiradi

// calcAge => function nomi hohlagan nomimiz ni yozishimiz mumkin

// (tugilganYil, Ism) => function parametri

// {} => ichidagi function body hisoblanadi

// return => function ni tugatadi va ma'lumotini qaytaradi

// const age = calcAge(2006, 'ASilbek') Function argumentlari
