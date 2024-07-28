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

    // Perform calculations
    const solarPanelSizeFromRoof = roofArea * 0.15; // Example calculation
    const solarPanelSizeFromCapacity = panelCapacity; // Direct input
    const panelCost = 100; // Rs. per kW as an example
    const solarPanelSizeFromBudget = budget / panelCost;

    let resultText = `Based on your entries:
        <br>Daily Energy Consumption: ${energy} kWh
        <br>Total Roof Top Area: ${roofArea} sq ft
        <br>Solar Panel Capacity: ${panelCapacity} kW
        <br>Budget: Rs. ${budget}
        <br>State: ${state}
        <br>Customer Category: ${category}
        <br>Average Electricity Cost: Rs. ${electricityCost} /kWh
        <br><br>You can install approximately <strong>${solarPanelSizeFromBudget.toFixed(2)} kW</strong> of solar panels.`;

    document.getElementById('result').innerHTML = resultText;
}
