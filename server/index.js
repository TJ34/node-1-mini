const express = require("express"),
  app = express(),
  port = 3000,
  bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.static(__dirname+'/../build'));

const bc = require(__dirname + "/controllers/books_controller");

const booksURL = "/api/books";
app.get(booksURL, bc.read);
app.post(booksURL, bc.create);
app.put(`${booksURL}/:id`, bc.update);
app.delete(`${booksURL}/:id`, bc.delete);


app.listen(port, () =>
  console.log(`We're gonna need a bigger boat... ${port}`)
);
