//! Selectors
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const btn_perfect = document.getElementById("btn-perfect");
const btn_palindr = document.getElementById("btn-Palindr");
// console.log(input1, input2, btn_perfect, textarea);

//! Functions

const perfectNums = (x, y) => {
  let arr = [];

  for (let i = x; i <= y; i++) {
    sum = 0;

    for (let k = 1; k < i; k++) {
      if (!(i % k)) {
        sum += k;
      }
    }

    if (sum === i) {
      arr.push(i);
    }
  }

  return arr;
};

const PalindromeNums = (x, y) => {
  let arr = [];
  for (let i = x; i < y; i++) {
    if (String(i) === String(i).split("").reverse().join("")) {
      arr.push(i);
    }
  }

  return arr;
};

//! Events

btn_perfect.addEventListener("click", () => {
  const perfect = document.getElementById("div-Perfect");

  perfectNums(input1.value, input2.value).map(
    (item) => (perfect.innerHTML += `<p>${item}</p>`)
  );
});

btn_palindr.addEventListener("click", () => {
  const palindrome = document.getElementById("div-Palindrome");

  PalindromeNums(input1.value, input2.value).map(
    (item) => (palindrome.innerHTML += `<p>${item}</p>`)
  );
});
console.log(PalindromeNums(1, 1000));
