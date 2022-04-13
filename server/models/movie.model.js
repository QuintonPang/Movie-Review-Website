import sql from './db.js'

// ES6 CLASSES
class Movie{
    constructor(name,language){
        this.id = ''
        this.name = name;
        this.language = language;
    }
}


Movie.create = (newMovie, result)=>{
    sql.query('INSERT INTO movie SET ?',newMovie,(err,res)=>{
        if(err) {
            console.log(err)
            result(err,null)
            return
        }

        console.log("Created movie: ",{id:res.insertId,...newMovie})
        result(null,{id:res.insertId,...newMovie})
    })
}

Movie.getAll = (result)=>{
    sql.query('SELECT * FROM movie ',(err,res)=>{
        if(err) {
            console.log(err)
            result(err,null)
            return
        }

        console.log("All Movies:",res)
        result(null,res)
    })
}

export { Movie }