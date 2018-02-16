const express = require("express"),
      app = express(),
      multer = require('multer'),
      upload = multer({ dest: 'uploads/' }),
      path = require('path'),
      getSize = require('./logic');
      



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.post("/", upload.single('file'), (req, res) => {
    res.json(getSize(req.file.path, req.body.type))
})

app.listen(process.env.PORT || 3000, () => {
    console.log("The server is up and running")
})