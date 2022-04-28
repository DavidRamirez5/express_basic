// Usando objeto express
const express = require('express')
const res = require('express/lib/response')
// App de Express
const app= express()
// Puerto en que vamos a ver nuestra app: localhost:3000
const port=3000

// path inicial, responderá a la url localhost:3000
app.get('/',(req,res) => {
    res.send('Hello World!')
})
//localhost:3000/launchx
app.get('/launchx',(req,res)=>{
    res.send("Bienvenido a LaunchX")
})
// Con esto incializamos esta app
app.listen(port,() =>{
    console.log(`Example app listening on port: ${port}`)
})