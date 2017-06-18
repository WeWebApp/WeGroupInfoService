import dblib from '../lib/dblib'

let init = {
    createTables(array) {
        array.forEach((element) => {
            dblib.connect().then((conn) => {
                dblib.createTable(element,conn);
            }).catch((err) => {
                console.error(err);
            })
        });
    }
}
init.createTables(["news","user","notice","info"]);