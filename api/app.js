const express = require('express')
const PORT = 3000
const app = express()
app.use(express.json())


app.get('/', (req, res) =>{
    res.status(200).json({message: 'Funcionando'})
})

app.listen(PORT, () =>{
    console.log('Rodando...')
})