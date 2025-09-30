import { useEffect,useState } from "react";
import "../utils/axios";
import "../utils/requests";
import "./bunner.css"


const Bunner = () => {
    const [movie,setMoveie]=useState({});
    useEffect( ()=>{
        (async ()=> {
            try{
            const request=await axios.get(requests.fetchNetflixOriginals)
            setMoveie(request.data.result[
                Math.floor(Math.random()* request.data.results.length)
            ]);
            } catch(error){
                console.log("error",error);
            }
        })();

    },[]);
    return (
        <div className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:`url()`,
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat"
        }}>
        <div className="banner_contents">
            <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}

            </h1>
            <div className="banner_button">
                <button className="banner_button_play">Play</button>
                <button className="banner_button">My List</button>


            </div>
            {/* <h1 className="banner_description">{truncate(movie?.overview,150)}</h1> */}

        </div>
        <div className="banner_fadeBottom">
            
        </div>

        </div>
)
    }


export default Bunner;