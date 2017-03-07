import express from 'express';

const apiRouter = express.Router();

// get /api/hello123
apiRouter.get('/hello:id',(req,res)=>{
    res.send('Hello Api from ' + req.params.id);
});

export default apiRouter;