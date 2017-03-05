import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

let app = express();

app.listen(3000,()=>console.log('Listening on port 3000...')); 