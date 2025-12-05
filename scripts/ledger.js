function openLedger() {
  const modal = document.getElementById("ledgerModal");
  modal.classList.remove("hidden");
}

function closeLedger() {
  const modal = document.getElementById("ledgerModal");
  modal.classList.add("hidden");
}

function sendLedgerEmail() {
  const subject = encodeURIComponent("Wolfpack Planetarium Ledger Entry");
  const body = encodeURIComponent(
    [
      "I want to be recorded on the Global Ledger.",
      "",
      "Name (optional):",
      "GI (Google email):",
      "Which world(s) are you interested in leasing or exploring?",
      "",
      "- Sent from Wolfpack Planetarium Museum"
    ].join("\n")
  );

  window.location.href =
    `mailto:taylor@theflightlinehq.com?subject=${subject}&body=${body}`;
}
