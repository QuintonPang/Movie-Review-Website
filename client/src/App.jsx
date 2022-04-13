import React from 'react'
import CreateMovie from './pages/CreateMovie'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import SubmitMovieReview from './pages/SubmitMovieReview'
import ShowMovieReviews from './pages/ShowMovieReviews'

const App = () => {

  const navigate = useNavigate()

  return (
    <div>
        <title>
            Movie Review App
        </title>
        <Routes>
            <Route path="/*" element={<CreateMovie/>} />
            <Route path="/movieReview" element={<ShowMovieReviews/>} />
            <Route path="/submitMovieReview" element={<SubmitMovieReview/>}/>
        </Routes>
        <div style={{display:"flex",justifyContent:"space-evenly", marginTop:"20px"}}>
          <button onClick={()=>{navigate('/createMovie')}}>
            List a new movie you recently watched
          </button>
          <button onClick={()=>{navigate('/submitMovieReview')}}>
            Submit a review about a movie
          </button>
          <button onClick={()=>{navigate('/movieReview')}}>
          Check out the latest movie reviews
          </button>

        </div>

    </div>
  )
}

export default App