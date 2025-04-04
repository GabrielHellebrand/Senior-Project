// This is an event listener for the movie recommendations
document.addEventListener("DOMContentLoaded", function () {
    const collection = JSON.parse(localStorage.getItem("movieCollection")) || [];
    const recommendationsContainer = document.createElement("div");
    recommendationsContainer.id = "recommendations-container";
    document.body.appendChild(recommendationsContainer);

    // movies and the movie recommendations
    const movieData = {
        "Toy Story 2": ["102 Dalmatians", "Stuart Little", "The Road to El Dorado", "Galaxy Quest", "Fantasia 2000"],
        "Chicken Run": ["Thomas & The Magic Railroad", "How The Grinch Stole Christmas", "Monsters Inc", "Shrek"],
        "The Emperor's New Groove": ["Santa Clause 2", "Atlantis: The Lost Empire", "Spy Kids", "Recess: School's Out"],
        "Shrek": ["Rat Race", "Atlantis: The Lost Empire", "Dr. Doolittle 2", "A.I.", "Evolution"],
        "Monsters, Inc.": ["Harry Potter and The Sorcerer's Stone", "Ice Age", "Jimmy Neutron: Boy Genius", "Return to Neverland", "Star Wars: Attack of The Clones"],
        "Harry Potter and The Sorcerer's Stone": ["Ice Age", "Stuart Little 2", "The Lord of The Rings: The Fellowship of The Ring", "A Walk to Remember", "Scooby-Doo", "The Majestic", "Star Wars: Attack of The Clones"],
        "Jimmy Neutron: Boy Genius": ["Ice Age", "Scooby-Doo", "Spirit: Stallion of The Cimarron", "The Powerpuff Girls Movie"],
        "Beauty and the Beast": ["Ice Age", "Spirit: Stallion of The Cimarron", "Stuart Little 2", "The Lion King"],
        "Ice Age": ["Spy Kids 2", "Scooby-Doo", "The Country Bears", "Star Wars: Attack of The Clones"],
        "E.T. The Extra-Terrestrial": ["The Powerpuff Girls Movie", "The Wild Thornberrys Movie", "Finding Nemo", "Lilo & Stitch", "Spy Kids 2", "The Country Bears"],
        "Lilo & Stitch": ["Treasure Planet", "Jonah: A Veggietales Movie", "Stuart Little 2", "The Country Bears"],
        "Spirited Away": ["Harry Potter and The Chamber of Secrets", "Finding Nemo", "The Santa Clause 2", "Treasure Planet", "The Wild Thornberrys Movie", "Tuck Everlasting"],
        "Jonah: A Veggietales Movie": ["Treasure Planet", "Santa Clause 2", "The Wild Thornberrys Movie", "Sinbad: Legend of The Seven Seas"],
        "Harry Potter and The Chamber of Secrets": ["Two Weeks Notice", "What A Girl Wants", "Daddy Day Care", "The Wild Thornberrys Movie", "Agent Cody Banks", "Daredevil", "The Lord of The Rings: The Two Towers", "Kangaroo Jack"],
        "Treasure Planet": ["Kangaroo Jack", "The Wild Thornberrys Movie", "Star Trek: Nemesis","The Jungle Book 2", "Finding Nemo"],
        "The Lion King": ["Piglet's Big Movie", "Kangaroo Jack", "Daddy Day Care", "Pirates of The Caribbean: Curse of The Black Pearl", "Finding Nemo"],
        "Holes": ["Pirates of The Caribbean: Curse of The Black Pearl", "Daddy Day Care", "Rugrats Go Wild", "Sinbad: Legend of The Seven Seas", "Finding Nemo", "Lizzie McGuire Movie"],
        "Finding Nemo": ["Spy Kids 3-D Game Over", "Brother Bear", "Pirates of The Caribbean: Curse of The Black Pearl", "Freaky Friday", "The Incredibles"],
        "Pirates of The Caribbean: Curse of The Black Pearl": ["Radio", "The Last Samurai", "Hidalgo", "Brother Bear", "Secondhand Lions", "Freaky Friday", "The Haunted Mansion"],
        "Secondhand Lions": ["The Lord of The Rings: The Return of The King", "Brother Bear", "Calendar Girls", "Runaway Jury", "Good Boy!", "Elf"],
        "Elf": ["The Lord of The Rings: The Return of The King", "The Haunted Mansion", "Big Fish", "Cheaper By The Dozen", "Shrek 2"],
        "Cheaper By The Dozen": ["Miracle", "Spider-Man 2", "The Spongebob Squarepants Movie", "Shrek 2", "Garfield"],
        "Shrek 2": ["Harry Potter and The Prisoner of Azkaban", "Two Brothers", "Spider-Man 2", "Garfield", "Shark Tale"],
        "Harry Potter & the Prisoner of Azkaban": ["The Spongebob Squarepants Movie", "A Series of Unfortunate Events", "The Terminal", "Spider-Man 2", "Garfield The Movie", "Catwoman", "The Polar Express"],
        "Napoleon Dynamite":["Sky Captain and The World of Tomorrow", "The Incredibles", "The Polar Express", "National Treasure", "The Ringer"],
        "The Incredibles":["National Treasure", "Chicken Little", "Star Wars: Revenge of The Sith", "Madagascar", "Christmas With The Kranks", "Cars"],
        "The Polar Express": ["Because of Winn-Dixie", "A Series of Unfortunate Events", "Madagascar", "Robots", "Chicken Little"],
        "National Treasure": ["Elektra", "Son of The Mask", "Oceans 12", "The Pacifier", "Chicken Little", "The Hitchiker's Guide to The Galaxy"],
        "The Spongebob Squarepants Movie": ["Robots", "Pooh's Huffalump Movie", "Madagascar", "A Series of Unfortunate Events"]
    };
// Default recommendations
    function generateRecommendations(collection) {
        const recommendedMovies = new Map();
        const fallbackMovies = ["Inception", "Interstellar", "The Matrix", "The Dark Knight", "Avatar"];
        
        collection.forEach(movie => {
            if (movieData[movie]) {
                movieData[movie].forEach(rec => {
                    if (!collection.includes(rec)) {
                        recommendedMovies.set(rec, (recommendedMovies.get(rec) || 0) + 1);
                    }
                });
            } else {
                fallbackMovies.forEach(rec => {
                    if (!collection.includes(rec)) {
                        recommendedMovies.set(rec, (recommendedMovies.get(rec) || 0) + 1);
                    }
                });
            }
        });

        return Array.from(recommendedMovies.entries())
            .sort((a, b) => b[1] - a[1]) // Sort by most frequently recommended from the table
            .map(entry => entry[0])
            .slice(0, 20); // Limit recommendations to twenty movies
    }

    function updateRecommendations() {
        const recommendedMovies = generateRecommendations(collection);
        recommendationsContainer.innerHTML = "<h2>Recommended Movies</h2>";

        if (recommendedMovies.length === 0) {
            recommendationsContainer.innerHTML += "<p>No recommendations yet. Add more movies to your collection!</p>";
            return;
        }

        let rowContainer;

        recommendedMovies.forEach((movie, index) => {
            // Creates a new row for every 5 movies
            if (index % 5 === 0) {
                rowContainer = document.createElement("div");
                rowContainer.classList.add("recommendation-row");
                recommendationsContainer.appendChild(rowContainer);
            }

            // Create movie card to store the movie poster
            const movieElement = document.createElement("div");
            movieElement.classList.add("recommended-movie");

            // // Create image element
            const img = document.createElement("img");
            img.src = `./images/${movie}.png`; // images are named after movie titles
            img.alt = movie;

            // Create title element
            const title = document.createElement("h3");
            title.textContent = movie;

            // Append elements
            movieElement.appendChild(img);
            movieElement.appendChild(title);
            rowContainer.appendChild(movieElement);
        });
    }

    // Call function to display recommendations
    updateRecommendations();
});