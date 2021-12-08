let nav = document.querySelector('.navbar');
let menu = document.querySelector('#menu-bar');

let theme = document.querySelector('.theme-toggle')
let togglebtn = document.querySelector('.toggle-btn')

menu.onclick = () =>{
    menu.classList.toggle('fa-times-rectangle')
    nav.classList.toggle('active')
}

togglebtn.onclick = () =>{
    theme.classList.toggle('active')
}

window.onscroll = () =>{
    menu.classList.remove('fa-times-rectangle')
    nav.classList.remove('active')
    theme.classList.remove('active')
}


document.querySelectorAll('.theme-toggle .theme-btn').forEach(btn =>{
    btn.onclick = () =>{
        var color = btn.style.background;
        document.querySelector(':root').style.setProperty('--main-color',color)
    }
})


var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
   loop:true,
   autoplay:{
       delay:3000,
       disableOnInteraction:false,
   }
  });



  var swiper = new Swiper(".review-slider", {
    slidesPerView:1, 
    grabCursor: true,
    loop:true,
    spaceBetween:10,
    breakpoints:{
        0:{
            slidesPerView:1
        },
        700:{
            slidesPerView:2
        },
        1050:{
            slidesPerView:3
        },
    },
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    }
  });