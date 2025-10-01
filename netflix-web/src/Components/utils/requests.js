const API_KEY = process.env.REACT_APP_KEY

const requests={

    fetchTrending:`/trending/all/week?api_key=${API_KEY} &language=en-US`,
    fetchNetflixOriginal:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`
    
}

export default requests;