        class Carousel {
            constructor() {
                this.currentSlide = 0;
                this.totalSlides = 5;
                
                this.track = document.getElementById('carouselTrack');
                this.prevBtn = document.getElementById('prevBtn');
                this.nextBtn = document.getElementById('nextBtn');
                this.counter = document.getElementById('slideCounter');
                
                this.init();
            }

            init() {
                this.updateCarousel();
                this.bindEvents();
            }

            updateCarousel() {
                const translateX = -(this.currentSlide * 100);
                this.track.style.transform = `translateX(${translateX}%)`;
                
                this.prevBtn.disabled = this.currentSlide === 0;
                this.nextBtn.disabled = this.currentSlide === this.totalSlides - 1;
                
                this.counter.textContent = `${this.currentSlide + 1} of ${this.totalSlides}`;
            }

            goToSlide(index) {
                this.currentSlide = Math.max(0, Math.min(index, this.totalSlides - 1));
                this.updateCarousel();
            }

            next() {
                if (this.currentSlide < this.totalSlides - 1) {
                    this.currentSlide++;
                    this.updateCarousel();
                }
            }

            prev() {
                if (this.currentSlide > 0) {
                    this.currentSlide--;
                    this.updateCarousel();
                }
            }

            bindEvents() {
                this.nextBtn.addEventListener('click', () => this.next());
                this.prevBtn.addEventListener('click', () => this.prev());

                // Keyboard navigation
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'ArrowLeft') this.prev();
                    if (e.key === 'ArrowRight') this.next();
                });

                // Touch support
                let startX = 0;
                this.track.addEventListener('touchstart', (e) => {
                    startX = e.touches[0].clientX;
                });

                this.track.addEventListener('touchend', (e) => {
                    const endX = e.changedTouches[0].clientX;
                    const diff = startX - endX;
                    
                    if (Math.abs(diff) > 50) {
                        if (diff > 0) this.next();
                        else this.prev();
                    }
                });
            }
        }

        // Search functionality
        class MovieSearch {
            constructor() {
                this.searchBar = document.getElementById('search-bar');
                this.movies = document.querySelectorAll('.movie');
                this.init();
            }

            init() {
                this.searchBar.addEventListener('input', (e) => this.handleSearch(e.target.value));
            }

            handleSearch(query) {
                const searchTerm = query.toLowerCase().trim();
                
                this.movies.forEach(movie => {
                    const title = movie.dataset.title.toLowerCase();
                    const slide = movie.closest('.movie-slide');
                    
                    if (title.includes(searchTerm) || searchTerm === '') {
                        movie.style.display = 'block';
                    } else {
                        movie.style.display = 'none';
                    }
                });
            }
        }

        // Context menu
        class ContextMenu {
            constructor() {
                this.contextMenu = document.getElementById('context-menu');
                this.selectedMovie = null;
                this.collection = JSON.parse(localStorage.getItem('movieCollection')) || [];
                this.init();
            }

            init() {
                document.addEventListener('contextmenu', (e) => this.handleRightClick(e));
                document.addEventListener('click', () => this.hideMenu());
                
                document.getElementById('context-add').addEventListener('click', () => {
                    if (this.selectedMovie) {
                        this.addToCollection(this.selectedMovie);
                        this.hideMenu();
                    }
                });

                document.getElementById('context-remove').addEventListener('click', () => {
                    if (this.selectedMovie) {
                        this.removeFromCollection(this.selectedMovie);
                        this.hideMenu();
                    }
                });
            }

            handleRightClick(e) {
                const movieElement = e.target.closest('.movie');
                if (movieElement) {
                    e.preventDefault();
                    this.selectedMovie = movieElement.dataset.title;
                    this.showMenu(e.pageX, e.pageY);
                }
            }

            showMenu(x, y) {
                this.contextMenu.style.left = `${x}px`;
                this.contextMenu.style.top = `${y}px`;
                this.contextMenu.style.display = 'block';
            }

            hideMenu() {
                this.contextMenu.style.display = 'none';
            }

            addToCollection(movieTitle) {
                if (!this.collection.includes(movieTitle)) {
                    this.collection.push(movieTitle);
                    localStorage.setItem('movieCollection', JSON.stringify(this.collection));
                }
            }

            removeFromCollection(movieTitle) {
                const index = this.collection.indexOf(movieTitle);
                if (index > -1) {
                    this.collection.splice(index, 1);
                    localStorage.setItem('movieCollection', JSON.stringify(this.collection));
                }
            }
        }

        // Initialize everything
        document.addEventListener('DOMContentLoaded', () => {
            new Carousel();
            new MovieSearch();
            new ContextMenu();
        });