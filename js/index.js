//slider
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {

  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = "none";
//end slider



//var element = document.getElementsByClassName(".text-animation")[0];

///element.innerHTML = 
//element.textContent.replace("/\S/g", '<span class="letter">$&</span>');

//AnimationTimeline({loop:true})
//.add({
//targets:'.text-animation .letter',
//scale:[3,1],
//opacity:[0,1],
//translateZ:0,
//duration:1000,
//easing:"easeOutExpo",
//delay:(elem, index) => index*70

//})

//.add({
//targets:'.text-animation',
//opacity:0,
//duration:1000,
//delay:1000,
//easing:"easeOutExpo"
//});

//const btns = document.querySelectorAll(".tab-btn");
//const tabContainer = document.querySelector(".tabs-container");
//const articles = document.querySelectorAll(".content");

//tabContainer.addEventListener("click", function(e){
  //const id = e.target.dataset.id;
//if (id){
  //remove active from othe button
  //btns.forEach(function (btn){
    //btn.classList.remove("active");
    //e.target.classList.add("active");
  //});
  //hide other articles
  //articles.forEach(function(articles){
    //articles.classList.remove('active')
  ///})
  //const element = document.getElementById(id);
 // element.classList.add("active")
  //}

//});


//reviews

//all the data of reviews
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up.",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub .",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb .",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevRevBtn = document.querySelector(".prev-review-btn");
const nextRevBtn = document.querySelector(".next-review-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 2;


window.addEventListener("DOMContentLoaded", function () {
showPerson();

});


function showPerson(){
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.author;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextRevBtn.addEventListener("click", function(){
currentItem++;
if (currentItem < reviews.length - 1){
  currentItem = 0;
}
showPerson();
});

prevRevBtn.addEventListener("click", function(){
currentItem--;
if(currentItem < 0){
  currentItem = reviews.length - 1;
}
showPerson();
});


randomBtn.addEventListener("click", function(){
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showPerson();
})