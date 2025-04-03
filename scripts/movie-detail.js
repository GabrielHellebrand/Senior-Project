document.addEventListener("DOMContentLoaded", function () {
    // Get the movie names
    const urlParams = new URLSearchParams(window.location.search);
    const movieName = urlParams.get("movie");

    // Movie data 
    const movieData = [
            {
                "title": "Hercules",
                "year": 1997,
                "genre": ["Animation", "Adventure", "Romance", "Comedy", "Fantasy", "Family"],
                "director": ["Ron Clements", "Jon Musker"],
                "rating": 3.8,
                "runtime": "93 mins",
                "mpaa": "G"
            },
            {
                "title": "The Little Mermaid",
                "year": "1989",
                "genre": ["Family", "Animation", "Fantasy"],
                "director": ["Jon Musker", "Ron Clements"],
                "rating": 3.7,
                "runtime": "83 mins",
                "mpaa": "G"
            },
            {
                "title": "Anastasia",
                "year": "1997",
                "genre": ["Animation", "Fantasy", "Adventure", "Family"],
                "director": ["Don Bluth", "Gary Goldman"],
                "rating": 3.8,
                "runtime": "94 mins",
                "mpaa": "G"
            },
            {
                "title": "Mulan",
                "year": "1998",
                "genre": ["Family", "Adventure", "Animation"],
                "director": ["Tony Bancroft", "Barry Cook"],
                "rating": 4.1,
                "runtime": "88 mins",
                "mpaa": "G"
            },
            {
                "title": "The Wizard of Oz",
                "year": "1939",
                "genre": ["Adventure", "Family", "Fantasy"],
                "director": "Victor Fleming",
                "rating": 4.0,
                "runtime": "102 mins",
                "mpaa": "G" 
            },
            {
                "title": "A Bug's Life",
                "year": "1998",
                "genre": ["Comedy", "Animation", "Adventure", "Family"],
                "director": "John Lasseter",
                "rating": 3.5,
                "runtime": "95 mins",
                "mpaa": "G" 
            },
            {
                "title": "Tarzan",
                "year": "1999",
                "genre": ["Drama", "Family", "Adventure", "Animation"],
                "director": ["Chris Buck", "Kevin Lima"],
                "rating": 3.7,
                "runtime": "88 mins",
                "mpaa": "G" 
            },
            {
                "title": "Muppets From Space",
                "year": "1999",
                "genre": ["Family", "Comedy", "Science-Fiction", "Fantasy"],
                "director": "Tim Hill",
                "rating": 3.3,
                "runtime": "88 mins",
                "mpaa": "G" 
            },
            {
                "title": "Toy Story",
                "year": "1995",
                "genre": ["Comedy", "Animation", "Family", "Adventure"],
                "director": "John Lasseter",
                "rating": 4.1,
                "runtime": "81 mins",
                "mpaa": "G" 
            },
            {
                "title": "Toy Story 2",
                "year": "1999",
                "genre": ["Family", "Animation", "Comedy"],
                "director": "John Lasseter",
                "rating": 3.9,
                "runtime": "92 mins",
                "mpaa": "G"  
            },
            {
                "title": "Stuart Little",
                "year": "1999",
                "genre": ["Comedy", "Adventure", "Fantasy", "Family"],
                "director": "Rob Minkoff",
                "rating": 2.9,
                "runtime": "84 mins",
                "mpaa": "PG" 
            },
            {
                "title": "Galaxy Quest",
                "year": "1999",
                "genre": ["Comedy", "Science-Fiction", "Adventure"],
                "director": "Dean Parisot",
                "rating": 3.7,
                "runtime": "101 mins",
                "mpaa": "PG" 
            },
            {
                "title": "The Road To El Dorado",
                "year": "2000",
                "genre": ["Comedy", "Family", "Fantasy", "Animation", "Adventure"],
                "director": ["Bilbo Bergeron", "Don Paul"],
                "rating": 3.6,
                "runtime": "89 mins",
                "mpaa": "PG"
            },
            {
                "title": "Dinosaur",
                "year": "2000",
                "genre": ["Adventure", "Animation", "Family"],
                "director": ["Eric Leighton", "Ralph Zondag"],
                "rating": 2.9,
                "runtime": "82 mins",
                "mpaa": "PG"
            },
            {
                "title": "Chicken Run",
                "year": "2000",
                "genre": ["Animation", "Family", "Comedy"],
                "director": ["Peter Lord", "Nick Park"],
                "rating": 3.6,
                "runtime": "84 mins",
                "mpaa": "G" 
            },
            {
                "title": "Remember The Titans",
                "year": "2000",
                "genre": "Drama",
                "director": "Boaz Yakin",
                "rating": 3.8,
                "runtime": "113 mins",
                "mpaa": "PG" 
            },
            {
                "title": "How The Grinch Stole Christmas",
                "year": "2000",
                "genre": ["Family", "Comedy", "Fantasy"],
                "director": "Ron Howard",
                "rating": 3.5,
                "runtime": "104 mins",
                "mpaa": "PG"  
            },
            {
                "title": "The Emperor's New Groove",
                "year": "2000",
                "genre": ["Comedy", "Animation", "Adventure", "Family", "Fantasy"],
                "director": "Mark Dindal",
                "rating": 3.9,
                "runtime": "78 mins",
                "mpaa": "G" 
            },
            {
                "title": "Spy Kids",
                "year": "2001",
                "genre": ["Family", "Adventure", "Comedy", "Science-Fiction", "Action"],
                "director": "Robert Rodriguez",
                "rating": 3.0,
                "runtime": "88 mins",
                "mpaa": "PG" 
            },
            {
                "title": "Shrek",
                "year": "2001",
                "genre": ["Adventure", "Fantasy", "Family", "Animation", "Comedy"],
                "director": ["Andrew Adamson", "Vicky Jenson"],
                "rating": 4.1,
                "runtime": "90 mins",
                "mpaa": "PG"
            },
            {
                "title": "Atlantis: The Lost Empire",
                "year": "2001",
                "genre": ["Family", "Animation", "Adventure", "Science-Fiction"],
                "director": ["Gary Trousdale", "Kirk Wise"],
                "rating": 3.7,
                "runtime": "95 mins",
                "mpaa": "PG"
            },
            {
                "title": "Cats & Dogs",
                "year": "2001",
                "genre": ["Family", "Comedy"],
                "director": "Lawrence Guterman",
                "rating": 2.4,
                "runtime": "87 mins",
                "mpaa": "PG"
            },
            {
                "title": "The Princess Diaries",
                "year": "2001",
                "genre": ["Comedy", "Family", "Romance"],
                "director": "Garry Marshall",
                "rating": 3.7,
                "runtime": "115 mins",
                "mpaa": "G"
            },
            {
                "title": "Osmosis Jones",
                "year": "2001",
                "genre": ["Action", "Family", "Comedy", "Animation", "Adventure"],
                "director": ["Bobby Farrelly", "Peter Farrelly"],
                "rating": 3.0,
                "runtime": "95 mins",
                "mpaa": "PG"  
            },
            {
                "title": "Monsters Inc",
                "year": "2001",
                "genre": ["Comedy", "Animation", "Family"],
                "director": "Pete Doctor",
                "rating": 4.1,
                "runtime": "92 mins",
                "mpaa": "G" 
            },
            {
                "title": "Harry Potter and The Philosopher's Stone",
                "year": "2001",
                "genre": ["Adventure", "Fantasy"],
                "director": "Chris Columbus",
                "rating": 3.8,
                "runtime": "152 mins",
                "mpaa": "PG"
            },
            {
                "title": "Jimmy Neutron: Boy Genius",
                "year": "2001",
                "genre": ["Animation", "Adventure", "Science-Fiction", "Family", "Comedy"],
                "director": "John A Davis",
                "rating": 2.9,
                "runtime": "83 mins",
                "mpaa": "G"  
            },
            {
                "title": "The Lord of The Rings: The Fellowship of The Ring",
                "year": "2001",
                "genre": ["Fantasy", "Adventure", "Action"],
                "director": "Peter Jackson",
                "rating": 4.4,
                "runtime": "179 mins",
                "mpaa": "PG-13"  
            },
            {
                "title": "A Beautiful Mind",
                "year": "2001",
                "genre": ["Drama", "Romance"],
                "director": "Ron Howard",
                "rating": 3.8,
                "runtime": "135 mins",
                "mpaa": "PG-13"  
            },
            {
                "title": "Beauty and The Beast",
                "year": "1991",
                "genre": ["Romance", "Fantasy", "Family", "Animation"],
                "director": ["Gary Trousdale", "Kirk Wise"],
                "rating": 3.9,
                "runtime": "84 mins",
                "mpaa": "G" 
            },
            {
                "title": "The Count of Monte Cristo",
                "year": "2002",
                "genre": ["Adventure", "Drama", "History"],
                "director": "Kevin Reynolds",
                "rating": 3.8,
                "runtime": "131 mins",
                "mpaa": "PG-13"
            },
            {
                "title": "Kung Pow: Enter The Fist",
                "year": "2002",
                "genre": ["Action", "Comedy"],
                "director": "Steve Oedekerk",
                "rating": 3.3,
                "runtime": "81 mins",
                "mpaa": "PG-13"
            },
            {
                "title": "Ice Age",
                "year": "2002",
                "genre": ["Comedy", "Adventure", "Family", "Animation"],
                "director": "Chris Wedge",
                "rating": 3.6,
                "runtime": "81 mins",
                "mpaa": "PG"
            },
            {
                "title": "E.T. The Extra Terrestrial",
                "year": "1982",
                "genre": ["Science-Fiction", "Fantasy", "Adventure", "Family"],
                "director": "Steven Spielberg",
                "rating": 3.8,
                "runtime": "115 mins",
                "mpaa": "PG"
            },
            {
                "title": "The Other Side of Heaven",
                "year": "2001",
                "genre": ["Action", "Adventure", "Family", "Drama"],
                "director": "Mitch Davis",
                "rating": 2.9,
                "runtime": "113 mins",
                "mpaa": "PG"
            },
            {
                "title": "Spider-Man",
                "year": "2002",
                "genre": ["Science-Fiction", "Action"],
                "director": "Sam Raimi",
                "rating": 3.8,
                "runtime": "121 mins",
                "mpaa": "PG-13" 
            },
            {
                "title": "My Big Fat Greek Wedding",
                "year": "2002",
                "genre": ["Drama", "Romance", "Comedy"],
                "director": "Joel Zwick",
                "rating": 3.4,
                "runtime": "95 mins",
                "mpaa": "PG"
            },
            {
                "title": "Spirit: Stallion of The Cimarron",
                "year": "2002",
                "genre": ["Adventure", "Animation", "Western", "Drama", "Romance", "Family"],
                "director": ["Kelly Asbury", "Lorna Cook"],
                "rating": 3.8,
                "runtime": "83 mins",
                "mpaa": "G"
            },
            {
                "title": "Scooby-Doo",
                "year": "2002",
                "genre": ["Comedy", "Adventure", "Mystery"],
                "director": "Raja Gosnell",
                "rating": 3.3,
                "runtime": "86 mins",
                "mpaa": "PG"
            },
            {
                "title": "Lilo & Stitch",
                "year": "2002",
                "genre": ["Comedy", "Animation", "Family"],
                "director": ["Chris Sanders", "Dean DeBlois"],
                "rating": 4.0,
                "runtime": "85 mins",
                "mpaa": "PG"
            },
            {
                "title": "The Bourne Identity",
                "year": "2002",
                "genre": ["Drama", "Action", "Mystery", "Thriller"],
                "director": "Doug Liman",
                "rating": 3.7,
                "runtime": "119 mins",
                "mpaa": "PG-13"
            },
            {
                "title": "Minority Report",
                "year": "2002",
                "genre": ["Thriller", "Science-Fiction", "Action"],
                "director": "Steven Spielberg",
                "rating": 3.8,
                "runtime": "145 mins",
                "mpaa": "PG-13"
            },
            {
                "title": "Like Mike",
                "year": "2002",
                "genre": ["Fantasy", "Comedy", "Family"],
                "director": "John Schultz",
                "rating": 2.9,
                "runtime": "99 mins",
                "mpaa": "PG" 
            },
            {
                "title": "Stuart Little 2",
                "year": "2002",
                "genre": ["Comedy", "Adventure", "Family"],
                "director": "Rob Minkoff",
                "rating": 2.5,
                "runtime": "78 mins",
                "mpaa": "G" 
            },
            {
                "title": "Signs",
                "year": "2002",
                "genre": ["Drama", "Thriller", "Horror", "Science-Fiction", "Mystery"],
                "director": "M. Night Shyamalan",
                "rating": 3.5,
                "runtime": "106 mins",
                "mpaa": "PG-13"  
            },
            {
                "title": "Sprited Away",
                "year": "2001",
                "genre": ["Family", "Fantasy", "Animation"],
                "director": "Hayao Miyazaki",
                "rating": 4.5,
                "runtime": "125 mins",
                "mpaa": "PG"  
            },
            {
                "title": "Jonah: A VeggieTales Movie",
                "year": "2002",
                "genre": ["Adventure", "Family", "Music", "Animation", "Comedy"],
                "director": ["Phil Vischer", "Mike Nawrocki"],
                "rating": 3.2,
                "runtime": "82 mins",
                "mpaa": "G" 
            },
            {
                "title": "Harry Potter and The Chamber of Secrets",
                "year": "2002",
                "genre": ["Fantasy","Adventure"],
                "director": "Chris Columbus",
                "rating": 3.6,
                "runtime": "161 mins",
                "mpaa": "PG" 
            },
            {
                "title": "Treasure Planet",
                "year": "2002",
                "genre": ["Fantasy", "Science-Fiction", "Adventure", "Animation", "Family"],
                "director": ["John Musker", "Ron Clements"],
                "rating": 3.9,
                "runtime": "95 mins",
                "mpaa": "PG" 
            },
            {
                "title": "The Lord of The Rings: The Two Towers",
                "year": "2002",
                "genre": ["Fantasy", "Adventure", "Action"],
                "director": "Peter Jackson",
                "rating": 4.4,
                "runtime": "179 mins",
                "mpaa": "PG-13" 
            },
            {
                "title": "Catch Me If You Can",
                "year": "2002",
                "genre": ["Drama", "Crime"],
                "director": "Steven Spielberg",
                "rating": 4.0,
                "runtime": "141 mins",
                "mpaa": "PG-13" 
            },
            {
                "title": "The Lion King",
                "year": "1994",
                "genre": ["Animation", "Family", "Drama"],
                "director": ["Roger Allers", "Rob Minkoff"],
                "rating": 4.2,
                "runtime": "89 mins",
                "mpaa": "G"
            },
            {
                "title": "Chicago",
                "year": "2002",
                "genre": ["Comedy", "Crime", "Drama"],
                "director": "Rob Marshall",
                "rating": 3.9,
                "runtime": "113 mins",
                "mpaa": "PG-13"
            },
            {
                "title": "Bend It Like Beckham",
                "year": "2002",
                "genre": ["Comedy", "Romance", "Drama"],
                "director": "Gurinder Chadha",
                "rating": 3.4,
                "runtime": "112 mins",
                "mpaa": "PG-13"
            },
            {
                "title": "Anger Management",
                "year": "2003",
                "genre": "Comedy",
                "director": "Peter Segal",
                "rating": 2.8,
                "runtime": "106 mins",
                "mpaa": "PG-13"
            },
            {
                "title": "Holes",
                "year": "2003",
                "genre": ["Comedy", "Adventure", "Family", "Drama"],
                "director": "Andrew Davis",
                "rating": 3.5,
                "runtime": "117 mins",
                "mpaa": "PG"
            },
            {
                "title": "A Mighty Wind",
                "year": "2003",
                "genre": ["Music", "Comedy"],
                "director": "Christopher Guest",
                "rating": 3.7,
                "runtime": "92 mins",
                "mpaa": "PG-13"   
            },
            {
                "title": "X2",
                "year": "2003",
                "genre": ["Action", "Adventure", "Science-Fiction"],
                "director": "Bryan Singer",
                "rating": 3.4,
                "runtime": "133 mins",
                "mpaa": "PG-13"    
            },
            {
                "title": "Daddy Day Care",
                "year": "2003",
                "genre": ["Comedy", "Family"],
                "director": "Steve Carr",
                "rating": 2.9,
                "runtime": "92 mins",
                "mpaa": "PG"   
            },
            {
                "title": "Bruce Almighty",
                "year": "2003",
                "genre": ["Comedy", "Fantasy"],
                "director": "Tom Shadyac",
                "rating": 3.2,
                "runtime": "101 mins",
                "mpaa": "PG-13"   
            },
            {
                "title": "Finding Nemo",
                "year": "2003",
                "genre": ["Animation", "Family"],
                "director": "Andrew Stanton",
                "rating": 4.0,
                "runtime": "100 mins",
                "mpaa": "G"  
            },
            {
                "title": "Whale Rider",
                "year": "2002",
                "genre": ["Drama", "Family"],
                "director": "Niki Caro",
                "rating": 3.7,
                "runtime": "101 mins",
                "mpaa": "PG-13"   
            },
            {
                "title": "Sinbad: Legend of the Seven Seas",
                "year": "2003",
                "genre": ["Comedy", "Fantasy", "Animation", "Action", "Family", "Adventure"],
                "director": ["Tim Johnson", "Patrick Gilmore"],
                "rating": 3.5,
                "runtime": "90 mins",
                "mpaa": "PG"   
            },
            {
                "title": "Pirates of The Caribbean: The Curse of The Black Pearl",
                "year": "2003",
                "genre": ["Fantasy", "Adventure", "Action"],
                "director": "Gore Verbinski",
                "rating": 3.9,
                "runtime": "143 mins",
                "mpaa": "PG-13" 
            },
            {
                "title": "Johnny English",
                "year": "2003",
                "genre": ["Adventure", "Comedy", "Action"],
                "director": "Peter Howitt",
                "rating": 3.0,
                "runtime": "89 mins",
                "mpaa": "PG" 
            },
            {
                "title": "Seabiscuit",
                "year": "2003",
                "genre": ["History", "Drama"],
                "director": "Gary Ross",
                "rating": 3.3,
                "runtime": "141 mins",
                "mpaa": "PG-13" 
            },
            {
                "title": "Freaky Friday",
                "year": "2003",
                "genre": ["Comedy", "Family", "Fantasy"],
                "director": "Mark Waters",
                "rating": 3.5,
                "runtime": "97 mins",
                "mpaa": "PG" 
            },
            {
                "title": "Matchstick Men",
                "year": "2003",
                "genre": ["Drama", "Crime", "Thriller", "Comedy"],
                "director": "Ridley Scott",
                "rating": 3.6,
                "runtime": "116 mins",
                "mpaa": "PG-13" 
            },
            {
                "title": "Secondhand Lions",
                "year": "2003",
                "genre": ["Family", "Comedy"],
                "director": "Tim McCanlies",
                "rating": 3.5,
                "runtime": "111 mins",
                "mpaa": "PG" 
            },
            {
                "title": "School of Rock",
                "year": "2003",
                "genre": ["Music", "Comedy"],
                "director": "Richard Linklater",
                "rating": 3.8,
                "runtime": "110 mins",
                "mpaa": "PG-13" 
            },
            {
                "title": "Brother Bear",
                "year": "2003",
                "genre": ["Animation", "Family", "Adventure"],
                "director": ["Aaron Blaise", "Robert Walker"],
                "rating": 3.7,
                "runtime": "85 mins",
                "mpaa": "G"  
            },
            {
                "title": "Elf",
                "year": "2003",
                "genre": ["Family", "Fantasy", "Comedy"],
                "director": "Jon Favreau",
                "rating": 3.5,
                "runtime": "97 mins",
                "mpaa": "PG" 
            },
            {
                "title": "Master & Commander: The Far Side of The World",
                "year": "2003",
                "genre": ["Drama", "Adventure", "War"],
                "director": "Peter Weir",
                "rating": 4.0,
                "runtime": "138 mins",
                "mpaa": "PG-13" 
            },
            {
                "title": "The Lord of The Rings: The Return of The King",
                "year": "2003",
                "genre": ["Fantasy", "Adventure", "Action"],
                "director": "Peter Jackson",
                "rating": 4.5,
                "runtime": "201 mins",
                "mpaa": "PG-13" 
            },
            {
                "title": "Cheaper By The Dozen",
                "year": "2003",
                "genre": ["Comedy", "Family", "Drama"],
                "director": "Shawn Levy",
                "rating": 3.1,
                "runtime": "98 mins",
                "mpaa": "PG"  
            },
            {
                "title": "Peter Pan",
                "year": "2003",
                "genre": ["Fantasy", "Family", "Adventure"],
                "director": "P.J. Hogan",
                "rating": 3.5,
                "runtime": "113 mins",
                "mpaa": "PG" 
            },
            {
                "title": "Big Fish",
                "year": "2003",
                "genre": ["Drama", "Adventure", "Fantasy"],
                "director": "Tim Burton",
                "rating": 3.9,
                "runtime": "125 mins",
                "mpaa": "PG-13" 
            },
            {
                "title": "Miracle",
                "year": "2004",
                "genre": ["History", "Drama"],
                "director": "Gavin O'Connor",
                "rating": 3.7,
                "runtime": "135 mins",
                "mpaa": "PG" 
            },
            {
                "title": "50 First Dates",
                "year": "2004",
                "genre": ["Comedy", "Romance"],
                "director": "Peter Segal",
                "rating": 3.3,
                "runtime": "99 mins",
                "mpaa": "PG-13"  
            },
            {
                "title": "Starsky & Hutch",
                "year": "2004",
                "genre": ["Crime", "Comedy"],
                "director": "Todd Phillips",
                "rating": 2.9,
                "runtime": "101 mins",
                "mpaa": "PG-13"  
            },
            {
                "title": "13 Going On 30",
                "year": "2004",
                "genre": ["Comedy", "Romance", "Fantasy"],
                "director": "Gary Winick",
                "rating": 3.6,
                "runtime": "98 mins",
                "mpaa": "PG-13"   
            },
            {
                "title": "Mean Girls",
                "year": "2004",
                "genre": ["Comedy", "Drama"],
                "director": "Mark Waters",
                "rating": 3.8,
                "runtime": "97 mins",
                "mpaa": "PG-13" 
            },
            {
                "title": "Shrek 2",
                "year": "2004",
                "genre": ["Family", "Adventure", "Comedy", "Animation", "Fantasy"],
                "director": ["Conrad Vernon", "Kelly Asbury"],
                "rating": 4.1,
                "runtime": "92 mins",
                "mpaa": "PG" 
            },
            {
                "title": "Super Size Me",
                "year": "2004",
                "genre": "Documentary",
                "director": "Morgan Spurlock",
                "rating": 3.1,
                "runtime": "100 mins",
                "mpaa": "PG-13"  
            },
            {
                "title": "Harry Potter and The Prisoner of Azkaban",
                "year": "2004",
                "genre": ["Fantasy", "Adventure"],
                "director": "Alfonso Cuaron",
                "rating": 4.1,
                "runtime": "141 mins",
                "mpaa": "PG"  
            },
            {
                "title": "Garfield The Movie",
                "year": "2004",
                "genre": ["Family", "Comedy"],
                "director": "Peter Hewitt",
                "rating": 2.5,
                "runtime": "80 mins",
                "mpaa": "PG"
            },
            {
                "title": "Dodgeball: A True Underdog Story",
                "year": "2004",
                "genre": "Comedy",
                "director": "Rawson Marshall Thurber",
                "rating": 3.2,
                "runtime": "92 mins",
                "mpaa": "PG-13"
            },
            {
                "title": "The Terminal",
                "year": "2004",
                "genre": ["Comedy","Drama"],
                "director": "Steven Spielberg",
                "rating": 3.6,
                "runtime": "128 mins",
                "mpaa": "PG-13"
            },
            {
                "title": "Spider-Man 2",
                "year": "2004",
                "genre": ["Action", "Science-Fiction", "Adventure"],
                "director": "Sam Raimi",
                "rating": 3.9,
                "runtime": "127 mins",
                "mpaa": "PG-13"
            },
            {
                "title": "Anchorman: The Legend of Ron Burgundy",
                "year": "2004",
                "genre": "Comedy",
                "director": "Adam McKay",
                "rating": 3.5,
                "runtime": "95 mins",
                "mpaa": "PG-13"
            },
            {
                "title": "I, Robot",
                "year": "2004",
                "genre": ["Action", "Science-Fiction"],
                "director": "Alex Proyas",
                "rating": 3.2,
                "runtime": "115 mins",
                "mpaa": "PG-13"
            },
            {
                "title": "The Bourne Supremacy",
                "year": "2004",
                "genre": ["Drama", "Action", "Thriller"],
                "director": "Paul Greengrass",
                "rating": 3.6,
                "runtime": "108 mins",
                "mpaa": "PG-13"  
            },
            {
                "title": "Napoleon Dynamite",
                "year": "2004",
                "genre": "Comedy",
                "director": "Jared Hess",
                "rating": 3.7,
                "runtime": "95 mins",
                "mpaa": "PG"
            },
            {
                "title": "Shark Tale",
                "year": "2004",
                "genre": ["Action", "Animation", "Comedy", "Family"],
                "director": ["Bilbo Bergeron", "Rob Letterman"],
                "rating": 2.9,
                "runtime": "90 mins",
                "mpaa": "PG"
            },
            {
                "title": "Friday Night Lights",
                "year": "2004",
                "genre": "Drama",
                "director": "Peter Berg",
                "rating": 3.6,
                "runtime": "118 mins",
                "mpaa": "PG-13"
            },
            {
                "title": "Shall We Dance",
                "year": "2004",
                "genre": ["Drama", "Romance", "Comedy"],
                "director": "Peter Chelsom",
                "rating": 3.0,
                "runtime": "107 mins",
                "mpaa": "PG-13"
            },
            {
                "title": "The Grudge",
                "year": "2004",
                "genre": ["Horror", "Mystery", "Thriller"],
                "director": "Takashi Shimizu",
                "rating": 2.8,
                "runtime": "92 mins",
                "mpaa": "PG-13"
            },
            {
                "title": "Ray",
                "year": "2004",
                "genre": ["Drama", "Music"],
                "director": "Taylor Hackford",
                "rating": 3.7,
                "runtime": "152 mins",
                "mpaa": "PG-13"  
            },
            {
                "title": "The Incredibles",
                "year": "2004",
                "genre": ["Animation", "Family", "Adventure", "Action"],
                "director": "Brad Bird",
                "rating": 4.1,
                "runtime": "115 mins",
                "mpaa": "PG"   
            },
            {
                "title": "The Polar Express",
                "year": "2004",
                "genre": ["Adventure", "Animation", "Family", "Fantasy"],
                "director": "Robert Zemeckis",
                "rating": 3.3,
                "runtime": "100 mins",
                "mpaa": "G" 
            },
            {
                "title": "The Spongebob Squarepants Movie",
                "year": "2004",
                "genre": ["Adventure", "Comedy", "Fantasy", "Family", "Animation"],
                "director": "Stephen Hillenburg",
                "rating": 3.9,
                "runtime": "87 mins",
                "mpaa": "PG" 
            },
            {
                "title": "National Treasure",
                "year": "2004",
                "genre": ["Thriller", "Mystery", "Adventure", "Action"],
                "director": "Jon Turtletaub",
                "rating": 3.3,
                "runtime": "131 mins",
                "mpaa": "PG" 
            },
            {
                "title": "Finding Neverland",
                "year": "2004",
                "genre": ["Fantasy", "Drama"],
                "director": "Marc Forster",
                "rating": 3.5,
                "runtime": "106 mins",
                "mpaa": "PG" 
            },
            {
                "title": "A Series of Unfortunate Events",
                "year": "2004",
                "genre": ["Family", "Adventure", "Comedy"],
                "director": "Brad Silberling",
                "rating": 3.3,
                "runtime": "108 mins",
                "mpaa": "PG" 
            },
            {
                "title": "The Aviator",
                "year": "2004",
                "genre": "Drama",
                "director": "Martin Scorcese",
                "rating": 3.7,
                "runtime": "170 mins",
                "mpaa": "PG-13" 
            },
            {
                "title": "The Phantom of The Opera",
                "year": "2004",
                "genre": ["Drama", "Romance", "Thriller"],
                "director": "Joel Schumacher",
                "rating": 3.6,
                "runtime": "141 mins",
                "mpaa": "PG-13"  
            },
            {
                "title": "Million Dollar Baby",
                "year": "2004",
                "genre": "Drama",
                "director": "Clint Eastwood",
                "rating": 4.0,
                "runtime": "132 mins",
                "mpaa": "PG-13"  
            },
            {
                "title": "Coach Carter",
                "year": "2005",
                "genre": ["Drama", "History"],
                "director": "Thomas Carter",
                "rating": 3.8,
                "runtime": "136 mins",
                "mpaa": "PG-13"  
            },
            {
                "title": "Hitch",
                "year": "2005",
                "genre": ["Romance", "Comedy", "Drama"],
                "director": "Andy Tennant",
                "rating": 3.1,
                "runtime": "118 mins",
                "mpaa": "PG-13"  
            },
            {
                "title": "Because of Winn Dixie",
                "year": "2005",
                "genre": ["Drama", "Comedy", "Family"],
                "director": "Wayne Wang",
                "rating": 3.2,
                "runtime": "106 mins",
                "mpaa": "PG"  
            },
            {
                "title": "Robots",
                "year": "2005",
                "genre": ["Science-Fiction", "Animation", "Comedy", "Family"],
                "director": "Chris Wedge",
                "rating": 3.3,
                "runtime": "90 mins",
                "mpaa": "PG"
            },
            {
                "title": "The Hitchiker's Guide to The Galaxy",
                "year": "2005",
                "genre": ["Comedy", "Adventure", "Science-Fiction"],
                "director": "Garth Jennings",
                "rating": 3.4,
                "runtime": "109 mins",
                "mpaa": "PG"
            },
            {
                "title": "Kicking & Screaming",
                "year": "2005",
                "genre": ["Family", "Comedy"],
                "director": "Jesse Dylan",
                "rating": 2.8,
                "runtime": "95 mins",
                "mpaa": "PG"
            },
            {
                "title": "Star Wars",
                "year": "1977",
                "genre": ["Adventure", "Action", "Science-Fiction"],
                "director": "George Lucas",
                "rating": 4.2,
                "runtime": "121 mins",
                "mpaa": "PG"
            },
            {
                "title": "The Empire Strikes Back",
                "year": "1980",
                "genre": ["Action", "Science-Fiction", "Adventure"],
                "director": "Irvin Kershner",
                "rating": 4.4,
                "runtime": "124 mins",
                "mpaa": "PG"  
            },
            {
                "title": "Return of The Jedi",
                "year": "1983",
                "genre": ["Action", "Science-Fiction", "Adventure"],
                "director": "Richard Marquand",
                "rating": 4.1,
                "runtime": "132 mins",
                "mpaa": "PG"  
            },
            {
                "title": "Star Wars Episode 1: The Phantom Menace",
                "year": "1999",
                "genre": ["Action", "Science-Fiction", "Adventure"],
                "director": "George Lucus",
                "rating": 3.0,
                "runtime": "136 mins",
                "mpaa": "PG"   
            },
            {
                "title": "Star Wars Episode 2: Attack of The Clones",
                "year": "2002",
                "genre": ["Action", "Science-Fiction", "Adventure"],
                "director": "George Lucus",
                "rating": 2.9,
                "runtime": "142 mins",
                "mpaa": "PG"
            },
            {
                "title": "Star Wars Episode 3: Revenge of The Sith",
                "year": "2005",
                "genre": ["Science-Fiction", "Adventure", "Action"],
                "director": "George Lucus",
                "rating": 3.9,
                "runtime": "140 mins",
                "mpaa": "PG-13"
            },
            {
                "title": "Madagascar",
                "year": "2005",
                "genre": ["Family", "Adventure", "Comedy", "Animation"],
                "director": ["Eric Darnell", "Tom McGrath"],
                "rating": 3.5,
                "runtime": "86 mins",
                "mpaa": "PG"
            },
            {
                "title": "The Longest Yard",
                "year": "2005",
                "genre": ["Drama", "Comedy"],
                "director": "Peter Segal",
                "rating": 3.0,
                "runtime": "113 mins",
                "mpaa": "PG-13"
            },
            {
                "title": "Cinderella Man",
                "year": "2005",
                "genre": ["Romance", "History", "Drama"],
                "director": "Ron Howard",
                "rating": 3.8,
                "runtime": "144 mins",
                "mpaa": "PG-13" 
            },
            {
                "title": "Howl's Moving Castle",
                "year": "2004",
                "genre": ["Fantasy", "Adventure", "Animation"],
                "director": "Hayao Miyazaki",
                "rating": 4.3,
                "runtime": "119 mins",
                "mpaa": "PG"
            },
            {
                "title": "Batman Begins",
                "year": "2005",
                "genre": ["Crime", "Action", "Drama"],
                "director": "Christopher Nolan",
                "rating": 3.8,
                "runtime": "140 mins",
                "mpaa": "PG-13"
            },
            {
                "title": "War of The Worlds",
                "year": "2005",
                "genre": ["Science-Fiction", "Adventure", "Thriller"],
                "director": "Stephen Spielberg",
                "rating": 3.3,
                "runtime": "117 mins",
                "mpaa": "PG-13"
            },
            {
                "title": "Herbie: Fully Loaded",
                "year": "2005",
                "genre": ["Adventure", "Comedy", "Fantasy", "Romance", "Family"],
                "director": "Angela Robinson",
                "rating": 2.5,
                "runtime": "100 mins",
                "mpaa": "G"
            },
            {
                "title": "Charlie & The Chocolate Factory",
                "year": "2005",
                "genre": ["Fantasy", "Comedy", "Adventure", "Family"],
                "director": "Tim Burton",
                "rating": 3.3,
                "runtime": "115 mins",
                "mpaa": "PG"
            },
            {
                "title": "Fantastic Four",
                "year": "2005",
                "genre": ["Science-Fiction", "Action", "Fantasy"],
                "director": "Tim Story",
                "rating": 2.5,
                "runtime": "106 mins",
                "mpaa": "PG-13"
            },
            {
                "title": "Sky High",
                "year": "2005",
                "genre": ["Family", "Comedy", "Adventure"],
                "director": "Mike Mitchell",
                "rating": 3.1,
                "runtime": "99 mins",
                "mpaa": "PG"
            },
            {
                "title": "March of The Penguins",
                "year": "2005",
                "genre": ["Family", "Documentary"],
                "director": "Luc Jacquet",
                "rating": 3.6,
                "runtime": "80 mins",
                "mpaa": "G"
            },
            {
                "title": "Valiant",
                "year": "2005",
                "genre": ["Comedy", "War", "Family", "Animation", "Adventure"],
                "director": "Gary Chapman",
                "rating": 2.4,
                "runtime": "76 mins",
                "mpaa": "G" 
            },
            {
                "title": "The Brothers Grimm",
                "year": "2005",
                "genre": ["Fantasy", "Action", "Comedy", "Thriller", "Adventure"],
                "director": "Terry Gilliam",
                "rating": 2.7,
                "runtime": "118 mins",
                "mpaa": "PG-13" 
            },
            {
                "title": "Corpse Bride",
                "year": "2005",
                "genre": ["Animation", "Fantasy", "Romance"],
                "director": ["Mike Johnson", "Tim Burton"],
                "rating": 3.9,
                "runtime": "77 mins",
                "mpaa": "PG" 
            },
            {
                "title": "The Greatest Game Ever Played",
                "year": "2005",
                "genre": "Drama",
                "director": "Bill Paxton",
                "rating": 3.5,
                "runtime": "120 mins",
                "mpaa": "PG"
            },
            {
                "title": "Wallace & Gromit: The Curse of The Were Rabbit",
                "year": "2005",
                "genre": ["Adventure", "Family", "Comedy", "Animation"],
                "director": ["Steve Box", "Nick Park"],
                "rating": 3.8,
                "runtime": "85 mins",
                "mpaa": "G"
            },
            {
                "title": "Serenity",
                "year": "2005",
                "genre": ["Science-Fiction", "Action", "Adventure", "Thriller"],
                "director": "Joss Whedon",
                "rating": 3.7,
                "runtime": "119 mins",
                "mpaa": "PG-13"
            },
            {
                "title": "Good Night, and Good Luck",
                "year": "2005",
                "genre": ["History", "Drama"],
                "director": "George Clooney",
                "rating": 3.7,
                "runtime": "92 mins",
                "mpaa": "PG"
            },
            {
                "title": "Dreamer",
                "year": "2005",
                "genre": ["Drama", "Family"],
                "director": "John Gatins",
                "rating": 3.2,
                "runtime": "106 mins",
                "mpaa": "PG"
            },
            {
                "title": "Chicken Little",
                "year": "2005",
                "genre": ["Animation", "Comedy", "Family"],
                "director": "Mark Dindal",
                "rating": 2.8,
                "runtime": "81 mins",
                "mpaa": "G"
            },
            {
                "title": "Zathura: A Space Adventure",
                "year": "2005",
                "genre": ["Family", "Science-Fiction", "Adventure"],
                "director": "Jon Favreau",
                "rating": 3.2,
                "runtime": "101 mins",
                "mpaa": "PG"
            },
            {
                "title": "Harry Potter & The Goblet of Fire",
                "year": "2005",
                "genre": ["Adventure", "Fantasy"],
                "director": "Mike Newell",
                "rating": 3.8,
                "runtime": "157 mins",
                "mpaa": "PG-13"
            },
            {
                "title": "Walk The Line",
                "year": "2005",
                "genre": ["Music", "Drama", "Romance"],
                "director": "James Mangold",
                "rating": 3.8,
                "runtime": "136 mins",
                "mpaa": "PG-13"
            },
            {
                "title": "Pride & Prejudice",
                "year": "2005",
                "genre": ["Drama", "Romance"],
                "director": "Joe Wright",
                "rating": 4.1,
                "runtime": "129 mins",
                "mpaa": "PG"
            },
            {
                "title": "The Chronicles of Narnia: The Lion The Witch & The Wardrobe",
                "year": "2005",
                "genre": ["Adventure", "Fantasy", "Family"],
                "director": "Andrew Adamson",
                "rating": 3.6,
                "runtime": "143 mins",
                "mpaa": "PG"
            },
            {
                "title": "King Kong",
                "year": "2005",
                "genre": ["Drama", "Action", "Adventure"],
                "director": "Peter Jackson",
                "rating": 3.4,
                "runtime": "187 mins",
                "mpaa": "PG-13"
            },
            {
                "title": "Memoirs of A Geisha",
                "year": "2005",
                "genre": ["Romance", "History", "Drama"],
                "director": "Rob Marshall",
                "rating": 3.5,
                "runtime": "146 mins",
                "mpaa": "PG-13"
            },
            {
                "title": "Glory Road",
                "year": "2006",
                "genre": ["History", "Drama"],
                "director": "James Gartner",
                "rating": 3.4,
                "runtime": "118 mins",
                "mpaa": "PG"
            },
            {
                "title": "Hoodwinked!",
                "year": "2005",
                "genre": ["Family", "Animation", "Crime", "Comedy", "Music"],
                "director": "Cory Edwards",
                "rating": 3.3,
                "runtime": "81 mins",
                "mpaa": "PG"
            },
            {
                "title": "Nanny McPhee",
                "year": "2005",
                "genre": ["Family", "Comedy", "Fantasy"],
                "director": "Kirk Jones",
                "rating": 3.3,
                "runtime": "97 mins",
                "mpaa": "PG"
            },
            {
                "title": "Curious George",
                "year": "2006",
                "genre": ["Family", "Adventure", "Comedy", "Animation"],
                "director": "Matthew O'Callaghan",
                "rating": 3.5,
                "runtime": "87 mins",
                "mpaa": "G"
            },
            {
                "title": "Eight Below",
                "year": "2006",
                "genre": ["Drama", "Adventure", "Family"],
                "director": "Frank Marshall",
                "rating": 3.2,
                "runtime": "120 mins",
                "mpaa": "PG"
            },
            {
                "title": "Aquamarine",
                "year": "2006",
                "genre": ["Fantasy", "Comedy", "Family", "Romance"],
                "director": "Elizabeth Allen Rosenbaum",
                "rating": 3.3,
                "runtime": "103 mins",
                "mpaa": "PG" 
            },
            {
                "title": "Failure to Launch",
                "year": "2006",
                "genre": [ "Romance", "Comedy"],
                "director": "Tom Dey",
                "rating": 2.5,
                "runtime": "97 mins",
                "mpaa": "PG-13" 
            },
            {
                "title": "Ice Age: The Meltdown",
                "year": "2006",
                "genre": [ "Adventure", "Comedy", "Family", "Animation"],
                "director": "Carlos Saldanha",
                "rating": 3.1,
                "runtime": "91 mins",
                "mpaa": "PG"  
            },
            {
                "title": "The Benchwarmers",
                "year": "2006",
                "genre": "Comedy",
                "director": "Dennis Dugan",
                "rating": 2.6,
                "runtime": "85 mins",
                "mpaa": "PG-13" 
            },
            {
                "title": "RV",
                "year": "2006",
                "genre": ["Drama", "Comedy", "Family", "Romance"],
                "director": "Barry Sonnenfeld",
                "rating": 2.6,
                "runtime": "99 mins",
                "mpaa": "PG"
            },
            {
                
            }
        ];

    // Get movie details based on movie name
    const movie = movieData[movieName];

    // Check if the movie data exists
    if (movie) {
        // Set movie details in the HTML
        document.getElementById("movie-title").textContent = movie.title;
        document.getElementById("movie-runtime").textContent = movie.runtime;
        document.getElementById("movie-rating").textContent = movie.rating;
        document.getElementById("movie-description").textContent = movie.description;
    } else {
        // If movie is not found, display an error
        document.getElementById("movie-title").textContent = "Movie Not Found";
        document.getElementById("movie-description").textContent = "Sorry, we couldn't find the movie details.";
    }
});