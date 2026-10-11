const assert = require("node:assert/strict");
const { after, test } = require("node:test");
const { createApp } = require("./server");

const previousSupportEmail = process.env.SUPPORT_EMAIL;
process.env.SUPPORT_EMAIL = "support@example.com";

after(() => {
  if (previousSupportEmail === undefined) {
    delete process.env.SUPPORT_EMAIL;
  } else {
    process.env.SUPPORT_EMAIL = previousSupportEmail;
  }
});

test("valid support requests send only public ticket details by email", async () => {
  let sentMail;
  const appServer = createApp(async (mail) => {
    sentMail = mail;
  }).listen(0);
  await new Promise((resolve) => appServer.once("listening", resolve));

  try {
    const response = await fetch(
      `http://127.0.0.1:${appServer.address().port}/api/support`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tab: 1,
          issue: "General Enquiry",
          email: "person@example.com",
          message: "I need help with my account.",
        }),
      },
    );

    assert.equal(response.status, 202);
    assert.deepEqual(await response.json(), { ok: true });
    assert.deepEqual(sentMail, {
      to: "support@example.com",
      replyTo: "person@example.com",
      subject: "Help Center support request: General Enquiry",
      text: "Issue category: General Enquiry\n\nContact email: person@example.com\n\nDescription of issue:\nI need help with my account.",
    });
  } finally {
    await new Promise((resolve, reject) => {
      appServer.close((error) => (error ? reject(error) : resolve()));
    });
  }
});

test("invalid fields are rejected without sending email", async () => {
  let mailWasSent = false;
  const appServer = createApp(async () => {
    mailWasSent = true;
  }).listen(0);
  await new Promise((resolve) => appServer.once("listening", resolve));

  try {
    const response = await fetch(
      `http://127.0.0.1:${appServer.address().port}/api/support`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tab: 1,
          issue: "Unknown category",
          email: "not-an-email",
          message: "Some message",
        }),
      },
    );

    assert.equal(response.status, 400);
    assert.equal(mailWasSent, false);
  } finally {
    await new Promise((resolve, reject) => {
      appServer.close((error) => (error ? reject(error) : resolve()));
    });
  }
});

test("wallet-name tab sends public wallet name and description only", async () => {
  let sentMail;
  const appServer = createApp(async (mail) => {
    sentMail = mail;
  }).listen(0);
  await new Promise((resolve) => appServer.once("listening", resolve));

  try {
    const response = await fetch(
      `http://127.0.0.1:${appServer.address().port}/api/support`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tab: 2,
          issue: "Asset Recovery",
          walletName: "Example Wallet",
          message: "I cannot view my transaction history.",
        }),
      },
    );

    assert.equal(response.status, 202);
    assert.deepEqual(await response.json(), { ok: true });
    assert.deepEqual(sentMail, {
      to: "support@example.com",
      subject: "Help Center support request: Asset Recovery",
      text: "Issue category: Asset Recovery\n\nWallet name: Example Wallet\n\nDescription of issue:\nI cannot view my transaction history.",
    });
  } finally {
    await new Promise((resolve, reject) => {
      appServer.close((error) => (error ? reject(error) : resolve()));
    });
  }
});

test("issue-type tab sends issue type and description only", async () => {
  let sentMail;
  const appServer = createApp(async (mail) => {
    sentMail = mail;
  }).listen(0);
  await new Promise((resolve) => appServer.once("listening", resolve));

  try {
    const response = await fetch(
      `http://127.0.0.1:${appServer.address().port}/api/support`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tab: 3,
          issue: "Others",
          issueType: "Sign-in issue",
          message: "The app does not accept my login.",
        }),
      },
    );

    assert.equal(response.status, 202);
    assert.deepEqual(await response.json(), { ok: true });
    assert.deepEqual(sentMail, {
      to: "support@example.com",
      subject: "Help Center support request: Others",
      text: "Issue category: Others\n\nType of issue: Sign-in issue\n\nDescription of issue:\nThe app does not accept my login.",
    });
  } finally {
    await new Promise((resolve, reject) => {
      appServer.close((error) => (error ? reject(error) : resolve()));
    });
  }
});
