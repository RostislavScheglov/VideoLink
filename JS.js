
function bookmarklet(){
    alert("Please press Ctrl+D!");
}

let btnHeader = document.getElementById('book_marklet_button');
let btnUse = document.getElementById('use_btn');

btnHeader.addEventListener("click", bookmarklet);
btnUse.addEventListener("click", bookmarklet);

//FAQ
let faqQuest1 = document.querySelector('.faq_questions_1');
let faqAnswer1 = document.getElementById('answer');

let faqQuest_2 = document.querySelector('.faq_questions_2');
let faqAnswer_2 = document.getElementById('answerClose_1');

let faqQuest_3 = document.querySelector('.faq_questions_3');
let faqAnswer_3 = document.getElementById('answerClose_2');

let faqQuest_4 = document.querySelector('.faq_questions_4');
let faqAnswer_4 = document.getElementById('answerClose_3');


function close(){
    faqAnswer1.classList.toggle("closeAnswer");
    faqQuest1.classList.toggle("closeQuest");
}


function open_1(){
    if(faqAnswer_2.style.display ==="none"){
        faqAnswer_2.style.display ="block";
        faqQuest_2.style.borderBottom= "none";
    }else{
        faqAnswer_2.style.display ="none"
        faqQuest_2.style.borderBottom= "1px solid #E8E9EA";
    }

}

function open_2(){
    if(faqAnswer_3.style.display ==="none"){
        faqAnswer_3.style.display ="block";
        faqQuest_3.style.borderBottom= "none";
    }else{
        faqAnswer_3.style.display ="none"
        faqQuest_3.style.borderBottom= "1px solid #E8E9EA";
    }

}
function open_3(){
    if(faqAnswer_4.style.display ==="none"){
        faqAnswer_4.style.display ="block";
        faqQuest_4.style.borderBottom= "none";
    }else{
        faqAnswer_4.style.display ="none"
        faqQuest_4.style.borderBottom= "1px solid #E8E9EA";
    }

}




faqQuest1.addEventListener('click', close);

faqQuest_2.addEventListener('click', open_1);

faqQuest_3.addEventListener('click', open_2);

faqQuest_4.addEventListener('click', open_3);

//slider Center Mode cancel
if (document.documentElement.clientWidth === 768){
$(document).ready(function () {
    $('.slider').slick({
        centerMode: true,
        slidesToShow: 1,
      });
});
} else if(document.documentElement.clientWidth === 375){
    $(document).ready(function () {
        $('.slider').slick({
            centerMode: false,
            slidesToShow: 1,
            arrows: true,
          });
    });
}

//Update on resize
window.onresize = function () {
    location.reload();
}

//Burger
$(document).ready(function(){
$('.header_burger').click(function(event){
$('.header_burger,#nav').toggleClass('active');
});
});

//Anchor Scroll
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute('href')

        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: 'start'
        })
    })
}
$("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    $("body").toggleClass("locked"); 
});