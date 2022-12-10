const express = require('express')
const PORT = 3001
const app = express()
app.use(express.json())


app.get('/', (req, res) =>{
    res.status(200).json({message: 'Works'})
})

app.listen(PORT, () =>{
    console.log('Rodando...')
})