const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json())
const fetch = require('node-fetch');
const PORT = process.env.PORT;

api_key = "1766ce4c296c4fc3b48174314222408";

async function getWeather(){
    let response = await fetch('http://api.weatherapi.com/v1/current.json?key=1766ce4c296c4fc3b48174314222408&q=New-York')
    let data = await response.json();
    return data;
}

app.get('/', (req, res)=>{
    res.send('Hello World!');
})

app.post('/getWeather', async function(req, res){
    // const data = getWeather();
    // res.json(data);
    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=1766ce4c296c4fc3b48174314222408&q=${req.body.location}`)
    let data = await response.json();
    res.json(data);
})

app.listen(PORT, ()=>{
    console.log(
        'Server listening at Port 3000'
        )
})

