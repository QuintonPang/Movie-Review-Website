import sql from './db.js'

// ES6 CLASSES
class Review{
    constructor(username,review,movie_id){
        this.id = ''
        this.username = username;
        this.review = review;
        this.movie_id = movie_id;
    }
}


Review.create = (newReview, result)=>{
    sql.query('INSERT INTO review SET ?',newReview,(err,res)=>{
        if(err) {
            console.log(err)
            result(err,null)
            return
        }

        console.log("Created review: ",{id:res.insertId,...newReview})
        result(null,{id:res.insertId,...newReview})
    })
}

Review.getAll = (result)=>{
    sql.query('SELECT * FROM review ',(err,res)=>{
        if(err) {
            console.log(err)
            result(err,null)
            return
        }

        console.log("All Reviews:",res)
        result(null,res)
    })
}


export { Review }