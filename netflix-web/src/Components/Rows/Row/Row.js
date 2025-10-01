




import React, { useEffect, useState } from "react"; // 💡 Import React
import "./Row.css";
import axios from"../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original/"; 

const Row = ({ title, fetchUrl, islargeRow }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

   

    useEffect(() => {
        const fetchData = async () => {
            try {
                const request = await axios.get( fetchUrl);

                // `http://localhost:3000/api/${fetchUrl}`
                
                setMovies(request.data.results);
            } catch (error) {
                console.error("Error fetching movie data:", error);
            }
        };

        fetchData();
    }, [fetchUrl]); 


    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            // const movieTrailer = (name) => Promise.resolve(`https://www.youtube.com/watch?v=dQw4w9WgXcQ&v=dummy_key`); 
            
            movieTrailer(movie?.title || movie?.name || movie?.original_name)
                .then((url) => {
                    if (url) {
                        const urlParams = new URLSearchParams(new URL(url).search);
                        setTrailerUrl(urlParams.get("v"));
                    } else {
                        console.log("No trailer found for that movie.");
                        setTrailerUrl("");
                    }
                })
                .catch((error) => console.error("Error finding trailer:", error));
        }
    };

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    };

    return (
        <div className="row">
            <h1>{title}</h1> 
            <div className="row_posters">
                {movies?.map((movie, index) => (
                    <img
                        key={movie.id || index}
                        onClick={() => handleClick(movie)}
                        src={`${base_url}${islargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name || movie.title}
                        className={`row_poster ${islargeRow && 'row_posterlarge'}`}
                    />
                ))}
            </div>
            
             <div style={{padding:'40px'}}> 
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>

        </div>
    );
};

export default Row;