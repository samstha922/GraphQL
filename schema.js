import { buildSchema } from "graphql";
const schema = buildSchema(`
    type Course{
        id: ID
        courseName: String
        category:String
        price: Int
        language: String
        email: String
        teachingAssists: [TeachAssist]
    }

    type TeachAssist{
        firstName: String
        lastName: String
        experience: Int
    }

    enum Stack{
        WEB
        MOBILE
        OTHER
    }
#"""this is a cooment"""

    type Query{
        getCourse(id: ID): Course 
    }

    input CourseInput{
        id: ID
        courseName: String!
        category:String
        price: Int!
        language: String
        email: String
        teachingAssists: [TeachAssist]!
    }

    input TeachingAssistInput{
        firstName: String
        lastName: String
        experience: Int
    }

    type Mutation{
        createCourse(input:CourseInput): Course
    }
`)

export default schema