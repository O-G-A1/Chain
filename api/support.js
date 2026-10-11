const { createApp, createMailerFromEnvironment } = require("../server");

const app = createApp(createMailerFromEnvironment());

module.exports = (req, res) => app(req, res);
