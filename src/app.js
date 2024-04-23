import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  const who = [
    "My dog",
    "Some Avali",
    "Your mom",
    "The Doctor",
    "The Police",
    "Tattorack",
    "Zarconite",
    "Some Stranger",
    "The Pack Leader",
    "My life",
    "A fox",
    "Dr.Jr.",
    "Lavender",
    "Kaya",
    "Cyl",
    "Asuari",
    "Avalina",
    "Tsuki",
    "Skirr",
    "Keru"
  ];
  const what = [
    "took a poop",
    "forced me to take out the garbage",
    "burned up",
    "used the killing curse",
    "arrested me",
    "dominated me at a game",
    "crafted a lovely disc",
    "destroyed everything",
    "called me cute",
    "was murdered",
    "screamed extremely loudly",
    "Found a cup",
    "stole my watch",
    "ate the batteries",
    "used my shoes",
    "gave me flashbacks"
  ];
  const where = [
    "in my bed.",
    "at some cold place.",
    "at a five krill restaurant.",
    "while watching history channel.",
    "inside.",
    "on tommerow's door.",
    "at home.",
    "within Avalon.",
    "in some very warm place.",
    "at the Cathedral.",
    "at the Police.",
    "yesterday.",
    "A year ago.",
    "....eventually anyway.",
    "the priest.",
    ", of course this ended up being the second time this happened.",
    "made me cry.",
    "within dimentionally inaccurate space."
  ];
  let sentence =
    who[rand(who.length)] +
    " " +
    what[rand(what.length)] +
    " " +
    where[rand(where.length)];

  let excuseSpan = document.querySelector("#excuse");

  excuseSpan.innerHTML = sentence;
};

function rand(length) {
  let number = Math.floor(Math.random() * length);
  return number;
}
