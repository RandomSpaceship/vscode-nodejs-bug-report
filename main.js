import http from 'http';

console.log("Hello there!");

if(process.env.DYNO)
    console.log("Heroku hello");

const PORT = process.env.PORT || 80;

http.createServer(function (req, res) {
  res.write("General Kenobi!");
  res.end();
}).listen(PORT);