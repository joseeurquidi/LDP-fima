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
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})

loadHeadbarProccess()
window.addEventListener("resize", (event) => {
  loadHeadbarProccess()
});

function loadHeadbarProccess(){
  console.log("sda")
  let procesos_toggle = document.getElementById("procesos-toggle")
  let list_proccess = document.getElementById("list-proccess")
  let wwidth = window.innerWidth

  if (wwidth > 992) {
    if (!procesos_toggle.classList.contains("isToggling")) {
      procesos_toggle.classList.add("isToggling")
      list_proccess.classList.add("dropdown-menu")

      procesos_toggle.dataset.bsToggle = 'dropdown'
    }
  } else {
    if (procesos_toggle.classList.contains("isToggling")) {
      procesos_toggle.classList.remove("isToggling")
      list_proccess.classList.remove("dropdown-menu")
      delete procesos_toggle.dataset.bsToggle;
    }
  }
}

document.addEventListener('scroll', () => {
  let header = document.getElementById("header")
  let scrollY = window.scrollY
  if( scrollY == 0 ){
    if( header.classList.contains("scrolled") ){
      header.classList.remove("scrolled")
    }
  }else{
    if(!header.classList.contains("scrolled")){
      header.classList.add("scrolled")
    }
  }
});