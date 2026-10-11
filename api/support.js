const { createApp, createMailerFromEnvironment } = require("../server");

let app;

module.exports = (req, res) => {
  try {
    if (!app) {
      app = createApp(createMailerFromEnvironment());
    }
    return app(req, res);
  } catch (error) {
    console.error("Support API initialization failed:", error);
    res.statusCode = 503;
    res.setHeader("Content-Type", "application/json");
    return res.end(
      JSON.stringify({
        error: "Support email is not configured on the server.",
      }),
    );
  }
};
