let exp1 = document.querySelector('.experiences__job-card1')
let exp2 = document.querySelector('.experiences__job-card2')
let exp3 = document.querySelector('.experiences__job-card3')
let click = document.querySelector('.experience__click')
let blob = document.querySelector('.experiences__blob')

document.querySelectorAll('.experience__select').forEach(experience => {
    experience.addEventListener('click', event => {
      document.querySelectorAll('.experience__select').forEach(i => {i.classList.remove('active');
    })
        experience.classList.add('active')
        click.classList.add('hide')
        blob.classList.add('hide')

      if (experience.innerText == 'Bolsista PIBIC') {
        exp1.classList.add('show')
        exp2.classList.remove('show')
        exp3.classList.remove('show')
      }
      if (experience.innerText == 'Bolsista do programa de extensão') {
        exp2.classList.add('show')
        exp1.classList.remove('show')
        exp3.classList.remove('show')
      }
      if (experience.innerText == 'Estagiário em psicologia') {
        exp3.classList.add('show')
        exp2.classList.remove('show')
        exp1.classList.remove('show')
      }
    })
  })
