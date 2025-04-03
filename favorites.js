// This is an event listener that lets users add there favorite movie.
document.addEventListener("DOMContentLoaded", function () {
    const movieInput = document.getElementById("movie-input");
    const addMovieButton = document.getElementById("add-movie");
    const favoritesList = document.getElementById("favorites-list");
// This stores the favorite movies into local storage
    let favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
// This updates the users favorite movies
    function updateFavorites() {
        favoritesList.innerHTML = "";
        favoriteMovies.forEach((movie, index) => {
            const li = document.createElement("li");
            li.textContent = movie;
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.classList.add("remove");
            removeButton.onclick = function () {
                favoriteMovies.splice(index, 1);
                localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
                updateFavorites();
            };
            li.appendChild(removeButton);
            favoritesList.appendChild(li);
        });
    }

    addMovieButton.addEventListener("click", function () {
        const movie = movieInput.value.trim();
        if (movie && favoriteMovies.length < 10) {
            favoriteMovies.push(movie);
            localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
            movieInput.value = "";
            updateFavorites();
        }
    });

    updateFavorites();
});