import { create, getAll } from '../controllers/movie.controller.js'

const routes = app =>{
    app.post('/createMovie',create)
    app.get('/getAllMovies',getAll)
}

export default routes