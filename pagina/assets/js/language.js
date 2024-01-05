document.getElementById("current_year").innerHTML = (new Date).getFullYear()
let language = window.localStorage.getItem("language")
if(language == null){
  language = "es"
  window.localStorage.setItem("language", "es")
}
setLanguage(language)

function setLanguage(thisLanguage){
  let language_button = document.getElementsByClassName("language-button")
  for(let i = 0; i < language_button.length; i++){
    language_button[i].classList.remove("accent-color-important")
  }
  document.getElementById("language-button-" + thisLanguage).classList.add("accent-color-important")

  language = thisLanguage
  window.localStorage.setItem("language", thisLanguage)

  let elementsLanguage = document.querySelectorAll("[data-laguange]")
  for( let i = 0; i < elementsLanguage.length; i++){
    if( language == "es"){
      elementsLanguage[i].innerHTML = elementsLanguage[i].dataset.es
    }else if ( language == "en"){
      elementsLanguage[i].innerHTML = elementsLanguage[i].dataset.en
    }
  }
}