const express = require('express');
const path = require('path');

const ngApp = express();

ngApp.use(express.static(__dirname + '/dist/address-book'));

ngApp.get('/*', function (request, response) {
    response.sendFile(path.join(__dirname, '/dist/address-book/index.html'));
});

ngApp.listen(process.env.PORT || 8080);