import { useState } from "react";


const MoviesList = () => {

    const [movies, setMovies] = useState([
        {title: 'Harry Potter', genre: 'Fantasy', description: 'It follows the magical adventures of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley.'},
        {title: 'John Wick', genre: 'Action', description: 'A retired hitman, John Wick, played by Keanu Reeves.'},
        {title: 'DeadPool', genre: 'Action', description: 'A wisecracking, anti-hero Wade Wilson, also knows as Deadpool and played by Ryan Reynolds, He embarks on a mission to hunt down those who wronged him.'},
        {title: 'Star Wars', genre: 'Sci-Fi', description: 'Created by George Lucas, is an epic space opera set in a distant galaxy. It follows the battle between the Jedi, guardians of peace and justice who use the mystical Force, and the Sith, who seek power and control.'},
        {title: 'Shang-Chi', genre: 'Action, Fantasy', description: 'Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.'}
    ]);

    const [showDetails, setShowDetails] = useState({});

    const removeMovie = (title) => {
        setMovies(movies.filter(movie => movie.title !== title));
    };

    const [showAll, setShowAll] = useState(true);

    const toggleDetails = (title) => {
        setShowDetails(prevState => ({
            ...prevState, [title]: !prevState[title]
        }));
    };

    const toggleGenre = () => {
        setShowAll(!showAll);
    };


    return (
        <div>
            <h1>Favorite Movies</h1>
            <button onClick={toggleGenre}>
                {showAll ? 'Show Only Action Movies' : 'Show All Movies'}
            </button>
            <ul>
                {movies.filter(movie => showAll || movie.genre === 'Action').map((movie, index) => (
                    <li key={index}>
                        <div class="list">
                            {movie.title}
                        </div>
                        <div>
                            <button onClick={() => toggleDetails(movie.title)}>
                                {showDetails[movie.title] ? 'Hide Details' : 'Show Details'}
                                {showDetails[movie.title] && (
                                <p>{movie.description}</p>
                                )}
                            </button>
                            <button onClick={() => removeMovie(movie.title)}>Remove</button>
                            
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;