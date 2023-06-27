const express = require("express");
const app = express();
const port = 3001;
require("dotenv/config");
const cors = require("cors");
const tasksRouter = require("./routes/tasks");
// const createRouter = require("./routes/tasks/create");

app.use(cors());
app.use(express.json());

app.use("/task", tasksRouter);
// app.use("task/create", createRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
