const express = require('express');

const port = process.env.PORT || 5000

const app = express();

app.use(express.json());
app.use(express.urlencoded())
app.use(express.static('TestTracker'))



//API ROUTES

app.get('/input', (req, res) => {

    res.sendFile(__dirname + '/index.html');

})


app.post('/input', (req, res) => {
    console.log(req.body);

})

app.listen(port, () => {

    console.log(`Server started at http://localhost:${port}`)
});

