function calculateWindPower() {
    const bladeLength = parseFloat(document.getElementById('bladeLength').value);
    const sweepArea = parseFloat(document.getElementById('sweepArea').value);
    const windPower = parseFloat(document.getElementById('windPower').value);
    const efficiency = parseFloat(document.getElementById('efficiency').value) / 100;
    const wakeLosses = parseFloat(document.getElementById('wakeLosses').value) / 100;
    const outputPower = parseFloat(document.getElementById('outputPower').value);
    const turbineType = document.querySelector('input[name="turbineType"]:checked')?.value;

    if (isNaN(bladeLength) || isNaN(sweepArea) || isNaN(windPower) || isNaN(efficiency) || isNaN(wakeLosses) || isNaN(outputPower)) {
        alert('Please enter valid numbers');
        return;
    }

    // Example calculation (adjust as necessary)
    const adjustedPower = outputPower * efficiency * (1 - wakeLosses);

    let resultText = `For a ${turbineType === 'hawt' ? 'Horizontal Axis Wind Turbine (HAWT)' : 'Vertical Axis Wind Turbine (VAWT)'}:
    - Adjusted power after losses: ${adjustedPower.toFixed(2)} kW`;

    document.getElementById('result').innerHTML = resultText;
}
