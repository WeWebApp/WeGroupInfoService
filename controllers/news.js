import dblib from '../lib/dblib';
const pageInfo = {
    itemNum : 10
}
const newsControllers = {
    query(num){
        return dblib.connect().then((conn)=>{
           return dblib.queryWith("news",num*pageInfo.itemNum,(num+1)*pageInfo.itemNum,conn);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}

export default newsControllers;