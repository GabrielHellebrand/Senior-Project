document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("search-bar");
    const movies = document.querySelectorAll(".movie");

    searchBar.addEventListener("input", function () {
        const searchText = searchBar.value.toLowerCase();

        movies.forEach(movie => {
            const title = movie.querySelector("h3").textContent.toLowerCase();
            if (title.includes(searchText)) {
                movie.style.display = "block";
            } else {
                movie.style.display = "none";
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const collection = JSON.parse(localStorage.getItem("movieCollection")) || [];
    const collectionContainer = document.getElementById("collection-container");
    const contextMenu = document.getElementById("context-menu");
    let selectedMovie = null; // Store the movie when the user right clicks

    function updateCollectionDisplay() {
        collectionContainer.innerHTML = "";
        collection.forEach(movie => {
            const movieElement = document.createElement("div");
            movieElement.classList.add("collection-item");
            movieElement.innerHTML = `
                <p>${movie}</p>
                <button class="remove-from-collection" data-title="${movie}">Remove</button>
            `;
            collectionContainer.appendChild(movieElement);
        });

        document.querySelectorAll(".remove-from-collection").forEach(button => {
            button.addEventListener("click", function () {
                const movieTitle = this.getAttribute("data-title");
                removeFromCollection(movieTitle);
            });
        });
    }

    function addToCollection(movieTitle) {
        if (!collection.includes(movieTitle)) {
            collection.push(movieTitle);
            localStorage.setItem("movieCollection", JSON.stringify(collection));
            updateCollectionDisplay();
        }
    }

    function removeFromCollection(movieTitle) {
        const index = collection.indexOf(movieTitle);
        if (index > -1) {
            collection.splice(index, 1);
            localStorage.setItem("movieCollection", JSON.stringify(collection));
            updateCollectionDisplay();
        }
    }

    document.querySelectorAll(".movie").forEach(movie => {
        movie.addEventListener("contextmenu", function (event) {
            event.preventDefault(); // Prevent default right-click menu
            selectedMovie = this.querySelector("h3").textContent; // Gets the movie title

            // Show custom context menu
            contextMenu.style.top = `${event.pageY}px`;
            contextMenu.style.left = `${event.pageX}px`;
            contextMenu.style.display = "block";
        });
    });

    document.getElementById("context-add").addEventListener("click", function () {
        if (selectedMovie) {
            addToCollection(selectedMovie);
        }
        contextMenu.style.display = "none"; // Hides the menu
    });

    document.getElementById("context-remove").addEventListener("click", function () {
        if (selectedMovie) {
            removeFromCollection(selectedMovie);
        }
        contextMenu.style.display = "none"; // Hides the menu
    });

    document.addEventListener("click", function () {
        contextMenu.style.display = "none"; // Hides the menu when clicking anywhere else
    });

    updateCollectionDisplay();
});