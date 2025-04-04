document.addEventListener("DOMContentLoaded", function () {
    const collection = JSON.parse(localStorage.getItem("movieCollection")) || [];
    const collectionContainer = document.getElementById("collection-container");

    
    function displayCollection() {
        collectionContainer.innerHTML = "";

        if (collection.length === 0) {
            collectionContainer.innerHTML = "<p>Your collection is empty.</p>";
            return;
        }

        collection.forEach(movieTitle => {
            const movieElement = document.createElement("div");
            movieElement.classList.add("movie");

            // this generates the image file path based on the movie title
            const imagePath = `./images/${movieTitle}.png`;

            movieElement.innerHTML = `
                <img src="${imagePath}" alt="${movieTitle}">
                <h3>${movieTitle}</h3>
                <button class="remove-from-collection" data-title="${movieTitle}">Remove</button>
            `;

            collectionContainer.appendChild(movieElement);
        });
        

        // This is an event listener for when the user wants to remove a movie from there collection
        document.querySelectorAll(".remove-from-collection").forEach(button => {
            button.addEventListener("click", function () {
                const movieTitle = this.getAttribute("data-title");
                removeFromCollection(movieTitle);
            });
        });
    }

    function removeFromCollection(movieTitle) {
        const index = collection.indexOf(movieTitle);
        if (index > -1) {
            collection.splice(index, 1);
            localStorage.setItem("movieCollection", JSON.stringify(collection));
            displayCollection(); // Refresh the collection
        }
    }

    displayCollection(); // Initially display the collection for the user to see what movies he or she has added
});