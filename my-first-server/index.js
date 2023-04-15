const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send ('hello server');
})
app.get('/data', (req, res) =>{
    res.send('more data coming soon')
})

app.listen(port, () => {
    console.log(`My server is running on port: ${port}`);
})