let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// function loader(){
//   document.querySelector('.loader-container').classList.add('fade-out');
// }

// function fadeOut(){
//   setInterval(loader, 3000);
// }

// window.onload = fadeOut;
// Validation 
const form=document.getElementById('form');
const username=document.getElementById('name');
const foodname=document.getElementById('foodname');
const addfood=document.getElementById('addfood');
const mobile=document.getElementById('mobile');
const howmuch=document.getElementById('howmuch');
const datatime=document.getElementById('datetime');
const address=document.getElementById('address');
const message=document.getElementById('message');



// form.addEventListener('keyup', e => {
//   e.preventDefault();

//   validateInputs();
// });

form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});



const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}
const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const validateInputs = () => {
  const username_val = username.value.trim();
  const mobile_val =mobile.value.trim();
  const food_name_val=foodname.value.trim();
  const addfood_val=addfood.value.trim();
  const howmuch_food=howmuch.value.trim();
  const datatime_val=datatime.value.trim();
  const address_val=address.value.trim();
  const message_val=message.value.trim(); 

  if(true){
    if(username_val === '') {
      setError(username, 'Username is required');
  } else {
      setSuccess(username);
  }
  if(mobile_val === '') {
    setError(mobile, 'Mobile is required');
} else if (mobile_val.length < 10 && mobile_val.length > 1 ) {
    setError(mobile, 'Mobile must be at least 10 number.')
} else {
    setSuccess(mobile);
}
  if(food_name_val === '') {
      setError(foodname, 'Food name is required');
  }  else {
      setSuccess(foodname);
  }
  if(addfood_val === '') {
    setError(addfood, 'Addition Food is required');
}  else {
    setSuccess(addfood);
}

if(howmuch_food === '') {
  setError(howmuch, 'Product quantity is required');
}  else {
  setSuccess(howmuch);
}
if(datatime_val === '') {
  setError(datatime, 'Date & Time is required');
}  else {
  setSuccess(datatime);
}
if(address_val === '') {
  setError(address, 'Address is required');
}  else {
  setSuccess(address);
}
if(message_val === '') {
  setError(message, 'Message is required');
}  else {
  setSuccess(message);
}
  }
};
