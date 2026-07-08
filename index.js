const express = require('express')
const app = express()
const port = 80;

var fs = require('fs');


app.use((req, res, next) => {
  try {
    if (req.path.endsWith("js"))
      res.contentType("text/javascript");
    if (req.path.endsWith("css"))
      res.contentType("text/css");
    if (req.path.endsWith("html"))
      res.contentType("text/html");
    fs.createReadStream(__dirname + "/" + (req.path.length < 2 ? "/index.html" : req.path)).pipe(res);
  } catch (error) {
    console.log(error);
    res.status(404).send("not found!")
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})