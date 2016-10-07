/*
	- Si click button alors case noire le plus vers le bas de la colonne se colore)
		- fonction vérifier la couleur noire
		- fonction remonter à la case suivante
	- Système de jeu à 2 joueurs avec currentPlayer = 1 ou 2 
	- Détection 4 case à la suite de la même couleur 
*/

var currentPlayer = 1;
var currentColumn;
var currentRow = 6;
var currentColor;
var blackOrElse;

var black = 'rgb(0, 0, 0)';
var yellow = 'rgb(255, 255, 0)';
var red = 'rgb(255, 0, 0)';
	
	//Fonction qui renvoie un booléen true si noire, false si colorée
function verifyColor(row, column){
	currentColor = $('td[data-row='+row+'][data-column='+column+']').css('background-color');
	console.log('currentColor: ' + currentColor);
	if (currentColor === black) {
		console.log('Test black')
		return blackOrElse = true;
	}
	else {
		return blackOrElse = false;
	}
}

	// Fonction qui remonte d'une case vers le haut
function goUp(row){
	currentRow = row - 1;
}

	// Fonction qui teste la couleur de la case et la remplit par la bonne couleur si nécessaire
function caseColor(row, column){
	if(blackOrElse === true && currentPlayer === 1){
		$('td[data-row='+row+'][data-column='+column+']').css('background-color', red);
		console.log('black donc red');
		currentPlayer = 2;
		currentRow = 6;
	}
	else if(blackOrElse === true && currentPlayer === 2){
		$('td[data-row='+row+'][data-column='+column+']').css('background-color', yellow);
		console.log('black donc jaune')
		currentPlayer = 1;
		currentRow = 6;
	}
	if(blackOrElse === false){
		goUp(currentRow);
		console.log(row);
	}
}

function caseColorV2(row, column){

}


$('button').on('click', function(){
	currentColumn = parseInt($(this).data('column'));
	console.log(currentRow + ', ' + currentColumn);

	verifyColor(currentRow, currentColumn);
	caseColor(currentRow, currentColumn);
	console.log('val currow' + currentRow);
	//debugger
});