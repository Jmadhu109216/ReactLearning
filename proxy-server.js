//this is to avoid the CORS issue

const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();

app.use(
  "/swiggy",
  createProxyMiddleware({
    target: "https://www.swiggy.com",
    changeOrigin: true,
    pathRewrite: {
      "^/swiggy": "/dapi/restaurants/list/v5",
    },
  })
);

app.listen(4000, () => {
  console.log("Proxy server running on http://localhost:4000");
});
