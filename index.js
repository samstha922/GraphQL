// Start your es6 scripts here
import express from 'express'
const app = express()
app.get('/', (req,res)=>{
    res.send('UP and running with gql')
})
app.listen(8082,()=> console.log('running at 8082')); 


console.log('test');