// Get DOM elements
const categorySelect = document.getElementById('category');
const cropsInput = document.getElementById('cropsInput');
const animalsInput = document.getElementById('animalsInput');
const calculateButton = document.querySelector('.learn-more');
const resultLabel = document.getElementById('resultLabel');

// Show the appropriate input section based on the selected category
categorySelect.addEventListener('change', () => {
    const category = categorySelect.value;
    if (category === 'Crops') {
        cropsInput.style.display = 'block';
        animalsInput.style.display = 'none';
    } else if (category === 'Animals') {
        cropsInput.style.display = 'none';
        animalsInput.style.display = 'block';
    }
});

// Calculate function
calculateButton.addEventListener('click', () => {
    const category = categorySelect.value;
    const landSizeStr = document.getElementById('landSize').value;
    const animalCountStr = document.getElementById('animalCount') ? document.getElementById('animalCount').value : "";

    // Check for decimals in any field that must be whole numbers
    if ( animalCountStr.includes('.')) {
        resultLabel.innerHTML = 'Decimal numbers are not allowed. Please enter whole numbers only.';
        return; // Stop processing further
    }
    let result = 0;
    let result2 = 0;

    try {
        if (category === 'Crops') {
            const landSize = parseFloat(document.getElementById('landSize').value);
            const cropType = document.getElementById('cropType').value;

            if (cropType === 'Corn') {
                result = landSize * 7;
                result2 = landSize * 0.25;

                const seedCost = result2 * 120;
                const cropValue = result * 180;
                const fertilizerCost = landSize * 300;
                const profit = cropValue - fertilizerCost - seedCost;

                resultLabel.innerHTML = `
                    Seed needed: ${result2.toFixed(2)} tons<br>
                    Estimated seed cost: €${seedCost.toFixed(2)}<br>
                    Estimated crop output: ${result.toFixed(2)} tons<br>
                    Estimated crop value: €${cropValue.toFixed(2)}<br>
                    Fertilizer cost: €${fertilizerCost.toFixed(2)}<br>
                    Estimated profit by last year: €${profit.toFixed(2)}
                `;
            } else if (cropType === 'Wheat') {
                result = landSize * 10;
                result2 = landSize * 0.3;
                const seedCost = result2 * 140;
                const cropValue = result * 220;
                const fertilizerCost = landSize * 280;
                const profit = cropValue - fertilizerCost - seedCost;

                resultLabel.innerHTML = `
                    Seed needed: ${result2.toFixed(2)} tons<br>
                    Estimated seed cost: €${seedCost.toFixed(2)}<br>
                    Estimated crop output: ${result.toFixed(2)} tons<br>
                    Estimated crop value: €${cropValue.toFixed(2)}<br>
                    Fertilizer cost: €${fertilizerCost.toFixed(2)}<br>
                    Estimated profit by last year: €${profit.toFixed(2)}
                `;
            } else if (cropType === 'Canola') {
                result = landSize * 3.5;
                result2 = landSize * 0.2;
                const seedCost = result2 * 200;
                const cropValue = result * 500;
                const fertilizerCost = landSize * 320;
                const profit = cropValue - fertilizerCost - seedCost;

                resultLabel.innerHTML = `
                    Seed needed: ${result2.toFixed(2)} tons<br>
                    Estimated seed cost: €${seedCost.toFixed(2)}<br>
                    Estimated crop output: ${result.toFixed(2)} tons<br>
                    Estimated crop value: €${cropValue.toFixed(2)}<br>
                    Fertilizer cost: €${fertilizerCost.toFixed(2)}<br>
                    Estimated profit by last year: €${profit.toFixed(2)}
                `;
            }
        } else if (category === 'Animals') {
            const animalCount = parseFloat(document.getElementById('animalCount').value);
            const animalType = document.getElementById('animalType').value;

            if (animalType === 'Cow') {
                result = animalCount * 4.1;
                result2 = animalCount * 0.2;
                resultLabel.innerHTML = `
                    Estimated tons of hay needed per year: ${result.toFixed(2)} Tons<br>
                    Estimated tons of flour needed per year: ${result2.toFixed(2)} Tons
                `;
            } else if (animalType === 'Sheep') {
                result = animalCount * 0.9;
                result2 = animalCount * 4;
                const blocks = animalCount * 2;
                resultLabel.innerHTML = `
                    Estimated tons of hay needed per year: ${result.toFixed(2)} Tons<br>
                    Estimated kilograms of salt needed per year: ${result2.toFixed(2)} Kg (Around ${blocks.toFixed(2)} blocks)
                `;
            } else if (animalType === 'Pig') {
                result = animalCount * 0.6;
                resultLabel.innerHTML = `Estimated tons of food needed per year: ${result.toFixed(2)} Tons`;
            }
        }
    } catch (e) {
        resultLabel.innerHTML = 'Please enter valid numeric values.';
    }
});
