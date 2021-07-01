const express = require("express");
var bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine','ejs')
app.set('views', __dirname + '/views')

let names = ['Jose','Juan','Maleja']


app.get("/", (req, res) => {
  res.render("index", 
    {titulo : 'hay '+ names.length + ' registros de nombre de personas ', nombre :''});
});

app.post("/response", (req, res)=>{
    res.render("index", 
    {titulo : 'La cantidad de registros es:'+ names.length, 
    nombre : 'El nombre registrado es: ' + names[req.body.index -1] })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
