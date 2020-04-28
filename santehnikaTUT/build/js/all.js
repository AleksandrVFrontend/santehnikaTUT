
let btn = document.querySelector('.btn'),
    popup = document.querySelector('.popup'),
    close__popupBtn = document.querySelector('.btn-popup__close'),
    button = document.getElementById('button');

btn.onclick = function () {
    popup.classList.remove('display__none')
};

close__popupBtn.onclick = function () {
    popup.classList.add('display__none')
};

const blockTitle = document.querySelectorAll('.block-title');

blockTitle.forEach(el => {
    el.addEventListener('mouseout', function (event) {
      this.classList.add('mouseout__btn__2');   
    });
});

const a = document.querySelectorAll('a');

a.forEach(el => {
    el.addEventListener('mouseout', function (event) {
      this.classList.add('mouseout-for-a');   
    });
});
const mouseout = (props) => {
    let el = document.querySelector(props);
    if (props = '.section-main__tel') {
        el.classList.add('mouseout__2')
    } else if (props = '.btn' || '.btn__price') {
        el.classList.add('mouseout__btn')
    } else {
        el.classList.add('mouseout');
    }
};

const handlerChange = (props) => {
    let el = document.getElementById(props);
    if (el.value.length > 0) {
        el.classList.remove('error')
        el.classList.add('success')
    } else {
        el.classList.remove('success')
        el.classList.add('error')
    }
};

button.onclick = function (e) {
    e.preventDefault();
    if (document.getElementById('tel').value.length > 0 && document.getElementById('name').value.length > 0) {
        popup.classList.add('display__none')
    } else {
        document.getElementById('tel').classList.add('error');
        document.getElementById('name').classList.add('error');

    }
}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
  })
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {  
    var i;
    var slides = document.getElementsByClassName("block__0");
    var dots = document.getElementsByClassName("dots__item__0");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

let slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlide1() {
    showSlides1(slideIndex1 += 1);
}

function minusSlide1() {
    showSlides1(slideIndex1 -= 1);  
}

function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
}

function showSlides1(n) {  
    var i;
    var slides1 = document.getElementsByClassName("block__1");
    var dots1 = document.getElementsByClassName("dots__item__1");
    if (n > slides1.length) {
      slideIndex1 = 1
    }
    if (n < 1) {
        slideIndex1 = slides1.length
    }
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
    }
    for (i = 0; i < dots1.length; i++) {
        dots1[i].className = dots1[i].className.replace("active", "");
    }
    slides1[slideIndex1 - 1].style.display = "block";
    dots1[slideIndex1 - 1].className += " active";
}

let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlide2() {
    showSlides2(slideIndex2 += 2);
}

function minusSlide2() {
    showSlides2(slideIndex2 -= 1);  
}

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {  
    var i;
    var slides2 = document.getElementsByClassName("block__2");
    var dots2 = document.getElementsByClassName("dots__item__2");
    if (n > slides2.length) {
      slideIndex2 = 1
    }
    if (n < 1) {
        slideIndex2 = slides2.length
    }
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace("active", "");
    }
    slides2[slideIndex2 - 1].style.display = "block";
    dots2[slideIndex2 - 1].className += " active";
}

