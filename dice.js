const d20 = [
  20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
];

const d12 = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const d10 = [10, 9, 8, 7, 6, 5, 5, 4, 3, 2, 1];

const d6 = [6, 5, 4, 3, 2, 1];

const d8 = [8, 7, 6, 5, 4, 3, 2, 1];

const d4 = [4, 3, 2, 1];

let d20btn = document.getElementById("D20");
let d12btn = document.getElementById("D12");
let d10btn = document.getElementById("D10");
let d8btn = document.getElementById("D8");
let d6btn = document.getElementById("D6");
let d4btn = document.getElementById("D4");
let result = document.getElementById("result");

d20btn.addEventListener("click", () => {
  roll(d20);
});

d12btn.addEventListener("click", () => {
  roll(d12);
});
d10btn.addEventListener("click", () => {
  roll(d10);
});
d8btn.addEventListener("click", () => {
  roll(d8);
});
d6btn.addEventListener("click", () => {
  roll(d6);
});
d4btn.addEventListener("click", () => {
  roll(d4);
});

function roll(arr) {
  let i = Math.floor(Math.random(arr) * arr.length);
  result.innerText = `you rolled a ${i + 1}`;
}

function time(times, arr) {
  for (let i = 0; i < times; i++) {
    let i = Math.floor(Math.random(arr) * arr.length);
    console.log(p, "+");
    finalnum = p + finalnum;
  }
  console.log("=", finalnum);
}
