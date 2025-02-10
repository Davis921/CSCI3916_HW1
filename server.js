//pulling express to create API to server
const express = require('express');

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
    const acceptHeader = req.get('Accept');

    if(acceptHeader) {
        res.setHeader('Accept', acceptHeader)
    }
    
    const responseBody = {
        ...req.body
    }

    res.json(responseBody)
});

const port = process.env.PORT || 3000;

const server = app.listen(3000, () => {
    console.log(`Server is listening on port ${port}`);
});

module.exports = server;