import { Review } from '../models/review.model.js'

const create =(req,res)=>{
    if(!req.body) res.status(400).send({message:"Content not found"})
    const review = new Review(req.body.username,req.body.review,req.body.movie_id)
    Review.create(review,(err,data)=>{
        if(err) res.status(500).send({message:"Error creating"})
        else res.status(200).send({message:"Successfully created"})
    })
}

const getAll = (req, res) => {
    Review.getAll((err,data)=>{
        if(err) res.status(500).send({message:"Error getting all reviews"})
        else res.send(data)
    })
}

export { create, getAll }