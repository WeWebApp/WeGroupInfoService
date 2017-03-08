import rethinkdb from 'rethinkdb';
import dbconfig from '../config/db'

class DBLib{
    constructor(){

    }
    connect(){
        return r.connect(dbconfig);
    }
}