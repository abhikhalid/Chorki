import React, { useState, useEffect } from 'react'
import {Link, useHistory } from 'react-router-dom'

import './Row.css'

const base_url = "http://127.0.0.1:8000/";

function Row({ title, fetchUrl, isLargeRow }) {
    
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    


    const history = useHistory();

    useEffect(async () => {

        let result = await fetch(fetchUrl);

        result = await result.json();

        setMovies(result);

        



    }, []);

   


    

   

    
    

    return (
      
        <div className="row">
			{/* title  */}
			<h2>{title}</h2>

			<div className="row__posters">
				{/* several row__poster */}

                {movies.map((movie) => (

                   
                    
                    
                    <Link to={"/movieDetails/" + movie.movieName + "/" + movie.movieDescription + "/" + movie.moviePoster + "/" + movie.movieUrl}>
                  

                    <img
						key={movie.id} /* just for optimization in react js */
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            
						src={base_url + movie.moviePoster}
						alt={movie.name}
                        />

                        
                     </Link>
				))}
			</div>

		

		

		</div>

           

            
            
        
    );
}

export default Row
