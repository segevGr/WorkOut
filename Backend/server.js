// const express = require("express");
import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/gg/:user/test/:param2", (req, res) => {
  const { user, param2 } = req.params;
  res.send(`hello world ${user}, ${param2} `);
});
