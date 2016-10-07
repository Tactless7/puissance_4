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
	if (currentColor === black) {
		return blackOrElse = true;
	}
	else {
		return blackOrElse = false;
	}
}

	// Fonction qui remonte d'une case vers le haut
function goUp(row){
	if(currentRow > 1){
		currentRow = row - 1;	
	}
}

	// Fonction qui teste la couleur en cour et 
function caseColor(column){
	for (var i = 1 ; i <= 6; i++) {
		verifyColor(currentRow, currentColumn);	
		if(blackOrElse === true && currentPlayer === 1){
			console.log(currentRow + ', ' + currentColumn);
			$('td[data-row='+currentRow+'][data-column='+column+']').css('background-color', red);
			currentPlayer = 2;
			break;
		}
		else if(blackOrElse === true && currentPlayer === 2){
			console.log(currentRow + ', ' + currentColumn);
			$('td[data-row='+currentRow+'][data-column='+column+']').css('background-color', yellow);
			currentPlayer = 1;
			break;
		}
		if(blackOrElse === false){
			goUp(currentRow);
			console.log('UP ' + currentRow + ', ' + currentColumn);
		}
	}
	currentRow = 6;
}

	// Montre qui est le joueur en cours.
function colorPlayer(){
	if(currentPlayer === 1){
		$('.player1').css('color', red);
		$('.player1').css('font-size', '22px');
		$('.player1').css('font-weight', 'bold');

		$('.player2').css('color', black);
		$('.player2').css('font-size', '17px');
		$('.player2').css('font-weight', 'normal');
	}
	else if(currentPlayer === 2){
		$('.player2').css('color', yellow);
		$('.player2').css('font-size', '22px');
		$('.player2').css('font-weight', 'bold');

		$('.player1').css('color', black);
		$('.player1').css('font-size', '17px');
		$('.player1').css('font-weight', 'normal');
	}
}


$('button').on('click', function(){
	currentColumn = parseInt($(this).data('column'));
	caseColor(currentColumn);
	colorPlayer();
});
