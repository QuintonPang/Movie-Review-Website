// ES6 SYNTAX

import express from 'express'
import bodyparser from 'body-parser'
import cors from 'cors'

const app = express()
const PORT = 3001
app.use(bodyparser.urlencoded({ extended:false }))
app.use(express.json())
app.use(cors())
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})
import movieRoutes from './routes/movie.routes.js'
import reviewRoutes from './routes/review.routes.js'

movieRoutes(app)
reviewRoutes(app)