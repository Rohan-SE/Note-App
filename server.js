import express from 'express'
import dbConn from './config/dbconfig.js';
import cors from 'cors'
import path from 'path'
import router from './routes/notesRoute.js';

const app = express()
const __dirname = path.resolve();
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(router)
const port = 3000;

dbConn().then(()=>{
    app.listen(port,()=>{
    })
})
