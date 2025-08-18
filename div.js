const div = (req, res) => {
    console.log(`sum is ${req.url}`);
    const body = [];
    req.on("data", (c)=> {
        body.push(c);
    });

    req.on("end" , ()=> {
      const p = Buffer.concat(body).toString();
    const r = new URLSearchParams(p);
    const result  = Object.fromEntries(r);
    console.log(result);
    const ans = Number(result.f) / Number(result.s);
    console.log(ans);
    res.setHeader("Content-Type", "text/html");
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <title>write on the server response</title>
</head>
<body>
 <h1> the ans is ${ans} </h1>
 <a href = "/calculator"> back to calculate </a>
</body>
</html>`);
    return res.end();
    });
}

module.exports = div;