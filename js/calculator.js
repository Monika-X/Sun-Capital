/* ==========================================================================
   SUNCAPITAL SOLAR SAVINGS CALCULATOR MODULE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initSolarCalculator();
});

function initSolarCalculator() {
  const billSlider = document.getElementById('billSlider');
  const billValDisplay = document.getElementById('billValueDisplay');
  const propertySelect = document.getElementById('propertyTypeSelect');
  const batteryCheckbox = document.getElementById('batteryBackupCheck');

  // Metric displays
  const monthlySavingsEl = document.getElementById('metricMonthlySavings');
  const yearlySavingsEl = document.getElementById('metricYearlySavings');
  const systemCapacityEl = document.getElementById('metricSystemCapacity');
  const co2OffsetEl = document.getElementById('metricCo2Offset');
  const subsidyValEl = document.getElementById('metricSubsidyVal');
  const roiPeriodEl = document.getElementById('metricRoiPeriod');

  if (!billSlider) return;

  function calculateSavings() {
    const monthlyBill = parseFloat(billSlider.value) || 250;
    const isCommercial = propertySelect ? propertySelect.value === 'commercial' : false;
    const hasBattery = batteryCheckbox ? batteryCheckbox.checked : false;

    // Display formatted bill input value
    if (billValDisplay) {
      billValDisplay.textContent = `$${monthlyBill}`;
    }

    // Solar Math Formulas
    // Avg solar energy savings ratio: ~85% of grid bill replaced by solar
    const savingsRatio = 0.85;
    const monthlySavings = Math.round(monthlyBill * savingsRatio);
    const yearlySavings = monthlySavings * 12;
    const total25YearSavings = Math.round(yearlySavings * 25 * 1.03); // Assuming 3% annual grid rate inflation

    // System capacity calculation: 1 kW generates approx $25/mo in savings
    let capacityKw = Math.ceil(monthlySavings / 22);
    if (isCommercial) capacityKw = Math.ceil(capacityKw * 1.5);
    if (capacityKw < 3) capacityKw = 3;

    // CO2 offset: 1.2 Tons per kW annually
    const co2Tons = (capacityKw * 1.25).toFixed(1);

    // Subsidy estimate: ~30% Federal & Local Solar Tax Credit
    const estSystemCost = capacityKw * 2200;
    const subsidyVal = Math.round(estSystemCost * 0.30);

    // Payback period
    const netCost = estSystemCost - subsidyVal + (hasBattery ? 4500 : 0);
    const paybackYears = (netCost / yearlySavings).toFixed(1);

    // Update UI elements with smooth counting/text
    if (monthlySavingsEl) monthlySavingsEl.textContent = `$${monthlySavings.toLocaleString()}`;
    if (yearlySavingsEl) yearlySavingsEl.textContent = `$${total25YearSavings.toLocaleString()}`;
    if (systemCapacityEl) systemCapacityEl.textContent = `${capacityKw} kW`;
    if (co2OffsetEl) co2OffsetEl.textContent = `${co2Tons} Tons/Yr`;
    if (subsidyValEl) subsidyValEl.textContent = `$${subsidyVal.toLocaleString()}`;
    if (roiPeriodEl) roiPeriodEl.textContent = `${paybackYears} Yrs`;
  }

  // Event Listeners
  billSlider.addEventListener('input', calculateSavings);
  if (propertySelect) propertySelect.addEventListener('change', calculateSavings);
  if (batteryCheckbox) batteryCheckbox.addEventListener('change', calculateSavings);

  // Initial calculation trigger
  calculateSavings();
}
