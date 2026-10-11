const path = require("node:path");
require("dotenv").config();
const express = require("express");
const { rateLimit } = require("express-rate-limit");
const nodemailer = require("nodemailer");

const SUPPORT_ISSUES = new Set([
  "Migration Issues",
  "Asset Recovery",
  "Rectification",
  "Account Locked",
  "Withdrawal Issues",
  "Others",
  "Card Issues",
  "Deposit Issues",
  "Transfer Issues",
  "Security Verification",
  "2FA Problems",
  "KYC Verification",
  "App Problems",
  "Account Management",
  "General Enquiry",
]);

function createApp(sendMail) {
  const app = express();

  app.disable("x-powered-by");
  app.use(express.json({ limit: "10kb" }));

  app.get("/", (_req, res) => res.sendFile(path.join(__dirname, "index.html")));
  app.get("/index.html", (_req, res) =>
    res.sendFile(path.join(__dirname, "index.html")),
  );
  app.get("/script.js", (_req, res) =>
    res.sendFile(path.join(__dirname, "script.js")),
  );
  app.get("/styles.css", (_req, res) =>
    res.sendFile(path.join(__dirname, "styles.css")),
  );
  app.use(
    "/Images",
    express.static(path.join(__dirname, "Images"), { dotfiles: "deny" }),
  );

  app.post(
    "/api/support",
    rateLimit({
      windowMs: 15 * 60 * 1000,
      limit: 5,
      standardHeaders: "draft-8",
      legacyHeaders: false,
      handler: (_req, res) =>
        res.status(429).json({ error: "Too many requests. Please try again later." }),
    }),
    async (req, res) => {
      const tab = req.body?.tab;
      const issue =
        typeof req.body?.issue === "string" ? req.body.issue.trim() : "";
      const email =
        typeof req.body?.email === "string"
          ? req.body.email.trim().toLowerCase()
          : "";
      const walletName =
        typeof req.body?.walletName === "string"
          ? req.body.walletName.trim()
          : "";
      const issueType =
        typeof req.body?.issueType === "string"
          ? req.body.issueType.trim()
          : "";
      const message =
        typeof req.body?.message === "string" ? req.body.message.trim() : "";
      const validTabDetails =
        (tab === 1 &&
          email.length <= 254 &&
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) ||
        (tab === 2 && walletName.length > 0 && walletName.length <= 100) ||
        (tab === 3 && issueType.length > 0 && issueType.length <= 100);

      if (
        !validTabDetails ||
        !SUPPORT_ISSUES.has(issue) ||
        message.length === 0 ||
        message.length > 2000
      ) {
        return res.status(400).json({ error: "Please check the support form fields." });
      }

      try {
        const ticketDetails = [
          `Issue category: ${issue}`,
          tab === 1
            ? `Contact email: ${email}`
            : tab === 2
              ? `Wallet name: ${walletName}`
              : `Type of issue: ${issueType}`,
          `Description of issue:\n${message}`,
        ].join("\n\n");
        await sendMail({
          to: process.env.SUPPORT_EMAIL,
          ...(tab === 1 ? { replyTo: email } : {}),
          subject: `Help Center support request: ${issue}`,
          text: ticketDetails,
        });
        return res.status(202).json({ ok: true });
      } catch (error) {
        console.error("Support email delivery failed:", error);
        return res.status(500).json({
          error: "We couldn't send your request. Please try again later.",
        });
      }
    },
  );

  app.use((error, _req, res, _next) => {
    if (error instanceof SyntaxError && "body" in error) {
      return res.status(400).json({ error: "Invalid JSON request." });
    }
    if (error.type === "entity.too.large") {
      return res.status(413).json({ error: "The request is too large." });
    }
    console.error("Request handling failed:", error);
    return res.status(500).json({ error: "An unexpected server error occurred." });
  });

  return app;
}

function createMailerFromEnvironment() {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    SUPPORT_EMAIL,
    FROM_EMAIL,
  } = process.env;

  const port = Number(SMTP_PORT);
  const missing = [
    ["SMTP_HOST", SMTP_HOST],
    ["SMTP_PORT", SMTP_PORT],
    ["SMTP_USER", SMTP_USER],
    ["SMTP_PASS", SMTP_PASS],
    ["SUPPORT_EMAIL", SUPPORT_EMAIL],
    ["FROM_EMAIL", FROM_EMAIL],
  ]
    .filter(([, value]) => !value)
    .map(([name]) => name);

  if (missing.length || !Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error(
      `Email configuration is incomplete or invalid. Check: ${
        [...missing, ...(!Number.isInteger(port) || port < 1 || port > 65535 ? ["SMTP_PORT"] : [])]
          .join(", ") || "SMTP_PORT"
      }`,
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: SMTP_SECURE === "true",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  return (mail) =>
    transporter.sendMail({
      ...mail,
      from: FROM_EMAIL,
    });
}

if (require.main === module) {
  try {
    const sendMail = createMailerFromEnvironment();
    const port = Number(process.env.PORT || 3000);
    createApp(sendMail).listen(port, () => {
      console.log(`Help Center server listening on port ${port}`);
    });
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

module.exports = { createApp, createMailerFromEnvironment };
