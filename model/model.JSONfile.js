var fs = require("fs");

class Events_model {
    constructor(){
        let data = fs.readFileSync( "model/events.json")
        this.events = JSON.parse(data);
        //console.log("Events_model - ", this.events)
    }

    list(){
        console.log("Events_model - list")
        return this.events;
    }

    getEventById(id){
        console.log("Events_model - getById")
        return this.events["1"]
    }

    create(event){
        console.log("Events_model - create")
        return true
    }

    update(event){
        console.log("Events_model - update")
        return true
    }

    remove(id){
        console.log("Events_model - remove")
        return true
    }

}

module.exports = new Events_model();