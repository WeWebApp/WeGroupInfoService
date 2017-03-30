import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import routes from './routes';
import auth from './controllers/auth';

const app = express();
const port = 3000;

const server = app.listen(port,(err)=>{
    console.log('server listen at ' + port);
});

app.use('/static', express.static(__dirname + '/public'));
app.use('/dist', express.static(__dirname + '/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(cookieParser());

app.use((req, res, next) => {
  //console.log('Time: ', Date.now());
  console.log('Time: ',new Date());
  // console.log(req);
  next();
});

app.use('/api',routes.api);

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err // {}
  });
  // res.render('error', {
  //   message: err.message,
  //   error: err // {}
  // });
});