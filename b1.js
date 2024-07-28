function showFeedstockInfo() {
    const feedstock = document.getElementById('feedstock').value;
    const feedstockInfo = document.getElementById('feedstockInfo');
    
    let infoText = '';
    
    switch (feedstock) {
        case 'harvestResidue':
            infoText = 'Harvest residue refers to the remains of crops that are left in the field after the harvest. This can include stalks, leaves, and other plant material.';
            break;
        case 'salvagedTrees':
            infoText = 'Salvaged trees are trees that have been harvested from areas where they are no longer needed or wanted, such as in forest thinning operations or after natural disasters.';
            break;
        case 'greenTrees':
            infoText = 'Green trees are live trees that are harvested for bioenergy purposes. These trees are typically grown and managed specifically for energy production.';
            break;
        default:
            infoText = '';
    }
    
    feedstockInfo.innerText = infoText;
}

function calculateBioenergy() {
    const feedstock = document.getElementById('feedstock').value;
    const growingSpeed = document.getElementById('growingSpeed').value;
    const transformation = document.getElementById('transformation').value;
    const energyConversion = document.getElementById('energyConversion').value;

    if (!feedstock) {
        alert('Please select a feedstock');
        return;
    }

    let resultText = `Feedstock: ${feedstock === 'harvestResidue' ? 'Harvest Residue' : feedstock === 'salvagedTrees' ? 'Salvaged Trees' : 'Green Trees'}
    You can produce 20 to 40 L of bio gas per kg of food waste`;

    document.getElementById('result').innerText = resultText;
}
