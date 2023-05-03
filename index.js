const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chef = require('./data/chef.json');
const dishes = require('./data/dishes.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Chef is running')
});

app.get('/chef', (req, res) => {
    res.send(chef)
})
app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const item = chef.find(cd => cd.id == id)
    res.send(item)
})
app.get('/dishes', (req, res) => {
    res.send(dishes)
})

app.listen(port, () => {
    console.log(`Chef API is running on port: ${port}`)
})