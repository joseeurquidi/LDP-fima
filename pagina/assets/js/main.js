function openMenu() {
  document.getElementById("container-links").classList.add("active")
  document.getElementById("hover-interactive-header").classList.add("active")
}

function closeMenu() {
  document.getElementById("container-links").classList.remove("active")
  document.getElementById("hover-interactive-header").classList.remove("active")
}

addEventListener("resize", (event) => {
  if (window.innerWidth > 991 && document.getElementById("container-links").classList.contains("active")) {
    closeMenu()
  }
});

/**
 * Easy selector helper function
 */
const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}

/**
 * Easy event listener function
 */
const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all)
  if (selectEl) {
    if (all) {
      selectEl.forEach(e => e.addEventListener(type, listener))
    } else {
      selectEl.addEventListener(type, listener)
    }
  }
}

/**
 * Easy on scroll event listener 
 */
const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
}

/**
 * Back to top button
 */
let backtotop = select('.back-to-top')
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add('active')
    } else {
      backtotop.classList.remove('active')
    }
  }
  window.addEventListener('load', toggleBacktotop)
  onscroll(document, toggleBacktotop)
}


const glightbox = GLightbox({
  selector: '.glightbox'
});

lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
  responsive: {
    0: {
      items: 1
    },
  }
})


loadHeadbarProccess()
setPositionTransparentBackground()
window.addEventListener("resize", (event) => {
  loadHeadbarProccess()
  setPositionTransparentBackground()
});

function loadHeadbarProccess(){
  let metal_toggle = document.getElementById("metal-toggle")
  let list_metal = document.getElementById("list-metal")

  let fiberglass_toggle = document.getElementById("fiberglass-toggle")
  let list_fibrerglass = document.getElementById("list-fibrerglass")
  let wwidth = window.innerWidth

  if (wwidth > 992) {
    if (!metal_toggle.classList.contains("isToggling")) {
      metal_toggle.classList.add("isToggling")
      list_metal.classList.add("dropdown-menu")
      fiberglass_toggle.classList.add("isToggling")
      list_fibrerglass.classList.add("dropdown-menu")

      metal_toggle.dataset.bsToggle = 'dropdown'
      fiberglass_toggle.dataset.bsToggle = 'dropdown'
    }
  } else {
    if (metal_toggle.classList.contains("isToggling")) {
      metal_toggle.classList.remove("isToggling")
      list_metal.classList.remove("dropdown-menu")
      fiberglass_toggle.classList.remove("isToggling")
      list_fibrerglass.classList.remove("dropdown-menu")

      delete metal_toggle.dataset.bsToggle;
      delete fiberglass_toggle.dataset.bsToggle;
    }
  }
}

// document.addEventListener('scroll', () => {
//   let header = document.getElementById("header")
//   let scrollY = window.scrollY
//   if( scrollY == 0 ){
//     if( header.classList.contains("scrolled") ){
//       header.classList.remove("scrolled")
//     }
//   }else{
//     if(!header.classList.contains("scrolled")){
//       header.classList.add("scrolled")
//     }
//   }
// });

function setPositionTransparentBackground(){
  let main_image = document.getElementById("main-image")
  let second_title = document.getElementsByClassName("second-title")


  for( let i = 0; i < second_title.length; i++){
    second_title[i].style.backgroundSize = `${main_image.offsetWidth }px ${main_image.offsetHeight }px `
    second_title[i].style.backgroundPosition = `-${ second_title[i].offsetLeft }px -${second_title[i].offsetTop}px`
  }
}