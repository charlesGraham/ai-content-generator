const express = require("express");
const usersRouter = require("./routes/usersRouter");

const app = express();
const PORT = process.env.PORT || 8090;



// routes
app.use("/api/v1/users", usersRouter);

// server start
app.listen(PORT, console.log(`Listening on port: ${PORT}...`));