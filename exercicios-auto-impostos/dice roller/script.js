// Importa a classe DiceBox da biblioteca
import { DiceBox } from 'https://cdn.jsdelivr.net/npm/@3d-dice/dice-box@1.0.3/dist/dice-box.min.js';

// Pega o elemento onde os dados 3D serão renderizados
const diceCanvas = document.getElementById('dice-canvas');
// Pega o elemento onde o resultado será exibido
const rollResultDisplay = document.getElementById('roll-result');
// Pega todos os botões de rolagem
const rollButtons = document.querySelectorAll('.roll-btn');

// Inicializa a DiceBox
const Dice = new DiceBox(diceCanvas, {
    // Opções de configuração (ajuste se quiser)
    gravity: 1,           // Força da gravidade
    mass: 1,              // Massa dos dados
    friction: 0.8,        // Fricção dos dados no chão
    restitution: 0.8,     // Força do "quique" dos dados
    spinForce: 0.1,       // Força de giro inicial
    throwForce: 5,        // Força com que os dados são lançados
    theme: 'default',     // Tema dos dados (pode ser 'default', 'wood', etc.)
    lightIntensity: 0.9   // Intensidade da luz ambiente
});

// Inicializa o motor 3D
Dice.init().then(() => {
    console.log('DiceBox inicializado e pronto para rolar!');

    // Adiciona um listener de evento para cada botão de rolagem
    rollButtons.forEach(button => {
        button.addEventListener('click', () => {
            const diceType = button.dataset.diceType; // Pega o tipo de dado do atributo data-dice-type
            rollDice(diceType);
        });
    });
}).catch(error => {
    console.error('Erro ao inicializar DiceBox:', error);
    rollResultDisplay.textContent = 'Erro ao carregar os dados 3D.';
});

/**
 * Função para rolar um dado específico.
 * @param {string} diceType O tipo de dado a ser rolado (ex: 'd20', 'd6').
 */
async function rollDice(diceType) {
    // Limpa o resultado anterior
    rollResultDisplay.textContent = 'Rolando...';

    try {
        // A notação '1d' + diceType significa rolar 1 dado daquele tipo.
        // Por exemplo, '1d20' para um d20.
        const results = await Dice.roll(`1${diceType}`);
        console.log('Resultados da rolagem:', results);

        // O resultado estará no primeiro elemento do array 'results'
        // 'value' é o número final que o dado mostrou
        if (results && results.length > 0) {
            const finalResult = results[0].value;
            rollResultDisplay.textContent = finalResult;
        } else {
            rollResultDisplay.textContent = 'Erro: Nenhum resultado obtido.';
        }
    } catch (error) {
        console.error('Erro ao rolar o dado:', error);
        rollResultDisplay.textContent = 'Erro na rolagem!';
    }
}