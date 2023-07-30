import React from "react";

const MovieList = (prop) =>{
    const AddFavourites = prop.favouriteComponent
    return (
        <div className="d-flex">
            {prop.movies.map((movie, index)=> 
                <div className='image-container d-flex justify-content-start m-3'>
                    <img src={movie.Poster}></img>
                    <div onClick={() => prop.handleFavouritesClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                        <AddFavourites />
                    </div>
                </div>
            )}
        </div>
    )
}

export default MovieList;