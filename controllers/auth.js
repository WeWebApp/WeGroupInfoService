
const auth ={
    allow(sessionId){
        console.log(sessionId);
        if(sessionId!=null){
            return true;
        }
        return false;
    },
    checkAllow(req){
        console.log(req.params);
        if(req.query.auth!=null){
            return {};
        }
        throw new Error("API NOT ALLOWD!");
    }
};

export default auth;