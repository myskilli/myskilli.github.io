$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

var cards = document.querySelector('.flipping-card-container');

var flipcard = document.querySelector('#flipcard');
var flipcardback = document.querySelector('#flipcardback');

flipcard.addEventListener('click', function () {
  cards.classList.toggle('is-flipped');
});

flipcardback.addEventListener('click', function () {
  cards.classList.toggle('is-flipped');
});

const nav = document.getElementById('sidebar-mob');
const showNavBtn = document.getElementById('show-sidebar');
const closeNavBtn = document.getElementById('close-sidebar');
const container = document.getElementById('page-content');
const opennav = document.querySelector('.showtab');
const shownavvontents = document.querySelector('.shownavvontents');

opennav.addEventListener('click', function () {
  shownavvontents.classList.toggle('closed');
  console.log('hey');
});

showNavBtn.addEventListener(
  'click',
  (event) => {
    if (nav.style.right !== '0px') {
      showNavBtn.classList.toggle('open');
      closeNavBtn.classList.toggle('close');
      nav.classList.toggle('open');
      container.classList.toggle('nav-open');
      document.body.style.overflow = 'hidden';
    } else {
      showNavBtn.classList.toggle('open');
      closeNavBtn.classList.toggle('close');
      nav.classList.toggle('open');
      container.classList.toggle('nav-open');
      document.body.style.overflow = 'auto';
    }
  },
  nav
);
closeNavBtn.addEventListener(
  'click',
  (event) => {
    if (nav.style.left !== '0px') {
      showNavBtn.classList.toggle('open');
      closeNavBtn.classList.toggle('close');
      nav.classList.toggle('open');
      container.classList.toggle('nav-open');
      document.body.style.overflow = 'hidden';
    } else {
      showNavBtn.classList.toggle('open');
      closeNavBtn.classList.toggle('close');
      nav.classList.toggle('open');
      container.classList.toggle('nav-open');
      document.body.style.overflow = 'auto';
    }
  },
  nav
);


// function for accordion
let accordion = document.getElementsByClassName("accordion");


for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-minus");
    } else {
      this.childNodes[1].classList.remove("fa-minus");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
