document.addEventListener("DOMContentLoaded", () => {
    const movies = [
        { title: "GI Jane", runtime: 125, rating: "R" },
        { title: "Money Talks", runtime: 97, rating: "R" },
        { title: "Air Force One", runtime: 124, rating: "R" },
        { title: "Mimic", runtime: 105, rating: "R" },
        { title: "Conspiracy Theory", runtime: 135, rating: "R"},
        {title: ""}
    ];

    function minutesToHoursMinutes(minutes) {
        const h = Math.floor(minutes / 60);
        const m = minutes % 60;
        return `${h}h ${m}m`;
    }

    function getShowtimes(length) {
        const showtimesDict = [
            { min: 41, max: 54, times: "11:30  1:00  2:30  4:00  5:30  7:00  8:30  10:00  11:30" },
            { min: 55, max: 68, times: "11:00  12:45  2:30  4:15  6:00  7:45  9:30  11:15" },
            { min: 69, max: 81, times: "11:00  1:00  3:00  5:00  7:00  9:00  11:00" },
            { min: 82, max: 95, times: "11:30  1:45  4:00  6:15  8:30  10:45" },
            { min: 96, max: 109, times: "12:30  3:00  5:30  8:00  10:30" },
            { min: 110, max: 122, times: "11:15  2:00  4:45  7:30  10:15" },
            { min: 123, max: 136, times: "1:00  4:00  7:00  10:00" },
            { min: 137, max: 150, times: "12:00  3:15  6:30  9:45" },
            { min: 151, max: 163, times: "11:00  2:30  6:00  9:30" },
            { min: 164, max: 177, times: "1:45  5:30  9:15" },
            { min: 178, max: 190, times: "1:00  5:00  9:00" },
            { min: 191, max: 204, times: "12:15  4:30  8:45" },
            { min: 205, max: 218, times: "11:30  4:00  8:30" },
            { min: 219, max: 231, times: "11:00  3:30  8:15" },
            { min: 232, max: 245, times: "3:00  8:00" },
            { min: 246, max: 259, times: "2:30  7:45" },
            { min: 260, max: 272, times: "2:00  7:30" },
            { min: 273, max: 286, times: "1:30  7:15" },
            { min: 287, max: 300, times: "1:00  7:00" },
            { min: 301, max: 313, times: "12:30  6:45" },
            { min: 314, max: 327, times: "12:00  6:30" },
            { min: 328, max: 340, times: "11:30  6:15" },
            { min: 341, max: 354, times: "11:00  6:00" }
        ];

        const found = showtimesDict.find(range => length >= range.min && length <= range.max);
        return found ? found.times : "No showtimes available";
    }

    const container = document.getElementById("movieDetails");

    movies.forEach(movie => {
        const card = document.createElement("div");
        card.classList.add("movie-card");

        card.innerHTML = `
            <img src="./images/${movie.title}.png" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <div class="movie-meta">Runtime: ${minutesToHoursMinutes(movie.runtime)}</div>
                <div class="movie-meta">Rating: ${movie.rating}</div>
                <div class="showtimes">${getShowtimes(movie.runtime)}</div>
            </div>
        `;

        container.appendChild(card);
    });
});