const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target:
        process.env.NODE_ENV === "development"
          ? "http://localhost:4000"
          : "https://qr-guest-signin.herokuapp.com/",
      changeOrigin: true,
    })
  );
};
