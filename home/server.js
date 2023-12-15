const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/home`));

app.get('/', (req, resp) => {
    resp.sendFile(`${__dirname}/home/index.html`);
});

app.listen(3000, ()=>{
    console.log('Server online');
});