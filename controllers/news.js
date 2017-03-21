import dblib from '../lib/dblib';
const pageInfo = {
    itemNum : 10
}
const newsControllers = {
    query(num){
        return dblib.connect().then((conn)=>{
           num = num > 0 ? num : 1;
           return dblib.queryWith("news",(num-1)*pageInfo.itemNum,num*pageInfo.itemNum,conn);
        })
        .catch((error)=>{
            console.log(error);
        });
    }
}

export default newsControllers;