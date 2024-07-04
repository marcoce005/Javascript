const win = () => {
	return Math.floor(Math.random() * 37) % 2 !== 0;
};

const initial_pool = 2000;

let bets = 100,
    pool = initial_pool,
    start_bet = 1,
    moneys = 0;

console.log(`total bets = ${bets}\nmoney pool = ${pool}\ninitial bet = ${start_bet}\n\n`);

for (let i = 0; i < bets; i++) {
	let status = win();

	if (pool - start_bet < 0) {
		console.log("con le pezze al culo")
		return;
	}

	/* if (pool - initial_pool > 10) {
		moneys += pool - initial_pool;
		pool = initial_pool;
	} */

	pool -= start_bet;
	if (status) {
		pool += start_bet * 2;
		start_bet /= 2;
	} else {
		start_bet *= 2;
	}
	console.log(`Bet ${i}:\n\twin? ${status}\n\tpool = ${pool}\n\tnext bet = ${start_bet}`);
}
