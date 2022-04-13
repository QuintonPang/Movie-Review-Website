import React, { useEffect, useState } from 'react'

const ShowMovieReviews = () => {

    const [reviews, setReviews] = useState([])
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/getAllReviews')
        .then(response => response.json())
        .then(data => setReviews(data))

        fetch('http://localhost:3001/getAllMovies')
        .then(res=>res.json())
        .then(data=>setMovies(data))

    },[])
    
  return (
    <div>
        {reviews.map(review=>
            <div key={review.id}>
                <p>"{review.review}"</p>
                {/* find returns first object found, filter returns array found */}
                <p>by {review.username} on {movies.find((movie)=>movie.id===review.movie_id)?.name} </p>
            </div>
        )}
    </div>
  )
}

export default ShowMovieReviews