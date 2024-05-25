function calculateRetirement() {
  const age = parseInt(document.getElementById('age').value);
  const retirementAge = parseInt(document.getElementById('retirementAge').value);
  const currentSavings = parseFloat(document.getElementById('currentSavings').value);
  const annualIncome = parseFloat(document.getElementById('annualIncome').value);
  const savingsRate = parseFloat(document.getElementById('savingsRate').value);
  const desiredRetirementIncome = parseFloat(document.getElementById('desiredRetirementIncome').value);
  const inflationRate = 5;
  const investmentReturnRate = parseFloat(document.getElementById('investmentReturnRate').value);
  const lifeExpectancy = 99;

  const yearsToRetirement = retirementAge - age;
  const yearsInRetirement = lifeExpectancy - retirementAge;
  const futureValueFactor = Math.pow(1 + inflationRate / 100, yearsToRetirement);
  const futureRetirementIncome = desiredRetirementIncome * futureValueFactor;
  const savingsNeeded = futureRetirementIncome * yearsInRetirement;
  const annualSavingsNeeded = savingsNeeded / yearsToRetirement;
  const monthlySavingsNeeded = annualSavingsNeeded / 12;

  document.getElementById('annualSavings').innerText = `Annual Savings Needed: $${annualSavingsNeeded.toFixed(2)}`;
  document.getElementById('monthlySavings').innerText = `Monthly Savings Needed: $${monthlySavingsNeeded.toFixed(2)}`;
}
