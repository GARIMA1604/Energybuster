function calculateSolar() {
    const energy = parseFloat(document.getElementById('energy').value);
    const roofArea = parseFloat(document.getElementById('roofArea').value);
    const panelCapacity = parseFloat(document.getElementById('panelCapacity').value);
    const budget = parseFloat(document.getElementById('budget').value);
    const electricityCost = parseFloat(document.getElementById('electricityCost').value);
    const state = document.getElementById('state').value;
    const category = document.getElementById('category').value;

    if (isNaN(energy) || isNaN(roofArea) || isNaN(panelCapacity) || isNaN(budget) || isNaN(electricityCost)) {
        alert('Please enter valid numbers');
        return;
    }

    // Perform calculations (example calculations here, adjust as necessary)
    const solarPanelSizeFromRoof = roofArea * 0.15; // Example calculation
    const solarPanelSizeFromCapacity = panelCapacity; // Direct input
    const panelCost = 100; // Rs. per kW as an example
    const solarPanelSizeFromBudget = budget / panelCost;

    let resultText = `Based on your entries:
     you can install approximately ${solarPanelSizeFromBudget.toFixed(2)} kW of solar panels.`;

    document.getElementById('result').innerText = resultText;
}
