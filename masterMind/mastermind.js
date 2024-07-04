function mastermindKnuth(secretWord) {
    let possibilities = generateAllCombinations(); // Genera tutte le possibili combinazioni
    let guess = ['A', 'B', 'C', 'D']; // Congettura iniziale
    let steps = [];

    while (true) {
        let feedback = getFeedback(secretWord, guess); // Ottiene il feedback sulla congettura

        steps.push({ guess: guess.slice(), feedback: feedback });

        if (feedback.correct === 4) {
            console.log("La combinazione segreta è stata trovata:", guess);
            console.log("Passaggi:", steps);
            break;
        }

        console.log(possibilities.length);
        possibilities = filterPossibilities(possibilities, guess, feedback); // Filtra le possibilità
        guess = generateNextGuess(possibilities); // Genera la prossima congettura
    }
}

// Funzione per filtrare le possibilità in base al feedback
function filterPossibilities(possibilities, guess, feedback) {
    return possibilities.filter(combination =>
        isValidCombination(combination, guess, feedback)
    );
}

// Funzione per verificare se una combinazione è valida in base al feedback
function isValidCombination(combination, guess, feedback) {
    let countCorrect = 0;
    let countMisplaced = 0;
    let remainingGuess = [...guess];

    for (let i = 0; i < combination.length; i++) {
        if (combination[i] === remainingGuess[i]) {
            countCorrect++;
            remainingGuess[i] = null;
        }
    }

    for (let i = 0; i < combination.length; i++) {
        if (combination[i] !== guess[i] && remainingGuess.includes(combination[i])) {
            countMisplaced++;
            remainingGuess[remainingGuess.indexOf(combination[i])] = null;
        }
    }

    return countCorrect === feedback.correct && countMisplaced === feedback.misplaced;
}

// Funzione per generare la prossima congettura
function generateNextGuess(possibilities) {
    let minMax = Infinity;
    let bestGuess = possibilities[0];

    for (let guess of possibilities) {
        let maxScore = Math.max(...[...new Set(possibilities.map(possibility =>
            possibilities.filter(poss => isValidCombination(poss, guess, {
                correct: 0,
                misplaced: 0
            })).length
        ))]);

        if (maxScore < minMax) {
            minMax = maxScore;
            bestGuess = guess;
        }
    }

    return bestGuess;
}

// Funzione per generare tutte le possibili combinazioni
function generateAllCombinations() {
    let colors = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']; // Colori disponibili
    let combinations = [];

    for (let color1 of colors) {
        for (let color2 of colors) {
            for (let color3 of colors) {
                for (let color4 of colors) {
                    combinations.push([color1, color2, color3, color4]);
                }
            }
        }
    }

    return combinations;
}

// Funzione per ottenere il feedback sulla congettura
function getFeedback(secretWord, guess) {
    let correct = 0;
    let misplaced = 0;

    for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === guess[i]) {
            correct++;
        } else if (guess.includes(secretWord[i])) {
            misplaced++;
        }
    }

    return { correct: correct, misplaced: misplaced };
}

// Esegui l'algoritmo
let secretWord = 'GFBA'; // Parola segreta
mastermindKnuth(secretWord);

