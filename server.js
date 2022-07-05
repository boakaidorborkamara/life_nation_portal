const express = require('express');

const PORT = process.env.port || 3000;

const app = express();
app.use(express.static('public'));

//ROUTES
const people_router = require('./route/people_router');

app.use(people_router);

// ROUTES 
app.get("/", (req, res) => {
    res.send("Home Page");
})


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})