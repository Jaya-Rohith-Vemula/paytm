const express = require("express");

const app = express();

app.use(express.json());
app.use(3000);

app.listen(3000);
