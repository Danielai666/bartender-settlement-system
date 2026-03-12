function calculate() {
  let wage = parseFloat(document.getElementById("wage").value) || 0;
  let tips = parseFloat(document.getElementById("tips").value) || 0;
  let cut = parseFloat(document.getElementById("cut").value) || 0;
  let tillStart = parseFloat(document.getElementById("tillStart").value) || 0;
  let tillReturned = parseFloat(document.getElementById("tillReturned").value) || 0;

  let venueCut = tips * (cut / 100);
  let tipPayout = tips - venueCut;
  let finalPay = wage + tipPayout;
  let tillDiff = tillReturned - tillStart;

  document.getElementById("results").innerHTML = `
    <div class="result">Venue Cut: $${venueCut.toFixed(2)}</div>
    <div class="result">Tip Payout: $${tipPayout.toFixed(2)}</div>
    <div class="result">Final Pay: $${finalPay.toFixed(2)}</div>
    <div class="result">Till Difference: $${tillDiff.toFixed(2)}</div>
  `;
}

function startSession() {
  alert("Session started (backend later)");
}

function saveSettlement() {
  alert("Settlement saved (backend later)");
}
