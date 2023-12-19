const express = require('express');

const app = express();
const PORT = process.env.PORT || 8090;



// server start
app.listen(PORT, console.log(`Listening on port: ${PORT}...`));