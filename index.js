const express = require('express');
const model = require('./model/model.JSONfile');


let events2 = [
    {
       "id": 0,
       "title" : "JO 2024",
       "description" : "Jeux olympiques 2024 en France",
       "date" : "1 juillet 2024",
       "categorie" : "Mondial"
    },
    {
       "id": 1,
       "title" : "Hommes sur Mars",
       "description" : "Space X envoit des hommes sur Mars",
       "date" : "2024",
       "categorie" : "Espace"
    },
    {
       "id": 2,
       "title" : "dfgdfg",
       "description" : "Jdfgdfgdfg",
       "date" : "1 septembre 2019",
       "categorie" : "dfgdfgdg"
    }
]


var hostname = '0.0.0.0';
var port = 3001;

var app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.get('/status', function (req, res) {
    console.log( "GET /" );
    res.status(200).send("OK");
});

app.get('/events', function (req, res) {
    console.log( "GET /events" );
    res.status(200).send(model.list());
});

app.get('/events/:eventId', function (req, res) {
    console.log( "GET /events/:eventId - id:"+req.params.eventId);
    let id = req.params.eventId
    try {
        res.status(200).send(model.getEventById(id));
    } catch (error) {
        res.status(404).send(error);
    }
});

app.post('/events', function (req, res) {
    console.log( "POST /events - event:",req.body);
    model.create(req.body)
    res.status(200).send("OK");
});

app.put('/events', function (req, res) {
    console.log( "PUT /events - id:"+req.body );
    model.update(req.body)
    res.status(200).send("OK");
});

app.delete('/events/:eventId', function (req, res) {
    console.log( "DELETE /events/:eventId - id:"+req.params.eventId);
    let id = req.params.eventId
    try {
        model.remove(id);
        res.status(200).send("OK");
    } catch (error) {
        res.status(404).send(error);
    }
});



//listen
app.listen(port, hostname, function(){
    console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port);
});
