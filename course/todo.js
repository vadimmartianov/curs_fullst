import { readFileSync } from "fs";

class toDo {

    constructor() {
        this.id = 1;
        this.name = "";
        this.description = "";
        this.created_at = new Date();
        this.updated_at = new Date();
        this.is_done = false;
    }

    update(name, description, isDone) {
        this.name = "";
        this.description = "";
        this.updated_at = new Date();
        this.is_done = false;
    }



}



class myBase {

    #configurator(config_file) {
        this.models = [];
        
    }
    
    constructor() {

        this.config_file = "";
    }

    constructor(config_file) {

    }

    add_element() {}

    find(model_name, param_name, param_value, sort) {
        
        eval( `data = readFileSync("${model_name}.json").toString();` );

        return record;
    }

    all(model_name) {
        
        eval( `data = readFileSync("${model_name}.json").toString();` );

        return all_records;
    }

    update_element() {}

    delete_element(id) {



    }


    create_model() {}

    delete_model() {}
}