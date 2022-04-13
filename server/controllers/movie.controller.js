import { Movie } from '../models/movie.model.js'

const create =(req,res)=>{
    if(!req.body) res.status(400).send({message:"Content not found"})
    const movie = new Movie(req.body.name,req.body.language)
    Movie.create(movie,(err,data)=>{
        if(err) res.status(500).send({message:"Error creating"})
        else res.status(200).send({message:"Successfully created"})
    })
}

const getAll = (req, res) => {
    Movie.getAll((err,data)=>{
        if(err) res.status(500).send({message:"Error getting all movies"})
        else res.send(data)
    })
}

export { create, getAll }