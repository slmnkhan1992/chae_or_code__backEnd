import dotEnv from 'dotenv'
dotEnv.config()
import express from 'express'



const app = express()
const PORT = 4000

app.get('/', (req, res)=> {
    res.send('Hello world')
})

app.get('/twitter', (req, res)=> {
    res.send('salman')
})

app.get('/login', (req, res)=> {
    res.send('<h1> Please login <h1/>')
})

app.get('/youtube', (req, res)=> {
    res.send('<h2> Youtube <h2/>')
})

app.listen(process.env.PORT, ()=> {
    console.log('App listen on port no.', PORT)
})