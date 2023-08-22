// forEach

const ismlar = ["ziyodulla", "jaxongir", "bahrom", "ikrom"];
const newIsmlar = [];
// for (let i = 0; i < ismlar.length; i++) {
//   console.log(ismlar[i]);
// }

// ismlar.forEach(function (qiymat) {
//   console.log(qiymat);
// });
// forEach ma'lumotni ichida nechta qiymat bo'lsa shucha qaytarib beradi

ismlar.forEach(function (qiymat, index) {
  const yangiIsm =
    qiymat.charAt().toUpperCase() + qiymat.slice(1).toLowerCase() + "bek";
  newIsmlar.push(yangiIsm);
  console.log(qiymat, index);
  // index = ma'lumotni joylashgan joyi
  // push ma'lumotni korsatilgan manzilga jo'natadi
});

// Agar bizda function javobi ham arrayda bo'lishi kerak bo'lsa tepadan arrey ochamiz

console.log(newIsmlar);
