const express = require('express');

const app = express();

app.use('/', express.static('public'));

app.listen(1241, (err) => {
    if (err) throw new Error(err);
    console.log('Webserver is listening on http://127.0.0.1:1241')
});
