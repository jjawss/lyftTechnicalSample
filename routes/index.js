const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/test", (req, res) => {
  const stringToCut = req.body.string_to_cut;
  let charIndex = 2;
  let returnString = "";

  while (charIndex < stringToCut.length) {
    returnString += stringToCut[charIndex];
    charIndex += 3;
  }

  return res.json({ return_string: returnString });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
