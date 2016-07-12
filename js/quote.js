//jQuery
$(document).ready(function(){
  $("#quote").html(quotes[randomRange(0, 9)]["quote"]);
  $("#author").html("-" + quotes[randomRange(0, 9)]["author"]);
});

//JavaScript
var number = 0;
function randomRange(myMin, myMax) {
  number = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  return number;
}

var quotes = [
  {
    "author":"Eleanor Roosevelt",
    "quote":"Great minds discuss ideas; average minds discuss events; small minds discuss people.",
  },
  {
    "author":"Ralph Waldo Emerson",
    "quote":"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
  },
  {
    "author":"Nelson Mandela",
    "quote":"After climbing a great hill, one only finds that there are many more hills to climb.",
  },
  {
    "author":"Winston Churchill",
    "quote":"All the great things are simple, and many can be expressed in a single word: freedom, justice, honor, duty, mercy, hope.",
  },
  {
    "author":"Vincent Van Gogh",
    "quote":"Great things are done by a series of small things brought together.",
  },
  {
    "author":"William James",
    "quote":"The greatest weapon against stress is our ability to choose one thought over another.",
  },
  {
    "author":"Helen Keller",
    "quote":"Life is either a great adventure or nothing.",
  },
  {
    "author":"William Shakespeare",
    "quote":"Some are born great, some achieve greatness, and some have greatness thrust upon them.",
  },
  {
    "author":"Lucius Annaeus Seneca",
    "quote":"It is a rough road that leads to the heights of greatness.",
  },
  {
    "author":"Niccolo Machiavelli",
    "quote":"Never was anything great achieved without danger.",
  }
];

function newQuote(){
  document.getElementById("quote").innerHTML = quotes[randomRange(0, 9)]["quote"];
  document.getElementById("author").innerHTML = "-" + quotes[randomRange(0, 9)]["author"];
}

//Twitter API
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));

//Quote API
// $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=" + randomRange(1, 25) + "&callback=", function(a) {
//   $(".quote").append(a[0].content + "<p>&mdash; " + a[0].title + "</p>")
// });
