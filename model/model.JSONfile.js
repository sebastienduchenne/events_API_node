let events = require("./events")

class Events_model {

    list(){
        console.log("Events_model - list")
        return events;
    }

    getEventById(id){
        console.log("Events_model - getById")
        if(events[id] != undefined){
            return events[id];
        } else {
            throw "Id not found";
        }
    }

    create(event){
        console.log("Events_model - create");
        event.id = events.length - 1;
        events.push(event);
        return true;
    }

    update(event){
        console.log("Events_model - update")
        events[events.id] = event;
        return true;
    }

    remove(id){
        console.log("Events_model - remove");
        if(events[id] != undefined){
            events.splice(id, 1);
        } else {
            throw "Id not found";
        }
    }

}

module.exports = new Events_model();