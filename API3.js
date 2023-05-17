import express from "express";
import bodyParser from 'body-parser';
import usersRoutes from './routes/user.js';


const app = express();
const PORT = 7000;

app.use(bodyParser.json()) ;

app.use('/user', usersRoutes);

app.get("/", (req,res) => {res.send('Hello from homepage')});

app.listen(PORT, () => {
    console.log(`SERVER IS NOW LIVE ON PORT: http://localhost${PORT}`)
})



