const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target:
        process.env.NODE_ENV === "production"
          ? "https://qr-guest-signin.herokuapp.com/"
          : "http://localhost:4000",
      changeOrigin: true,
    })
  );
};
