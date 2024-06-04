const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    name: "anime-name",
    description: "Get anime name",
  });
});

app.listen(port, () => console.log("Server ready on port 3000."));

module.exports = app;
