import r from 'rethinkdb';
import dbconfig from '../config/db'

class DBLib{
    constructor(){

    }
    connect(){
        return r.connect(dbconfig);
    }
    insert(table,obj,conn){
        return r.table(table).insert(obj).run(conn)
        .then((cursor)=>{
            return cursor.toArray();
        });
    }
}

export default new DBLib();