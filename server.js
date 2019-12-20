const { parse } = require("url");
const next = require("next");

const express = require("express");

const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/book-details/:slug", function(req, res) {
    const bookId = req.params.slug.split("-").pop();
    const queryParams = { id: bookId };
    app.render(req, res, "/book", queryParams);
  });

  server.get("*", function(req, res) {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
