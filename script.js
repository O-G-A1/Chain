const collections = [
  {
    title: "Onchain App",
    desc: "Detailed information about Crypto.com App, available markets, CRO lockup, Crypto deposits and withdrawals, referral program, and security",
    count: "114 articles",
  },
  {
    title: "Onchain Exchange",
    desc: "Registration, account management, trading, CRO lockup, fees, referral program and security",
    count: "150 articles",
  },
  {
    title: "Onchain Prepaid Card",
    desc: "Everything to know about Crypto.com Prepaid Card - application, activation, usage and benefits",
    count: "49 articles",
  },
  {
    title: "Onchain Cash Account",
    desc: "Set up, Deposits, Withdrawals, Bank Transfers, Account Management",
    count: "48 articles",
  },
  {
    title: "KYC - Know Your Customer",
    desc: "All about KYC - Verification, documents, applications, Singpass, Source of Funds",
    count: "7 articles",
  },
  {
    title: "Security",
    desc: "APP Policy, Data Privacy, and Security Awareness",
    count: "7 articles",
  },
  {
    title: "Onchain",
    desc: "Onboarding, wallet management, deposit and withdrawal",
    count: "91 articles",
  },
];

const primaryIssues = [
  { icon: "fa-shuffle", text: "Migration Issues" },
  { icon: "fa-coins", text: "Asset Recovery" },
  { icon: "fa-wrench", text: "Rectification" },
  { icon: "fa-user-lock", text: "Account Locked" },
  { icon: "fa-wallet", text: "Withdrawal Issues" },
  { icon: "fa-ellipsis-h", text: "Others" },
];

const otherIssues = [
  { icon: "fa-credit-card", text: "Card Issues" },
  { icon: "fa-money-check-dollar", text: "Deposit Issues" },
  { icon: "fa-arrow-right-arrow-left", text: "Transfer Issues" },
  { icon: "fa-shield-halved", text: "Security Verification" },
  { icon: "fa-key", text: "2FA Problems" },
  { icon: "fa-id-card", text: "KYC Verification" },
  { icon: "fa-mobile-screen", text: "App Problems" },
  { icon: "fa-user", text: "Account Management" },
  { icon: "fa-circle-question", text: "General Enquiry" },
];

const mostRead = [
  "How to choose a Network when Depositing/Withdrawing Crypto?",
  "Prepaid Card - Rewards & Benefits",
  "How to Set Up Your App 2FA?",
  "Cash Account - General Information",
  "How to Update Your Phone Number in the Onchain App",
  "How to Send Crypto",
];

// Real-style Article Content
const articlesDB = {
  "How to choose a Network when Depositing/Withdrawing Crypto?": `
        <p class="mb-4">Choosing the correct network is critical when depositing or withdrawing crypto. Using the wrong network may result in permanent loss of funds.</p>
        <h4 class="font-semibold mt-6 mb-3">Supported Networks:</h4>
        <ul class="list-disc pl-6 space-y-3">
            <li><strong>ERC-20</strong> – Ethereum mainnet</li>
            <li><strong>BEP-20</strong> – BNB Smart Chain</li>
            <li><strong>TRC-20</strong> – Tron Network (recommended for low fees)</li>
            <li><strong>Polygon</strong>, <strong>Arbitrum</strong>, <strong>Optimism</strong> and others</li>
        </ul>
        <p class="mt-6 text-sm bg-blue-50 p-4 rounded-2xl">Always verify the network on both sending and receiving platforms before confirming.</p>
    `,

  "Prepaid Card - Rewards & Benefits": `
        <p class="mb-4">The Visa Card provides attractive rewards based on your selected card tier and staking level. Eligible users may enjoy cashback rewards on purchases, subscription rebates, airport lounge access, and other exclusive benefits depending on their card level.</p>

        <p class="mb-4">Rewards are credited according to the platform's terms and may vary by region or promotional campaign. Certain benefits may require an active staking period or continued account eligibility.</p>

        <p class="mt-6 text-sm bg-blue-50 p-4 rounded-2xl">Review the latest card benefits available in your region before applying or upgrading your card tier.</p>
    `,

  "How to Set Up Your App 2FA?": `
        <p class="mb-4">Two-Factor Authentication (2FA) adds an extra layer of protection to your account by requiring a verification code whenever you sign in or perform sensitive actions. Enabling 2FA significantly reduces the risk of unauthorized access.</p>

        <p class="mb-4">To enable 2FA, open the application, navigate to the Security section within Settings, and follow the prompts to connect your preferred authenticator application. Once activated, securely store your recovery or backup codes in a safe location.</p>

        <p class="mt-6 text-sm bg-blue-50 p-4 rounded-2xl">Never share your authentication codes or backup codes with anyone claiming to represent customer support.</p>
    `,

  "Cash Account - General Information": `
        <p class="mb-4">The Cash Account allows you to securely manage supported fiat currencies for deposits, withdrawals, and funding eligible platform services. Once your account has been verified, you can transfer funds using the banking methods available in your region.</p>

        <p class="mb-4">Deposit and withdrawal processing times may vary depending on your financial institution and local banking network. To help avoid delays, ensure that your banking information matches your verified account details and that all submitted information is accurate.</p>

        <p class="mb-4">For security and regulatory compliance, withdrawals are generally processed only to bank accounts registered under the verified account holder's name. Additional verification may be required for certain transactions.</p>

        <p class="mt-6 text-sm bg-blue-50 p-4 rounded-2xl">Never share your online banking credentials or one-time verification codes with anyone.</p>
    `,

  "How to Update Your Phone Number in the Onchain App": `
        <p class="mb-4">Keeping your phone number up to date ensures you continue receiving important security alerts, verification codes, and account notifications. Before requesting an update, make sure you have access to your registered email address and any required verification methods.</p>

        <p class="mb-4">Open the application and navigate to the Account Settings or Security section. Select the option to update your phone number, complete the requested identity verification steps, and submit your new mobile number. Depending on your account status, additional verification may be required before the update is approved.</p>

        <p class="mb-4">If you no longer have access to your previous phone number, you may be asked to complete an identity verification process before the change can be completed.</p>

        <p class="mt-6 text-sm bg-blue-50 p-4 rounded-2xl">Always ensure your contact information remains accurate to help protect your account against unauthorized access.</p>
    `,

  "How to Send Crypto": `
        <p class="mb-4">Before sending cryptocurrency, carefully verify the recipient's wallet address and ensure that the selected blockchain network matches the receiving platform. Transactions sent using an incorrect network or invalid wallet address may be irreversible and could result in permanent loss of funds.</p>

        <p class="mb-4">To send crypto, open your wallet, select the digital asset you wish to transfer, enter or paste the recipient's wallet address, specify the amount to send, and review all transaction details before confirming. If multiple blockchain networks are available, choose the one supported by the receiving wallet.</p>

        <p class="mb-4">After confirming the transaction, blockchain processing times will depend on network activity and the number of confirmations required by the receiving platform. Once broadcast to the blockchain, transactions generally cannot be cancelled or reversed.</p>

        <p class="mt-6 text-sm bg-blue-50 p-4 rounded-2xl">When transferring funds to a new wallet for the first time, consider sending a small test transaction before transferring larger amounts.</p>
    `,
  "Onchain App": `
    <p class="mb-4">
        The Onchain App provides users with access to supported digital assets, account management tools, and wallet services in a secure environment. Through the application, users can buy, sell, transfer, and manage cryptocurrencies while monitoring balances, transaction history, and market activity in real time.
    </p>

    <p class="mb-4">
        The application includes features such as crypto deposits and withdrawals, price tracking, account verification, security management, and portfolio monitoring. Certain features may vary depending on your country or region and are subject to applicable regulations.
    </p>

    <p class="mb-4">
        To help protect your account, always keep the application updated to the latest version and enable available security features such as Two-Factor Authentication (2FA), biometric authentication, and email verification.
    </p>

    <p class="mt-6 text-sm bg-blue-50 p-4 rounded-2xl">
        Never install modified versions of the application or disclose your recovery credentials to anyone claiming to represent customer support.
    </p>
`,

  "Onchain Exchange": `
    <p class="mb-4">
        The Onchain Exchange allows users to trade supported cryptocurrencies through a secure trading platform offering spot markets and other eligible trading services. Users can place market or limit orders, review order history, and monitor current market activity directly from their account dashboard.
    </p>

    <p class="mb-4">
        Before trading, ensure your account has completed all required verification procedures and contains sufficient available balance. Trading fees, supported markets, and available services may differ depending on your jurisdiction and account status.
    </p>

    <p class="mb-4">
        Always review your order details carefully before confirming a trade, as completed transactions generally cannot be reversed once executed.
    </p>

    <p class="mt-6 text-sm bg-blue-50 p-4 rounded-2xl">
        Enable account security features and regularly review your recent login activity to help protect your trading account.
    </p>
`,

  "Onchain Prepaid Card": `
    <p class="mb-4">
        The Onchain Prepaid Card allows eligible users to spend supported digital assets wherever the card network is accepted. Once activated, the card can be managed directly through the application, where users can review transactions, monitor spending, and manage card settings.
    </p>

    <p class="mb-4">
        Depending on your selected card tier and regional availability, additional benefits such as spending rewards, subscription rebates, or promotional offers may be available. Eligibility requirements and available benefits are subject to change.
    </p>

    <p class="mb-4">
        If your card is lost or stolen, immediately freeze the card through the application and contact customer support to request a replacement if necessary.
    </p>

    <p class="mt-6 text-sm bg-blue-50 p-4 rounded-2xl">
        Regularly monitor your card activity and report any unauthorized transactions as soon as possible.
    </p>
`,

  "Onchain Cash Account": `
    <p class="mb-4">
        The Onchain Cash Account enables users to securely manage supported fiat currencies for deposits, withdrawals, and funding eligible platform services. Bank transfer methods and supported currencies may vary depending on your region and verification status.
    </p>

    <p class="mb-4">
        Deposits and withdrawals are processed according to the banking schedules of participating financial institutions. Processing times may differ depending on weekends, public holidays, or additional compliance reviews.
    </p>

    <p class="mb-4">
        To avoid delays, ensure that all banking information matches the personal information associated with your verified account and that transfers originate from approved financial institutions where required.
    </p>

    <p class="mt-6 text-sm bg-blue-50 p-4 rounded-2xl">
        Never share your online banking credentials or one-time verification codes with anyone.
    </p>
`,

  "KYC - Know Your Customer": `
    <p class="mb-4">
        Know Your Customer (KYC) verification is an important identity verification process that helps maintain platform security, comply with regulatory requirements, and protect users from fraud. Completing KYC may be required before accessing certain platform features.
    </p>

    <p class="mb-4">
        During verification, you may be asked to provide government-issued identification, proof of address, or additional supporting documentation. Submitted information is reviewed securely, and processing times may vary depending on verification demand.
    </p>

    <p class="mb-4">
        If additional information is required, you will receive a notification requesting further documentation before verification can be completed.
    </p>

    <p class="mt-6 text-sm bg-blue-50 p-4 rounded-2xl">
        Ensure that all submitted documents are valid, clearly visible, and match your registered account information.
    </p>
`,

  Security: `
    <p class="mb-4">
        Protecting your account begins with maintaining strong security practices. Users are encouraged to create unique passwords, enable Two-Factor Authentication (2FA), and regularly review account activity to detect any unauthorized access.
    </p>

    <p class="mb-4">
        Be cautious of phishing emails, fake websites, unsolicited messages, and individuals requesting sensitive account information. Official support representatives will never request your password, recovery phrase, private key, or authentication codes.
    </p>

    <p class="mb-4">
        Keep your devices updated with the latest operating system and security patches, and avoid accessing your account through untrusted public networks whenever possible.
    </p>

    <p class="mt-6 text-sm bg-blue-50 p-4 rounded-2xl">
        If you suspect unauthorized activity, immediately secure your account by changing your password and contacting customer support.
    </p>
`,

  Onchain: `
    <p class="mb-4">
        Onchain services provide users with the ability to securely manage supported blockchain assets through deposits, withdrawals, and wallet management features. Users can monitor balances, review transaction history, and access supported blockchain networks from a single interface.
    </p>

    <p class="mb-4">
        Before initiating deposits or withdrawals, always verify that the selected blockchain network matches the receiving wallet. Transactions sent using an unsupported network may not be recoverable.
    </p>

    <p class="mb-4">
        Wallet addresses should always be reviewed carefully before confirming any transfer. Once a blockchain transaction has been broadcast, it generally cannot be cancelled or reversed.
    </p>

    <p class="mt-6 text-sm bg-blue-50 p-4 rounded-2xl">
        For additional security, perform a small test transaction when sending funds to a new wallet address for the first time.
    </p>
`,
  default: `
        <p>This article is from the official Help Center.</p>
        <p class="mt-4">You would find step-by-step instructions, screenshots, and troubleshooting tips here.</p>
    `,
};

// Render Functions
function renderCollections(items) {
  const container = document.getElementById("collections-grid");
  container.innerHTML = items
    .map(
      (item) => `
        <div onclick="showArticle('${item.title}')" class="collection-card bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#5E17EB] cursor-pointer">
            <h3 class="font-semibold text-lg mb-2 text-[#0A2540]">${item.title}</h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-3">${item.desc}</p>
            <span class="inline-block bg-purple-100 text-[#5E17EB] text-xs font-medium px-3 py-1 rounded-full">${item.count}</span>
        </div>
    `,
    )
    .join("");
}

function renderMostRead(items) {
  const container = document.getElementById("most-read");
  container.innerHTML = items
    .map(
      (title) => `
        <div onclick="showArticle('${title}')" class="bg-white border border-gray-200 rounded-2xl p-5 hover:border-[#5E17EB] cursor-pointer transition">
            <p class="font-medium text-gray-800">${title}</p>
        </div>
    `,
    )
    .join("");
}

function showArticle(title) {
  const modal = document.getElementById("article-modal");
  const titleEl = document.getElementById("modal-title");
  const contentEl = document.getElementById("modal-content");

  titleEl.textContent = title;
  contentEl.innerHTML = articlesDB[title] || articlesDB["default"];

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeModal() {
  const modal = document.getElementById("article-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}
function renderIssues(issues) {
  const grid = document.getElementById("issue-grid");

  grid.innerHTML = issues
    .map(
      (issue) => `
      <div
        class="feature-card p-5 border rounded-2xl text-center cursor-pointer hover:shadow"
        onclick="${
          issue.text === "Others" ? "showOtherIssues()" : `selectIssue(this)`
        }"
      >
        <i class="fa-solid ${issue.icon} text-3xl mb-3 text-purple-600"></i><br>
        ${issue.text}
      </div>
    `,
    )
    .join("");
}

function showOtherIssues() {
  renderIssues(otherIssues);
}

function setupSearch() {
  const searchInput = document.getElementById("search-input");
  const mobileSearch = document.getElementById("mobile-search");

  const filterContent = (term) => {
    term = term.toLowerCase().trim();
    if (!term) {
      renderCollections(collections);
      renderMostRead(mostRead);
      return;
    }

    const filteredCollections = collections.filter(
      (c) =>
        c.title.toLowerCase().includes(term) ||
        c.desc.toLowerCase().includes(term),
    );

    const filteredMostRead = mostRead.filter((a) =>
      a.toLowerCase().includes(term),
    );

    renderCollections(filteredCollections);
    renderMostRead(filteredMostRead);
  };

  searchInput?.addEventListener("input", (e) => filterContent(e.target.value));
  mobileSearch?.addEventListener("input", (e) => filterContent(e.target.value));
}

// ==================== INSTANT HELP MODAL ====================
function openHelpModal() {
  const modal = document.getElementById("help-modal");
  const body = document.getElementById("help-body");

  body.innerHTML = `
      <h3 class="text-lg font-semibold mb-6 text-center">
          What issue are you facing?
      </h3>

      <div
          id="issue-grid"
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      </div>
  `;

  renderIssues(primaryIssues);

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}
function closeHelpModal() {
  const modal = document.getElementById("help-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

function selectIssue(el) {
  const issue = el.textContent.trim();
  openRecoveryForm(issue);
}
function openRecoveryForm(issue) {
  const body = document.getElementById("help-body");
  window.selectedIssue = issue;
  window.selectedSupportTab = 1;

  body.innerHTML = `
    <button
      onclick="openHelpModal()"
      class="mb-5 text-[#5E17EB] font-semibold hover:underline">
      ← Back
    </button>

    <h3 class="text-2xl font-bold text-[#0A2540] mb-2">
      ${issue}
    </h3>

    <p class="text-gray-500 mb-6">
      Tell us how we can help. Do not include passwords, recovery phrases,
      private keys, or other wallet secrets.
    </p>

    <div class="flex gap-2 mb-6" role="tablist" aria-label="Support request options">
      <button
        id="support-tab-1"
        type="button"
        role="tab"
        aria-selected="true"
        aria-controls="support-panel-1"
        onclick="switchSupportTab(1)"
        class="support-tab flex-1 py-3 rounded-xl font-semibold bg-[#5E17EB] text-white">
        Tab 1
      </button>
      <button
        id="support-tab-2"
        type="button"
        role="tab"
        aria-selected="false"
        aria-controls="support-panel-2"
        onclick="switchSupportTab(2)"
        class="support-tab flex-1 py-3 rounded-xl font-semibold bg-gray-100 text-gray-600">
        Tab 2
      </button>
      <button
        id="support-tab-3"
        type="button"
        role="tab"
        aria-selected="false"
        aria-controls="support-panel-3"
        onclick="switchSupportTab(3)"
        class="support-tab flex-1 py-3 rounded-xl font-semibold bg-gray-100 text-gray-600">
        Tab 3
      </button>
    </div>

    <form id="support-form" onsubmit="submitSupportRequest(event)">
      <section id="support-panel-1" role="tabpanel" aria-labelledby="support-tab-1">
        <label for="emailField" class="block font-semibold mb-2">Email address</label>
        <input
          id="emailField"
          name="email"
          type="email"
          autocomplete="email"
          required
          class="w-full border border-gray-300 rounded-2xl p-4 mb-5 focus:outline-none focus:ring-2 focus:ring-[#5E17EB]"
          placeholder="you@example.com">
      </section>

      <section id="support-panel-2" role="tabpanel" aria-labelledby="support-tab-2" hidden>
        <label for="walletNameField" class="block font-semibold mb-2">Wallet name</label>
        <input
          id="walletNameField"
          name="walletName"
          type="text"
          maxlength="100"
          required
          disabled
          class="w-full border border-gray-300 rounded-2xl p-4 mb-5 focus:outline-none focus:ring-2 focus:ring-[#5E17EB]"
          placeholder="Name of the wallet app or provider">
        <p class="text-sm text-gray-500 -mt-3 mb-5">
          Enter only the wallet's public name, never a password or recovery credential.
        </p>
      </section>

      <section id="support-panel-3" role="tabpanel" aria-labelledby="support-tab-3" hidden>
        <label for="issueTypeField" class="block font-semibold mb-2">Type of issue</label>
        <input
          id="issueTypeField"
          name="issueType"
          type="text"
          maxlength="100"
          required
          disabled
          class="w-full border border-gray-300 rounded-2xl p-4 mb-5 focus:outline-none focus:ring-2 focus:ring-[#5E17EB]"
          placeholder="For example, login or transfer issue">
      </section>

      <label for="messageField" class="block font-semibold mb-2">Description of issue</label>
      <textarea
        id="messageField"
        name="message"
        rows="5"
        maxlength="2000"
        required
        class="w-full border border-gray-300 rounded-2xl p-4 resize-y focus:outline-none focus:ring-2 focus:ring-[#5E17EB]"
        placeholder="Describe the issue without including sensitive wallet information."></textarea>

      <p id="submit-error" class="hidden text-red-600 mt-3" role="alert"></p>

      <button
        type="submit"
        class="w-full mt-6 bg-[#5E17EB] hover:bg-[#4C0FCE] text-white py-3 rounded-2xl font-semibold transition-all">
        Send support request
      </button>
    </form>
  `;
}

function switchSupportTab(tabNumber) {
  document.querySelectorAll(".support-tab").forEach((tab, index) => {
    const active = index + 1 === tabNumber;
    tab.setAttribute("aria-selected", String(active));
    tab.classList.toggle("bg-[#5E17EB]", active);
    tab.classList.toggle("text-white", active);
    tab.classList.toggle("bg-gray-100", !active);
    tab.classList.toggle("text-gray-600", !active);
  });

  [1, 2, 3].forEach((number) => {
    const panel = document.getElementById(`support-panel-${number}`);
    const active = number === tabNumber;
    panel.hidden = !active;
    panel.querySelectorAll("input").forEach((input) => {
      input.disabled = !active;
    });
  });
  window.selectedSupportTab = tabNumber;
}

async function submitSupportRequest(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const button = form.querySelector('button[type="submit"]');
  const error = document.getElementById("submit-error");
  const tab = window.selectedSupportTab || 1;
  const email = form.elements.email.value.trim();
  const walletName = form.elements.walletName.value.trim();
  const issueType = form.elements.issueType.value.trim();
  const message = form.elements.message.value.trim();

  error.classList.add("hidden");
  button.disabled = true;
  button.textContent = "Sending...";

  try {
    const response = await fetch("/api/support", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tab,
        issue: window.selectedIssue,
        ...(tab === 1 ? { email } : {}),
        ...(tab === 2 ? { walletName } : {}),
        ...(tab === 3 ? { issueType } : {}),
        message,
      }),
    });

    if (!response.ok) {
      throw new Error(`Support server returned HTTP ${response.status}`);
    }

    showSuccess();
  } catch (submissionError) {
    console.error("Support request submission failed:", submissionError);
    error.textContent =
      "We couldn't send your request. Please try again in a moment.";
    error.classList.remove("hidden");
    button.disabled = false;
    button.textContent = "Send support request";
  }
}

function showSuccess() {
  const body = document.getElementById("help-body");

  body.innerHTML = `
    <div class="text-center py-20">
      <div class="text-6xl mb-6" aria-hidden="true">✅</div>
      <h2 class="text-3xl font-bold mb-4">Request submitted</h2>
      <p class="text-gray-500 mb-8">
        Your support request has been sent to the team.
      </p>
      <button
        onclick="closeHelpModal()"
        class="bg-[#5E17EB] text-white px-8 py-3 rounded-2xl">
        Close
      </button>
    </div>
  `;
}
function resetHelpModal() {
  const body = document.getElementById("help-body");

  body.innerHTML = `
    <h3 class="text-lg font-semibold mb-6 text-center">
      What issue are you facing?
    </h3>

    <div
      id="issue-grid"
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    </div>
  `;

  renderIssues(primaryIssues);
}
function openChat() {
  if (typeof Tawk_API !== "undefined") {
    Tawk_API.maximize();
  }
}
Tawk_API = Tawk_API || {};

Tawk_API.onLoad = function () {
  Tawk_API.hideWidget();
};
// function openChat() {
//   const modal = document.getElementById("help-modal");
//   const body = document.getElementById("help-body");

//   body.innerHTML = `
//     <div class="text-center py-12">
//       <div class="text-5xl mb-5">👨‍💻</div>

//       <h2 class="text-2xl font-bold text-[#0A2540] mb-4">
//         Support Team Busy
//       </h2>

//       <p class="text-gray-600 text-lg leading-relaxed mb-8">
//         Our support team is actively engaged right now.<br>
//         Please use the <strong>"Get Instant Help"</strong> center for immediate assistance.
//       </p>

//       <div class="flex justify-center gap-4">
//         <button
//           onclick="closeHelpModal()"
//           class="px-6 py-3 border border-gray-300 rounded-2xl hover:bg-gray-100">
//           Close
//         </button>

//         <button
//           onclick="openHelpModal()"
//           class="px-6 py-3 bg-[#5E17EB] text-white rounded-2xl hover:bg-[#4C0FCE]">
//           Get Instant Help
//         </button>
//       </div>
//     </div>
//   `;

//   modal.classList.remove("hidden");
//   modal.classList.add("flex");
// }

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderCollections(collections);
  renderMostRead(mostRead);
  setupSearch();
});
