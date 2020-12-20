const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("index")
})

app.get('/links', (req, res) => {
    res.render("links")
})

app.get('/derivado', (req, res) => {
    res.render("derivado")
})

app.get('/derivado-2', (req, res) => {
    res.render("derivado-2")
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor andando en el puerto ${port}`);
})