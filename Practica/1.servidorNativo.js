const http = require("node:http");
const PORT = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
  const { method, url, headers } = req;
  let { statusCode } = req;

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  console.log(res.getHeader("content-type"));
  console.log(req.url);

  switch (method) {
    case "GET": {
      console.log("entrando al GET");
      console.log("URL: ", url);
      switch (url) {
        case "/": {
          console.log(headers);
          statusCode = 200;
          console.log(`El statusCode es de: ${statusCode}`);
          return res.end("<h1>Pagina de inicio</h1> <p>Lorem</p>");
        }

        case "/informacion": {
          statusCode = 200;
          console.log(headers);
          console.log(`El statusCode es de: ${statusCode}`);
          const content = res.getHeader("Content-Type");
          return res.end(`<h1>content: ${content}</h1>`);
        }
        case "/favicon.ico": {
          console.log(headers);
          statusCode = 200;
          console.log(`El statusCode es de: ${statusCode}`);
          return res.end("<h1>favicon.ico</h1> <p>Lorem</p>");
        }
        default: {
          console.log("Headers del default: ", headers);

          console.log(`El statusCode es de: ${statusCode} DEFAULT`);
          return res.end(`<h1>404 NOT FOUND</h1>`);
        }
      }
    }

    case "POST": {
      switch (url) {
        case "/crear": {
          let body = "";

          req.on("data", (chunk) => {
            body += chunk;
          });

          req.on("end", () => {
            res.end(`<h5>${body}</h5>`);
          });
        }
      }
    }
  }
};

const server = http.createServer(processRequest);

server.listen(PORT, () => {
  console.log(`Server listening on port: http://localhost:${PORT}`);
});
