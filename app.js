// local quotes data
const quotes = [
  {
    id: 1,
    author: "Albert Einstein",
    quote: "It is not that I'm so smart. But I stay with the questions much longer.",
  },
  {
    id: 2,
    author: "Henry Ford",
    quote: "Whether You Think You Can Or Think You Can’t, You’re Right.",
  },
  {
    id: 3,
    author: "Jack Canfield",
    quote: "For Every Reason It’s Not Possible, There Are Hundreds Of People Who Have Faced The Same Circumstances And Succeeded.",
    },
  {
    id: 4,
    author: "Marie Curie",
    quote: "Have no fear of perfection; you'll never reach it.",
    },
];

// select items
const author = document.getElementById("author");
const quote = document.getElementById("quote");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showQuote();
});

// show quote based on item
function showQuote() {
  const item = quotes[currentItem];
  author.textContent = item.author;
  quote.textContent = item.quote;
}

// show next quote
nextBtn.addEventListener("click", function () {
    currentItem++;
    if(currentItem > quotes.length - 1) {
      currentItem = 0;
    }
  showQuote(currentItem);
});

// show previous quote
prevBtn.addEventListener("click", function () {
  currentItem--;
  if(currentItem < 0) {
    currentItem = quotes.length - 1;
  }
  showQuote(currentItem);
});

// show a quote randomly
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * quotes.length);
  showQuote();
});
