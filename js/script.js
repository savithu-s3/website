// Floating scroll button
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 99.9) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#cc1003 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
// Floating scroll button

// Hacker Effect
function hacker_effect(hacker_eff_id, duration) {
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomLetter() {
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    return alphabet[rand(0,alphabet.length - 1)];
  }

  function getRandomWord(word) {
    var text = word.innerHTML;
    var finalWord = '';
    for(var i=0;i<text.length;i++) {
      finalWord += text[i] == ' ' ? ' ' : getRandomLetter();
    }
    return finalWord;
  }

  var word = document.getElementById(hacker_eff_id);
  var interv = 'undefined';
  var canChange = false;
  var globalCount = 0;
  var count = 0;
  var INITIAL_WORD = word.innerText;
  var isGoing = false;

  function init() {
    if(isGoing) return;
    isGoing = true;
    var randomWord = getRandomWord(word);
    word.innerHTML = randomWord;
    interv = setInterval(function() {
    var finalWord = '';
    for(var x=0;x<INITIAL_WORD.length;x++) {
      if(x <= count && canChange) {
        finalWord += INITIAL_WORD[x];
      } else {
        finalWord += getRandomLetter();
      }
    }
    word.innerHTML = finalWord;
    if(canChange) {
      count++;
    }
    if(globalCount >= 20) {
      canChange = true;
    }
    if(count>=INITIAL_WORD.length) {
      clearInterval(interv);
      count = 0;
      canChange = false;
      globalCount = 0;
      isGoing = false;
    }
    globalCount++;
    },duration);
  }
  word.addEventListener('mouseenter', init);
}
hacker_effect("header_item_1", 30);
hacker_effect("header_item_2", 30);
// Hacker Effect

// Explode Effect And Spanning
const enhance = id => {
  const element = document.getElementById(id),
        text = element.innerText.split("");
  element.innerText = "";
  text.forEach(letter => {
    const span = document.createElement("span");
    span.className = "letter";
    span.innerText = letter;
    element.appendChild(span);
  });
}
enhance("explode");
//Explode Effect And Spanning

function browse_codes() {
  window.location.href = "https://github.com"
}