document.addEventListener('DOMContentLoaded', function() {
    const diceOptions = document.querySelectorAll('.dice-option');
    const rollBtn = document.getElementById('roll-btn');
    const decreaseBtn = document.getElementById('decrease');
    const increaseBtn = document.getElementById('increase');
    const quantityDisplay = document.getElementById('quantity');
    const resultDisplay = document.getElementById('result-display');
    const totalDisplay = document.getElementById('total');
    
    let selectedDice = 6; // Default to d6
    let quantity = 1;
    
    // Select dice type
    diceOptions.forEach(option => {
        option.addEventListener('click', function() {
            diceOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            selectedDice = parseInt(this.getAttribute('data-sides'));
        });
    });
    
    // Set d6 as default selected
    document.querySelector('.dice-option[data-sides="6"]').classList.add('selected');
    
    // Quantity controls
    decreaseBtn.addEventListener('click', function() {
        if (quantity > 1) {
            quantity--;
            quantityDisplay.textContent = quantity;
        }
    });
    
    increaseBtn.addEventListener('click', function() {
        if (quantity < 20) {
            quantity++;
            quantityDisplay.textContent = quantity;
        }
    });
    
    // Roll dice
    rollBtn.addEventListener('click', function() {
        const results = [];
        let total = 0;
        
        for (let i = 0; i < quantity; i++) {
            const roll = rollDice(selectedDice);
            results.push(roll);
            total += roll;
        }
        
        displayResults(results, total);
    });
    
    // Dice rolling function
    function rollDice(sides) {
        return Math.floor(Math.random() * sides) + 1;
    }
    
    // Display results
    function displayResults(results, total) {
        resultDisplay.innerHTML = '';
        
        if (results.length === 1) {
            resultDisplay.innerHTML = `<div class="die-roll">${results[0]}</div>`;
        } else {
            results.forEach((result, index) => {
                const rollElement = document.createElement('div');
                rollElement.className = 'die-roll';
                rollElement.textContent = `${index + 1}: ${result}`;
                resultDisplay.appendChild(rollElement);
            });
        }
        
        totalDisplay.textContent = `Total: ${total}`;
    }
});