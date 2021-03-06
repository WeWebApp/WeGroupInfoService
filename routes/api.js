import express from 'express';
import ctrls from '../controllers';
const apiRouter = express.Router();

// get /api/hello123
apiRouter.get('/hello:id',(req,res)=>{
    res.send('Hello Api from ' + req.params.id);
});

apiRouter.get('/news/items/:num',(req,res)=>{
    ctrls.auth.checkAllow(req);
    //debugger
    ctrls.news.query(req.params.num).then((news)=>{
        //console.log(news);
        res.send(JSON.stringify(news));
    });
    //res.send('api '+req.params.num);
});

apiRouter.post('/news',(req,res)=>{

});

export default apiRouter;