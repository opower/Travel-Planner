const express = require('express');
const app = express();

const connection = require('./db/connection');
const router = require('./routes/index.js');


app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use('/api', router);

app.use((error,req,res,next)=>{
    
    res.send(error);
})

connection.once('open', ()=>{

    console.log('connected to db');

        const server = app.listen(process.env.PORT, ()=>{
        console.log('listening on process.env.PORT');
    });
});
