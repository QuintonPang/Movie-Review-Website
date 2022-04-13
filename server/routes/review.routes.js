import { create, getAll } from '../controllers/review.controller.js'

const routes = app =>{
    app.post('/createReview',create)
    app.get('/getAllReviews',getAll)
}

export default routes