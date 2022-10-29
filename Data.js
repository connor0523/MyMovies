function renderMovies(filter) {
  const moviesWrapper = document.querySelector(".movies");

  const movies = getMovies();


  if(filter === 'LOW_TO_HIGH') {
    movies.sort((a, b) => a.boxOffice - b.boxOffice)
  }

  else if (filter === 'HIGH_TO_LOW') {
    movies.sort((a, b) => b.boxOffice - a.boxOffice)
  }

  else if (filter === 'RATING') {
    movies.sort((a, b) => b.rating - a.rating)

  }

    const moviesHtml = movies
      .map((movies) => {
        return `<div class="movie">
            <div class="movie__img--wrapper">
                <img class="movie__img" src='${movies.url}' alt="">
                <div class="movie__img-wrapper--bg">
                    <div class="movie__description">
                
                    <div class="movie__description--para">
                        <p>
                        ${movies.description} 
                        </p>
                    </div>
                </div>
            
                </div>
                </div>
            <div class="movie__title">
                ${movies.title}
            </div>
            <div class="movie__rating">
                <span class="text-gold"><i class="fa-solid fa-star"></i></span>
                <strong>${movies.rating}/10 IMDB</strong>
            </div>
            <div class="movie__money--made">
                <i class="fa-solid fa-dollar-sign"></i>
                ${movies.boxOffice.toFixed(2)}<span class = "money__underline"> M</span>
            </div>
        </div>`;
    })
    /*IF WANTING TO MAKE ALL MOVIES PHONE OF 
    LIST OF 2 OR FULL SCREEN LIST OF 4 USE 'JOIN("")'*/
    
    
    
    /*IF WANTING TO MAKE ALL MOVIES PHONE OF 
    LIST OF 2 OR FULL SCREEN LIST OF 4 USE 'JOIN("")'*/
    

    moviesWrapper.innerHTML = moviesHtml

}

function filterMovies(event) {
    renderMovies(event.target.value)
}


setTimeout(() => {
  renderMovies();
});

// FAKE DATA
function getMovies() {
  return [
    {
      id: 1,
      title: "Back to the Future",
      url: "Assets/BackToTheFuture.jpg",
      boxOffice: 381,
      description:" Marty McFly, a 17 year old high school student gets lost in 1955 by an accident, 30 years back in time. <br> With the help of his friend Dr. Emmet Brown, he is desperately trying to find his way back to the future in the year 1985. It becomes a battle against the clock.",
      rating: 8.5,
    },
    {
      id: 2,
      title: "Avengers",
      url: "Assets/Avenegers.jpg",
      boxOffice: 1000,
      description: "Earth's Mightiest Heroes stand as the planet's first line of defense against the most powerful threats in the universe. <br> The Avengers began as a group of extraordinary individuals who were assembled to defeat Loki and his Chitauri army in New York City.",
      rating: 8,
    },
    {
      id: 3,
      title: "Harry Potter",
      url: "Assets/HarryPotter.jpg",
      boxOffice: 974,
      description: "A story about Harry Potter, an orphan brought up by his aunt and uncle because his parents were killed when he was a baby. <br> Harry is unloved by his uncle and aunt but everything changes when he is invited to join Hogwarts School of Witchcraft and Wizardry and he finds out he's a wizard.",
      rating: 8.6,
    },
    {
      id: 4,
      title: "Jaws",
      url: "Assets/Jaws.jpg",
      boxOffice: 272,
      description: "When a killer shark unleashes chaos on a beach community off Cape Cod, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down. <br> It's a hot summer on Amity Island, a small community whose main business is its beaches",
      rating: 8.1,
    },
    {
      id: 5,
      title: "Little Man",
      url: "Assets/LittleMan.jpg",
      boxOffice: 101,
      description: "A wannabe-dad mistakes a vertically-challenged criminal on the lam for his newly-adopted son. <br> After leaving prison, dwarf criminal Calvin Sims joins his moron brother Percy to steal an expensive huge diamond for the mobster Walken.",
      rating: 4.4,
    },
    {
      id: 6,
      title: "Spider-Man 2",
      url: "Assets/Spiderman.jpg",
      boxOffice: 788,
      description: "Peter Parker is beset with troubles in his failing personal life as he battles a brilliant scientist named Doctor Otto Octavius. <br> Peter Parker is an unhappy man: after two years of fighting crime as Spider-Man, his life has begun to fall apart.",
      rating: 7.4,
    },
    {
      id: 7,
      title: "The WaterBoy",
      url: "Assets/Waterboy.jpg",
      boxOffice: 190,
      description: "THE WATERBOY stars Adam Sandler as Bobby Boucher, a 31-year-old man who lives with his mother and cares only about providing the freshest, most delicious water for the football team.",
      rating: 6.1,
    },
    {
      id: 8,
      title: "The Princess and the Frog",
      url: "Assets/PrincessAndTheFrog.jpg",
      boxOffice: 104,
      description: "Set in New Orleans during the 1920s, the film tells the story of a hardworking waitress named Tiana who dreams of opening her own restaurant. <br> After kissing a prince who has been turned into a frog by an evil witch doctor, Tiana becomes a frog herself and must find a way to turn back into a human before it is too late.",
      rating: 7.1,
    },
    {
      id: 9,
      title: "Man Of Steel",
      url: "Assets/Superman.jpg",
      boxOffice: 668,
      description: "Earth's Mightiest Heroes stand as the planet's first line of defense against the most powerful threats in the universe. <br> The Avengers began as a group of extraordinary individuals who were assembled to defeat Loki and his Chitauri army in New York City.",
      rating: 7.1,
    },
    {
      id: 10,
      title: "Tenacious D",
      url: "Assets/TenaciousD.jpg",
      boxOffice: 9,
      description: "To become the greatest band of all time, two slacker, wannabe-rockers set out on a quest to steal a legendary guitar pick. <br> This pick gives its holders incredible guitar skills, from a maximum security Rock and Roll museum.",
      rating: 6.8,
    },
    {
      id: 11,
      title: "A Beautiful Mind",
      url: "Assets/ABeautifulMind.jpg",
      boxOffice: 313,
      description: "A Beautiful Mind, American biographical film, released in 2001, that told the story of American Nobel Prize winner John Nash, whose innovative work on game theory in mathematics was in many ways overshadowed by decades of mental illness.",
      rating: 8.2,
    },
    {
      id: 11,
      title: "Fight Club",
      url: "Assets/FightClub.jpg",
      boxOffice: 100,
      description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more. <br> A nameless first person narrator (Edward Norton) attends support groups in attempt to subdue his emotional state and relieve his insomniac state.",
      rating: 8.8,
    },
  ];
}
