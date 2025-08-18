const fs = require("fs");
const sum = require("./sum");
const mainus = require("./mainus");
const multi = require("./multi");
const div = require("./div");
const mod = require("./mod");

const server = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <title>write on the server response</title>
</head>
<body>
 <p> welcome to this page! </p>
 <a href = "/calculator"> Go to calculator </a>
</body>
</html>`);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <title>on the calculator page</title>
</head>
<body>
 <form action = "/calculate-result-sum" method = "POST">
    <input type ="text" name = "f">
    <input type ="text" name = "s">
    <button type = 'submit'> calculate sum </button>
  </form>

   <form action = "/calculate-result-mainus" method = "POST">
    <input type ="text" name = "f">
    <input type ="text" name = "s">
    <button type = 'submit'> calculate Substraction </button>
  </form>

   <form action = "/calculate-result-multi" method = "POST">
    <input type ="text" name = "f">
    <input type ="text" name = "s">
    <button type = 'submit'> calculate Multiplication </button>
  </form>

   <form action = "/calculate-result-div" method = "POST">
    <input type ="text" name = "f">
    <input type ="text" name = "s">
    <button type = 'submit'> calculate Division </button>
  </form>

   <form action = "/calculate-result-mod" method = "POST">
    <input type ="text" name = "f">
    <input type ="text" name = "s">
    <button type = 'submit'> calculate remainder </button>
  </form>
</body>
</html>
      `  
);
return res.end();

  } else if (req.method == "POST" && req.url.toLowerCase() === "/calculate-result-sum") {
    return sum(req,res);
  } else if (req.method == "POST" && req.url.toLowerCase() === "/calculate-result-mainus") {
      return mainus(req,res);
  } else if (req.method == "POST" && req.url.toLowerCase() === "/calculate-result-multi") {
      return multi(req,res);
  } else if(req.method == "POST" && req.url.toLowerCase() === "/calculate-result-div") {
        return div(req,res);
  } else if(req.method == "POST" && req.url.toLowerCase() === "/calculate-result-mod") {
        return mod(req,res);
  }

  res.setHeader("Content-Type", "text/html");
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <title>write on the server response</title>
</head>
<body>
 <h1> 404 page note found </h1>
 <a href = "/"> Back to calculator page </a>
</body>
</html>`);
    res.end();

};

module.exports = server;
