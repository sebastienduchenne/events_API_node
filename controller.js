const model = require('./model/model.JSONfile');

class Controller {
    constructor(){

    }

    list(req, res){
        console.log("Controller - list")
        let events = model.list()
        res.status(200).send(events);
    }

    getEventById(req, res){
        console.log("Controller - getgetEventById")
        let events = model.getEventById()
        res.status(200).send(events);
    }

    create(req, res){
        console.log("Controller - create")
        let events = model.create()
        res.status(200).send(events);
    }

    update(req, res){
        console.log("Controller - update")
        let events = model.update()
        res.status(200).send(events);
    }

    remove(req, res){
        console.log("Controller - remove")
        let events = model.remove()
        res.status(200).send(events);
    }

}

module.exports = new Controller();
