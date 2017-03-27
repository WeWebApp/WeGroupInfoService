const auth ={
    allow(sessionId){
        console.log(sessionId);
        if(sessionId!=null){
            return true;
        }
        return false;
    }
};

export default auth;