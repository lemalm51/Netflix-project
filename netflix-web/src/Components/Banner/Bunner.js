import { useEffect, useState } from "react";

import axios from "../utils/axios"; 
import requests from "../utils/requests";
import "./bunner.css";


const Bunner = () => {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const fetchMovie = async () => { 
            try {
                const request = await axios.get(requests.fetchNetflixOriginal);
                console.log(request);
                
                
                setMovie(
                    request.data.results[
                        Math.floor(Math.random() * request.data.results.length)
                        
                    ]
                );
            } catch (error) {
                console.log("error fetching movie data:", error);
            }
        };

        fetchMovie();
    }, []); 
    function truncate(str,n){
        return str?.length> n? str.substr(0,n-1)+"...." :str;
    }

    const getBannerImageUrl = (path) => {
        const baseImageUrl = "https://image.tmdb.org/t/p/original/";
        return path ? `${baseImageUrl}${path}` : ''; 
    };

    return (
        <header className="banner" 
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${getBannerImageUrl(movie?.backdrop_path)})`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                
                <div className="banner_buttons">
                    <button className=" play banner_button">Play</button>
                    <button className="banner_button mylist">My List</button>
                </div>

                <h1 className="banner_description">{truncate(movie?.overview,150)}
                </h1>

            </div>
            <div className="banner_fadeBottom" />
        </header>
    );
}

export default Bunner;