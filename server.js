const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json());

app.get("/guests",(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.post("/api/guests",(req,res)=>{
    //função que armazena o nome no banco de dados
})

app.listen(8000,
    () => {
        console.log("Server is running on port 8000!")
    }
)