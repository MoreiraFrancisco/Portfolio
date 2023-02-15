let sections = document.querySelectorAll('.scrolltransition')

window.addEventListener('scroll', checkSections)

function checkSections() {
    for (let section of sections) {
        let sectionTop = section.getBoundingClientRect().top
        let triggerBottom = window.innerHeight / 5 * 4
        
        if (sectionTop < triggerBottom) {
            section.classList.add('show')
            section.classList.remove('hide')
        }
        if (sectionTop + 110 > triggerBottom) {
            section.classList.add('hide')
            section.classList.remove('show')
        } 
    }
}
checkSections()