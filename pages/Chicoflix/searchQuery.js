let main = document.querySelector('main')
let movieResults = document.querySelector('.movie-results')


function handler(e) {
    e.preventDefault()

    let movie = document.querySelector('.form__input').value

    if (movie) {
        const _url = `http://www.omdbapi.com/?s=${movie}&apikey=950e2668&`
        const _options = {
            method: 'GET',
            mode: 'cors',
            redirect: 'follow',
            cache: 'default'
        }
        fetch(_url, _options)
            .then(function (response) {
                if (!response.ok) throw new Error('Erro ao executar requisição')
                return response.json()
            })
            .then(function (data) {
                let newContent = '';
                for (let i = 0; i < data.Search.length; i++) {
                    newContent += `<li class="app-movies-all__card">`
                    newContent += `<figure class="app-movies-all__figure">`
                    newContent += `<img class="app-movies-all__thumb" src="${data.Search[i].Poster}" />`
                    newContent += `</figure>`
                    newContent += `<legend class="app-movies-all__legend">`
                    newContent += `<span class="app-movies-all__year">${data.Search[i].Year}</span>`
                    newContent += `<h2 class="app-movies-all__title">${data.Search[i].Title}</h2>`
                    newContent += `</legend">`
                    newContent += `</li>`
                }
                document.getElementById('movies').innerHTML = newContent
                main.classList.add('border')
                movieResults.classList.add('show')
                movieResults.scrollIntoView()
            })
    } else {
        alert('Digite um filme')
    }
}
window.onload = () => {
    const submit = document.querySelector('.form__submit')
    submit.addEventListener('click', handler)
}