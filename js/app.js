function switchOscuro() {
  let switchDeColor = document.getElementsByClassName("colorSwitch");

  console.log(switchDeColor);
    // switchDeColor.classList.remove("bg-light");
    // switchDeColor.classList.add("bg-dark");

for(let i = 0; i < switchDeColor.length; i++) {

    if(switchDeColor[i].classList.contains("bg-light")) {
        switchDeColor[i].classList.remove("bg-light");
        switchDeColor[i].classList.remove("text-dark");
        switchDeColor[i].classList.add("bg-dark");
        switchDeColor[i].classList.add("text-light");
        switchDeColor[i].classList.add("navbar-dark");
    } else {
        switchDeColor[i].classList.remove("bg-dark");
        switchDeColor[i].classList.remove("text-light");
        switchDeColor[i].classList.remove("navbar-dark");
        switchDeColor[i].classList.add("bg-light");
        switchDeColor[i].classList.add("text-dark");

    }
}

}

