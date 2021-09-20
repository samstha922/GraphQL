import {nanoid} from 'nanoid'
class Course{
    constructor(id,{
        CourseName, category, price, language, email, teachingAssists
    }){
        this.id = id
        this.CourseName = coursename
        this.category = category
        this.price = price
        this.language = language
        this.email=email
        this.teachingAssists = teachingAssists
    }
}

const courseholder = {}

const resolvers = {
    get 
}