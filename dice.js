const d20 = [
  20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
];

const d12 = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const d10 = [10, 9, 8, 7, 6, 5, 5, 4, 3, 2, 1];

const d8 = [8, 7, 6, 5, 4, 3, 2, 1];

const d4 = [4, 3, 2, 1];

let d20btn = document.getElementById("D20");
let d12btn = document.getElementById("D12");
let d8btn = document.getElementById("D8");
let d4btn = document.getElementById("D4");

d20btn.addEventListener("click", () => {
  roll(d20);
  console.log("you rolled a:", roll(d20));
});

d12btn.addEventListener("click", () => {
  roll(d12);
  console.log("you rolled a:", roll(d12));
});
d10btn.addEventListener("click", () => {
  roll(d10);
  console.log("you rolled a:", roll(d10));
});
d8btn.addEventListener("click", () => {
  roll(d8);
  console.log("you rolled a:", roll(d8));
});
d4btn.addEventListener("click", () => {
  roll(d4);
  console.log("you rolled a:", roll(d4));
});

function roll(arr) {
  let i = Math.floor(Math.random(arr) * arr.length);

  return i;
}

function time(times, arr) {
  for (let i = 0; i < times; i++) {
    let i = Math.floor(Math.random(arr) * arr.length);
    console.log(p, "+");
    finalnum = p + finalnum;
  }
  console.log("=", finalnum);
}
