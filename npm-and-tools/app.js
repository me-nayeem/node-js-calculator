const http = require("http");
const user = require('./user');
const express = require("express");

const app = express();
app.post("/sub", (req, res, next) =>{
  console.log("in first middleware...", req.url, req.method);
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <title>write on the server response</title>
</head>
<body>
 <h1> in post</h1>
 <input type = "text">
</body>
</html>`);
});
// app.get("/", (req, res, next) =>{
//   console.log("in first middleware...", req.url, req.method);
//   res.send(`<!DOCTYPE html>
// <html lang="en">
// <head>
//   <title>write on the server response</title>
// </head>
// <body>
//  <h1>in get</h1>
// </body>
// </html>`);
//   next();
// });

app.use('/use', (req, res, next) =>{
  console.log("in second middleware...", req.url, req.method);
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <title>write on the server response</title>
</head>
<body>
 <h1> In final middleware into the second app use</h1>
 <a href = "/sub">in post page</a>
</body>
</html>`);
next();
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`successfully run the server... http://localhost:${PORT}`);
});
