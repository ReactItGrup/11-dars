// callback function

const myFunction = (asilbek) => {
  let son = 80;
  asilbek(son);
};

myFunction(function (qiymat) {
  console.log(qiymat);
});

// callback function => chaqirilayotgan function nig argumentiga function berish

// const callbackFunction = function (value) {
//     console.log(value);
// }

// function ning argumentiga berilgan function callback function deyiladi
