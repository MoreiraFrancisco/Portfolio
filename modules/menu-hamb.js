let menuHamb = document.querySelector('.navHeader__menuHamb')
let navHeader = document.querySelector('.navheader__links')

menuHamb.addEventListener('click', modalToggle)

function modalToggle() {
    navHeader.classList.toggle('expand')
    
}
