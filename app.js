const http = require("http");
const fs = require("fs");

//читаем данные при запуске
const data = fs.readFileSync("./data/products.json", "utf-8");
const products = JSON.parse(data);

const server = http.createServer((req, res) => {
  //обраб маршрута /api/products
  if (req.method === "GET" && req.url === "/api/products") {
    res.writeHead(200, { "sContent-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(products));
    return;
  }

  //обраб всех остальных маршрутов (404)
  res.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify({ error: "Маршрут не найден" }));
});

const port = process.env.PORT || 3000;
server.listen(port, "0.0.0.0", () => {
  console.log(`Сервер запущен на порту ${port}`);
});