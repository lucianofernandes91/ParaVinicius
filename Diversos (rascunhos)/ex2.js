const express = require("express")
const app = express()
const handlebars = require("express-handlebars")

// Config 
/// Template Engine
app.engine("handlebars", handlebars)
app.set("view engine", 'handlebars')

/// Body Parser
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Rotas
app.get("/cad", function(req,res){
  res.render('formulario')
})

app.post("/add", function(req,res){
  res.send('<p>Título: ' + req.body.titulo + '</p><p>Conteúdo: ' + req.body.conteudo + '</p>')
  console.log(req)
})

console.log("aqui 3")

app.listen(8081, function(){
  console.log("Servidor rodando na url http://localhost:8081")
})