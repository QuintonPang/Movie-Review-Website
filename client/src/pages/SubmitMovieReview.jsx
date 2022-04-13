import React, { useEffect, useState } from 'react'

const SubmitMovieReview = () => {
  
    const [movies, setMovies] = useState([])
    const [username, setUsername] = useState('')
    const [review, setReview] = useState('')
    const [movie_id, setMovie_id] = useState('')

    useEffect(()=>{
        fetch('http://localhost:3001/getAllMovies')
        .then(res=>res.json())
        .then(data=>setMovies(data))
    },[])
    
    const createReview = () => {
        fetch('http://localhost:3001/createReview',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                review,
                movie_id,
            })
        })
        .then(alert('Successfully submitted the review!'))
    }

    return (
        <div>
            {/* for attribute of label highlights input based on id */}
            {/* nesting input inside label also works the same way */}
            <label for="username">Your Name</label>
            <input  
                type="text"
                value={username}
                id="username"
                onChange={(e)=>setUsername(e.target.value)}
            />
            <label for="movie">Movie</label>
            <select id="movie" onChange={(e)=>setMovie_id(e.target.value)}>
                <option disabled selected>---SELECT A MOVIE---</option>
                {movies.map((movie)=>
                    <option key={movie.id} value={movie.id}>
                        {movie.name}
                    </option>
                )}
            </select>
            <label for="review">Review</label>
            <input  
                type="text"
                value={review}
                id="review"
                onChange={(e)=>setReview(e.target.value)}
            />
            <button onClick={createReview}>
                SUBMIT
            </button>
        </div>
    )
}

export default SubmitMovieReview