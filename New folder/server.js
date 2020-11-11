const express = require("express");
const app = express();


app.use(express.static("public"));


app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});


app.get("/about", (request, response) => {
  response.redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
});

app.get("/install", (request, response) => {
  response.redirect("https://cdn.glitch.com/2364bf08-08fc-4609-9334-19b002c6e60a%2Fdist.rar?v=1604165398798");
});

app.get("/call", (request, response) => {
  response.sendFile(__dirname + "/views/call.html");
});




const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});