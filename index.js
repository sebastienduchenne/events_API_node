var express = require('express');


let events = {
    "1" : {
       "id": 1,
       "title" : "JO 2024",
       "description" : "Jeux olympiques 2024 en France",
       "date" : "1 juillet 2024",
       "categorie" : "Mondial"
    },

    "2" : {
       "id": 2,
       "title" : "Hommes sur Mars",
       "description" : "Space X envoit des hommes sur Mars",
       "date" : "2024",
       "categorie" : "Espace"
    },

    "3" : {
       "id": 3,
       "title" : "dfgdfg",
       "description" : "Jdfgdfgdfg",
       "date" : "1 septembre 2019",
       "categorie" : "dfgdfgdg"
    }
}


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
    res.status(200).send(events);
});

app.get('/events/:eventId', function (req, res) {
    console.log( "GET /events/:eventId - id:"+req.params.eventId);
    let id = req.params.eventId
    res.status(200).send(events[id]);
});

app.post('/events', function (req, res) {
    console.log( "POST /events - title:",req.body);
    events[Object.keys(events).length+1] = req.body
    //console.log( "------------:",events);
    res.status(200).send(events);
});

app.put('/events/:eventId', function (req, res) {
    console.log( "PUT /events/:eventId - id:"+req.params.eventId);
    events[req.params.eventId] = req.body
    //console.log( "------------:",events);
    res.status(200).send(events);
});

app.delete('/events/:eventId', function (req, res) {
    console.log( "DELETE /events/:eventId - id:"+req.params.eventId);
    let id = req.params.eventId
    delete events[id]
    res.status(200).send(events);
});



//listen
app.listen(port, hostname, function(){
    console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port);
});
