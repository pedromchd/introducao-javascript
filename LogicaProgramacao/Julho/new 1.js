var P, Pt, L, T, C, Le, Li, E;
P = prompt('Palavra:').toUpperCase();
E = 0; Le = ''; Li = '';
for (Pt = '', C = 0; C < P.length; C++) {
	Pt += P[C] + ' ';
}
while (E < 6) {
	do {
		L = prompt('Letra:').toUpperCase();
	} while (Le.indexOf(L) != -1 || Li.indexOf(L) != -1);
	for (T = '', C = 0; C < P.length; C++) {
		if (P.indexOf(L) != -1) {
			Le += L;
			if (P[C] != L) {
				T += '_ ';
			} else {
				T += P[C] + ' ';
			} 
		} else {
			alert('A letra ' + L + ' não foi encontrada na palavra!');
			E++;
			Li += L + ' '; 
			break;
		}
	}
	console.log(T);
	if (T == Pt) {
		alert('Parabéns, você ganhou!');
		break;
	}
}