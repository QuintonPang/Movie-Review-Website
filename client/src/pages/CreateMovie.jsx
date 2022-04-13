import React, { useState } from 'react'

const CreateMovie = () => {

    const [movieName, setMovieName] = useState('')
    const [movieLanguage, setMovieLanguage] = useState('')
    
    const createMovie = () => {
        fetch('http://localhost:3001/createMovie',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name:movieName,
                language:movieLanguage,
            })
        })
        .then(alert("Successfully created a new movie!"))
    }

    return (
        <div>
            {/* for attribute of label highlights input based on id */}
            {/* nesting input inside label also works the same way */}
            <label for="name">Movie Name</label>
            <input  
                type="text"
                value={movieName}
                id="name"
                onChange={(e)=>setMovieName(e.target.value)}
            />
            <label for="language">Movie Language</label>
            <input  
                type="text"
                value={movieLanguage}
                id="language"
                onChange={(e)=>setMovieLanguage(e.target.value)}
            />
            <button onClick={createMovie}>
                CREATE
            </button>
        </div>
    )
}

export default CreateMovie