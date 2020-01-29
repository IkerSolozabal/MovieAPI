var body = document.querySelector('body');

function fetchData(url, callBack) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            callBack(request.response);
        }
    };
    request.send();
}

function showFilms(response) {
    console.log(response);
    body.innerHTML += 

`<div class="panel">
    <ul id="top-movies">`;

    const movies = response.results;
    for (let i = 0; i < movies.length; i++) {
        body.innerHTML +=

        `<li class="movie-card">
            <div class="position">${i + 1}</div>
            <div class="mc-poster">
                <a href="https://www.filmaffinity.com/es/film809297.html">
                    <img width="100" height=""
                         src="https://image.tmdb.org/t/p/w500${movies[i].poster_path}"
                         alt="${movies[i].original_title}">
                </a>
            </div>
            <div class="movie-data">
                <div class="mc-info-container">
                    <div class="mc-title">
                        <a href="https://www.filmaffinity.com/es/film809297.html" title="${movies[i].original_title}">
                        ${movies[i].original_title}
                        </a>
                        (${movies[i].release_date.substr(0,4)})
                        <img src="https://www.filmaffinity.com/imgs/countries/US.jpg" alt="Estados Unidos">
                    </div>
                    <div class="mc-director">
                        <a href="" title="Francis Ford Coppola">Francis Ford Coppola</a>
                    </div>
                    <div class="mc-cast">
                        <a href="">Marlon Brando</a>,
                        <a href="">Al Pacino</a>,
                        <a href="">James Caan</a>,
                        <a href="">Robert Duvall</a>,
                        <a href="">Diane Keaton</a>,
                        <a href="">John Cazale</a>,
                        <a href="">Talia Shire</a>,
                        <a href="">Richard S. Castellano</a>,
                        ...
                    </div>
                </div>
                <div class="data">
                    <div class="avg-rating">${movies[i].vote_average}</div>
                    <div class="rat-count">${movies[i].vote_count}<i class="fas fa-user"></i></div>
                </div>
            </div>
        </li>`
    }

    `</ul>
</div>`
}

fetchData('https://api.themoviedb.org/3/movie/popular?api_key=fc10596101cb4714add74dcb40292721&language=en-US&page=1', showFilms);
