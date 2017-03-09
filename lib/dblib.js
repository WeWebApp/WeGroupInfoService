import r from 'rethinkdb';
import dbconfig from '../config/db';

class DBLib{
    constructor(){

    }
    connect(){
        return r.connect(dbconfig);
    }
}

export default new DBLib();