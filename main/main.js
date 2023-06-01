var ulListFilms = document.querySelector('ul');
const apiKey = process.env.API_THEMOVIEDB;

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
    const movies = response.results;

    for (let i = 0; i < movies.length; i++) {
        ulListFilms.innerHTML +=

    `<li class="movie-card">
        <div class="position">${i + 1}</div>
        <div class="mc-poster">
            <a>
                <img width="100" height="" src="https://image.tmdb.org/t/p/w500${movies[i].poster_path}"
                    alt="${movies[i].original_title}">
            </a>
        </div>
        <div class="movie-data">
            <div class="mc-info-container">
                <div class="mc-title">
                    <a>
                        ${movies[i].original_title}
                    </a>
                    (${movies[i].release_date.substr(0, 4)})
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
}

fetchData('https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1', showFilms);
