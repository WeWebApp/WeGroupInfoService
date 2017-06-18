import r from 'rethinkdb';
import dbconfig from '../config/db';

class DBLib{
    constructor(){
        
    }
    connect(){
        return r.connect(dbconfig);
    }
    createTable(table,conn){
        return r.tableCreate(table).run(conn);
    }
    insert(table,obj,conn){
        return r.table(table).insert(obj).run(conn)
        .then((cursor)=>{
            return cursor.toArray();
        });
    }
    queryWith(table,start,end,conn){
        return r.table(table).skip(start).limit(end).run(conn)
        .then((cursor)=>{
        return cursor.toArray();
        });
    }
}

export default new DBLib();