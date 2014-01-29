var whiteTurn = true; //если true, то ход белых, иначе - ход черный

var white_shashks=[];//создать массив для белых шашек
var black_shashks=[];//создать массив для черных шашек

var cur_shashka = -1; // если -1, то шашка не выбрана. иначе - номер шашки либо в white_shashks, либо в black_shashks

function OnKletkaClick(nStroki, nStolbca) {//функция нажать на клетку
	if (cur_shashka == -1)//если шашка не выбрана
		return;//повторить
	if (whiteTurn == true) {//если ходят белые шашки
		var shashkStyle = getComputedStyle(white_shashks[cur_shashka]);//создать переменную для параметров шашек
		var posX = Math.floor((parseInt(shashkStyle.top)-1)/52);//создать переменную отступ шашек по горизонтали сверху
		var posY = Math.floor((parseInt(shashkStyle.left)-1)/52);//создать переменную отступ шашек по вертикали слева
	
		if (((posX == nStroki+1) && (posY == nStolbca-1))||//если позиция по горизонтал +1 и по вертикали -1 или
		   ((posX == nStroki+1) && (posY == nStolbca+1))){//позиция по горизонтали +1 и по вертикали -1
		
		white_shashks[cur_shashka].style.left=(52*nStolbca+1)+'px';//переносим шашку влева в нужный столбец
		white_shashks[cur_shashka].style.top=(52*nStroki+1)+'px';//параметры белых шашек сверху номер строки +1
		white_shashks[cur_shashka].className = 'small';//имя класса белых шашек
		cur_shashka = -1;//шашка не выбрана
		whiteTurn = false;//былые шашки не ходят
		return;
		}
		
		if ( (posX == nStroki+2)&&(posY == nStolbca+2) ) {
			for (var i=0; i < black_shashks.length; ++i) {
				var blackShashksStyle = getComputedStyle(black_shashks[i]);
				var blackShashksStroka = Math.floor((parseInt(blackShashksStyle.top)-1)/52);
				var blackShashksStolbec = Math.floor((parseInt(blackShashksStyle.left)-1)/52);
				if ((blackShashksStroka == nStroki + 1)&&(blackShashksStolbec == nStolbca+1)) {
					black_shashks[i].style.display = 'none';
					
					black_shashks[i].style.left = '10000px';
					white_shashks[cur_shashka].style.top = (52*nStroki+1)+'px';
					white_shashks[cur_shashka].style.left = (52*nStolbca+1)+'px';
					white_shashks[cur_shashka].className = 'small';
					
					var wins = true;
					
					for (var i=0; i < black_shashks.length; ++i) {
						if (black_shashks[i].style.display != 'none')
							wins = false;
							}
					if (wins == true) { 
						alert ('white win!!!');
						var white_lefts=[
							1, 105, 209, 313, 53, 157, 261, 365, 1, 105, 209, 313
						];
						
						var white_tops=[
							365, 365, 365, 365, 313, 313, 313, 313, 261, 261, 261, 261
						];
						
						
						for (var i=0; i < white_lefts.length; ++i) {		
							white_shashks[i].style.left = white_lefts[i];
							white_shashks[i].style.top = white_tops[i];	
							white_shashks[i].style.display = 'block';
						}
						
						var black_lefts=[
							53, 157, 261, 365, 1, 105, 209, 313, 53, 157, 261, 365
						];
	
						var black_tops=[
							1, 1, 1, 1, 53, 53, 53, 53, 105, 105, 105, 105
						];
	
						for (var i=0; i < black_lefts.length; ++i) {
							black_shashks[i].style.left = black_lefts[i];
							black_shashks[i].style.top = black_tops[i];
							black_shashks[i].style.display = 'block';
						};
						
					}
					
					cur_shashka = -1;
					whiteTurn = false;
					return;
				}
			}
		}
		
		
		if ( (posX == nStroki-2)&&(posY == nStolbca-2) ) {
			for (var i=0; i < black_shashks.length; ++i) {
				var blackShashksStyle = getComputedStyle(black_shashks[i]);
				var blackShashksStroka = Math.floor((parseInt(blackShashksStyle.top)-1)/52);
				var blackShashksStolbec = Math.floor((parseInt(blackShashksStyle.left)-1)/52);
				if ((blackShashksStroka == nStroki - 1)&&(blackShashksStolbec == nStolbca-1)) {
					black_shashks[i].style.display = 'none';
					
					black_shashks[i].style.left = '10000px';
					white_shashks[cur_shashka].style.top = (52*nStroki+1)+'px';
					white_shashks[cur_shashka].style.left = (52*nStolbca+1)+'px';
					white_shashks[cur_shashka].className = 'small';
					
					var wins = true;
					
					for (var i=0; i < black_shashks.length; ++i) {
						if (black_shashks[i].style.display != 'none')
							wins = false;
							}
					if (wins == true) { 
						alert ('white win!!!');
						var white_lefts=[
							1, 105, 209, 313, 53, 157, 261, 365, 1, 105, 209, 313
						];
						
						var white_tops=[
							365, 365, 365, 365, 313, 313, 313, 313, 261, 261, 261, 261
						];
						
						
						for (var i=0; i < white_lefts.length; ++i) {		
							white_shashks[i].style.left = white_lefts[i];
							white_shashks[i].style.top = white_tops[i];	
							white_shashks[i].style.display = 'block';
						}
						
						var black_lefts=[
							53, 157, 261, 365, 1, 105, 209, 313, 53, 157, 261, 365
						];
	
						var black_tops=[
							1, 1, 1, 1, 53, 53, 53, 53, 105, 105, 105, 105
						];
	
						for (var i=0; i < black_lefts.length; ++i) {
							black_shashks[i].style.left = black_lefts[i];
							black_shashks[i].style.top = black_tops[i];
							black_shashks[i].style.display = 'block';
						};
						
					}
					
					cur_shashka = -1;
					whiteTurn = false;
					return;
				}
			}
		}
		
			if ( (posX == nStroki+2)&&(posY == nStolbca-2) ) {
			for (var i=0; i < black_shashks.length; ++i) {
				var blackShashksStyle = getComputedStyle(black_shashks[i]);
				var blackShashksStroka = Math.floor((parseInt(blackShashksStyle.top)-1)/52);
				var blackShashksStolbec = Math.floor((parseInt(blackShashksStyle.left)-1)/52);
				if ((blackShashksStroka == nStroki + 1)&&(blackShashksStolbec == nStolbca-1)) {
					black_shashks[i].style.display = 'none';
					
					black_shashks[i].style.left = '10000px';
					white_shashks[cur_shashka].style.top = (52*nStroki+1)+'px';
					white_shashks[cur_shashka].style.left = (52*nStolbca+1)+'px';
					white_shashks[cur_shashka].className = 'small';
					cur_shashka = -1;
					
					var wins = true;
					
					for (var i=0; i < black_shashks.length; ++i) {
						if (black_shashks[i].style.display != 'none')
							wins = false;
							}
					if (wins == true) { 
						alert ('white win!!!');
						var white_lefts=[
							1, 105, 209, 313, 53, 157, 261, 365, 1, 105, 209, 313
						];
						
						var white_tops=[
							365, 365, 365, 365, 313, 313, 313, 313, 261, 261, 261, 261
						];
						
						
						for (var i=0; i < white_lefts.length; ++i) {		
							white_shashks[i].style.left = white_lefts[i];
							white_shashks[i].style.top = white_tops[i];	
							white_shashks[i].style.display = 'block';
						}
						
						var black_lefts=[
							53, 157, 261, 365, 1, 105, 209, 313, 53, 157, 261, 365
						];
	
						var black_tops=[
							1, 1, 1, 1, 53, 53, 53, 53, 105, 105, 105, 105
						];
	
						for (var i=0; i < black_lefts.length; ++i) {
							black_shashks[i].style.left = black_lefts[i];
							black_shashks[i].style.top = black_tops[i];
							black_shashks[i].style.display = 'block';
						};
						
					}
					
					cur_shashka = -1;
					whiteTurn = false;
					return;
				}
			}
		}
		
			if ( (posX == nStroki-2)&&(posY == nStolbca+2) ) {
			for (var i=0; i < black_shashks.length; ++i) {
				var blackShashksStyle = getComputedStyle(black_shashks[i]);
				var blackShashksStroka = Math.floor((parseInt(blackShashksStyle.top)-1)/52);
				var blackShashksStolbec = Math.floor((parseInt(blackShashksStyle.left)-1)/52);
				if ((blackShashksStroka == nStroki - 1)&&(blackShashksStolbec == nStolbca+1)) {
					black_shashks[i].style.display = 'none';
					
					black_shashks[i].style.left = '10000px';
					white_shashks[cur_shashka].style.top = (52*nStroki+1)+'px';
					white_shashks[cur_shashka].style.left = (52*nStolbca+1)+'px';
					white_shashks[cur_shashka].className = 'small';
					cur_shashka = -1;
					
					var wins = true;
					
					for (var i=0; i < black_shashks.length; ++i) {
						if (black_shashks[i].style.display != 'none')
							wins = false;
							}
					if (wins == true) { 
						alert ('white win!!!')
						var white_lefts=[
							1, 105, 209, 313, 53, 157, 261, 365, 1, 105, 209, 313
						];
						
						var white_tops=[
							365, 365, 365, 365, 313, 313, 313, 313, 261, 261, 261, 261
						];
						
						
						for (var i=0; i < white_lefts.length; ++i) {		
							white_shashks[i].style.left = white_lefts[i];
							white_shashks[i].style.top = white_tops[i];	
							white_shashks[i].style.display = 'block';
						}
						
						var black_lefts=[
							53, 157, 261, 365, 1, 105, 209, 313, 53, 157, 261, 365
						];
	
						var black_tops=[
							1, 1, 1, 1, 53, 53, 53, 53, 105, 105, 105, 105
						];
	
						for (var i=0; i < black_lefts.length; ++i) {
							black_shashks[i].style.left = black_lefts[i];
							black_shashks[i].style.top = black_tops[i];
							black_shashks[i].style.display = 'block';
						};
						
					}
					
					cur_shashka = -1;
					whiteTurn = false;
					return;
				}
			}
		}
		
	
	}else {//иначе
		var shashkStyle = getComputedStyle(black_shashks[cur_shashka]);//создать переменную параметры шашек
		var posX = Math.floor((parseInt(shashkStyle.top)-1)/52);//создать перемнную параметры шашек сверху -1
		var posY = Math.floor((parseInt(shashkStyle.left)-1)/52);//создать переменную параметры шашек слева -1
		
		if (((posX == nStroki-1) && (posY == nStolbca+1))||//если позиция по горизонтал -1 и по вертикали +1 или
		   ((posX == nStroki-1) && (posY == nStolbca-1))){//позиция по горизонтал -1 и по вертикали -1
		   
		black_shashks[cur_shashka].style.left=(52*nStolbca+1)+'px';//параметры черных шашек слева номер столбца +1
		black_shashks[cur_shashka].style.top=(52*nStroki+1)+'px';//параметры черных шашек номер строки +1
		black_shashks[cur_shashka].className = 'small';//имя класса черных шашек
		cur_shashka = -1;//шашка не выбрана
		whiteTurn = true;//белые шашки ходят
		return;
		}
		 
		if ( (posX == nStroki+2)&&(posY == nStolbca+2) ) {
			for (var i=0; i < white_shashks.length; ++i) {
				var whiteShashksStyle = getComputedStyle(white_shashks[i]);
				var whiteShashksStroka = Math.floor((parseInt(whiteShashksStyle.top)-1)/52);
				var whiteShashksStolbec = Math.floor((parseInt(whiteShashksStyle.left)-1)/52);
				if ((whiteShashksStroka == nStroki + 1)&&(whiteShashksStolbec == nStolbca+1)) {
					white_shashks[i].style.display = 'none';
					
					white_shashks[i].style.left = '10000px';
					black_shashks[cur_shashka].style.top = (52*nStroki+1)+'px';
					black_shashks[cur_shashka].style.left = (52*nStolbca+1)+'px';
					black_shashks[cur_shashka].className = 'small';
					cur_shashka = -1;
					
					var wins = true;
					
					for (var i=0; i < white_shashks.length; ++i) {
						if (white_shashks[i].style.display != 'none')
							wins = false;
							}
					if (wins == true) { 
						alert ('black win!!!');
						var white_lefts=[
							1, 105, 209, 313, 53, 157, 261, 365, 1, 105, 209, 313
						];
						
						var white_tops=[
							365, 365, 365, 365, 313, 313, 313, 313, 261, 261, 261, 261
						];
						
						
						for (var i=0; i < white_lefts.length; ++i) {		
							white_shashks[i].style.left = white_lefts[i];
							white_shashks[i].style.top = white_tops[i];	
							white_shashks[i].style.display = 'block';
						}
						
						var black_lefts=[
							53, 157, 261, 365, 1, 105, 209, 313, 53, 157, 261, 365
						];
	
						var black_tops=[
							1, 1, 1, 1, 53, 53, 53, 53, 105, 105, 105, 105
						];
	
						for (var i=0; i < black_lefts.length; ++i) {
							black_shashks[i].style.left = black_lefts[i];
							black_shashks[i].style.top = black_tops[i];
							black_shashks[i].style.display = 'block';
						};
						
					}
					
					cur_shashka = -1;
					whiteTurn = true;
					return;
				}
			}
		}
		
			if ( (posX == nStroki-2)&&(posY == nStolbca-2) ) {
			for (var i=0; i < white_shashks.length; ++i) {
				var whiteShashksStyle = getComputedStyle(white_shashks[i]);
				var whiteShashksStroka = Math.floor((parseInt(whiteShashksStyle.top)-1)/52);
				var whiteShashksStolbec = Math.floor((parseInt(whiteShashksStyle.left)-1)/52);
				if ((whiteShashksStroka == nStroki - 1)&&(whiteShashksStolbec == nStolbca-1)) {
					white_shashks[i].style.display = 'none';
					
					white_shashks[i].style.left = '10000px';
					black_shashks[cur_shashka].style.top = (52*nStroki+1)+'px';
					black_shashks[cur_shashka].style.left = (52*nStolbca+1)+'px';
					black_shashks[cur_shashka].className = 'small';
					cur_shashka = -1;

					var wins = true;
					
					for (var i=0; i < white_shashks.length; ++i) {
						if (white_shashks[i].style.display != 'none')
							wins = false;
							}
					if (wins == true) { 
						alert ('black win!!!')
						var white_lefts=[
							1, 105, 209, 313, 53, 157, 261, 365, 1, 105, 209, 313
						];
						
						var white_tops=[
							365, 365, 365, 365, 313, 313, 313, 313, 261, 261, 261, 261
						];
						
						
						for (var i=0; i < white_lefts.length; ++i) {		
							white_shashks[i].style.left = white_lefts[i];
							white_shashks[i].style.top = white_tops[i];	
							white_shashks[i].style.display = 'block';
						}
						
						var black_lefts=[
							53, 157, 261, 365, 1, 105, 209, 313, 53, 157, 261, 365
						];
	
						var black_tops=[
							1, 1, 1, 1, 53, 53, 53, 53, 105, 105, 105, 105
						];
	
						for (var i=0; i < black_lefts.length; ++i) {
							black_shashks[i].style.left = black_lefts[i];
							black_shashks[i].style.top = black_tops[i];
							black_shashks[i].style.display = 'block';
						};
						
					}
					
					cur_shashka = -1;
					whiteTurn = true;
					return;
				}
			}
		}
		
			if ( (posX == nStroki+2)&&(posY == nStolbca-2) ) {
			for (var i=0; i < white_shashks.length; ++i) {
				var whiteShashksStyle = getComputedStyle(white_shashks[i]);
				var whiteShashksStroka = Math.floor((parseInt(whiteShashksStyle.top)-1)/52);
				var whiteShashksStolbec = Math.floor((parseInt(whiteShashksStyle.left)-1)/52);
				if ((whiteShashksStroka == nStroki + 1)&&(whiteShashksStolbec == nStolbca-1)) {
					white_shashks[i].style.display = 'none';
					
					white_shashks[i].style.left = '10000px';
					black_shashks[cur_shashka].style.top = (52*nStroki+1)+'px';
					black_shashks[cur_shashka].style.left = (52*nStolbca+1)+'px';
					black_shashks[cur_shashka].className = 'small';
					cur_shashka = -1;
					
					var wins = true;
					
					for (var i=0; i < white_shashks.length; ++i) {
						if (white_shashks[i].style.display != 'none')
							wins = false;
							}
					if (wins == true) { 
						alert ('black win!!!')
						var white_lefts=[
							1, 105, 209, 313, 53, 157, 261, 365, 1, 105, 209, 313
						];
						
						var white_tops=[
							365, 365, 365, 365, 313, 313, 313, 313, 261, 261, 261, 261
						];
						
						
						for (var i=0; i < white_lefts.length; ++i) {		
							white_shashks[i].style.left = white_lefts[i];
							white_shashks[i].style.top = white_tops[i];	
							white_shashks[i].style.display = 'block';
						}
						
						var black_lefts=[
							53, 157, 261, 365, 1, 105, 209, 313, 53, 157, 261, 365
						];
	
						var black_tops=[
							1, 1, 1, 1, 53, 53, 53, 53, 105, 105, 105, 105
						];
	
						for (var i=0; i < black_lefts.length; ++i) {
							black_shashks[i].style.left = black_lefts[i];
							black_shashks[i].style.top = black_tops[i];
							black_shashks[i].style.display = 'block';
						};
						
					}
					
					cur_shashka = -1;
					whiteTurn = true;
					return;
				}
			}
		}
		
			if ( (posX == nStroki-2)&&(posY == nStolbca+2) ) {
			for (var i=0; i < white_shashks.length; ++i) {
				var whiteShashksStyle = getComputedStyle(white_shashks[i]);
				var whiteShashksStroka = Math.floor((parseInt(whiteShashksStyle.top)-1)/52);
				var whiteShashksStolbec = Math.floor((parseInt(whiteShashksStyle.left)-1)/52);
				if ((whiteShashksStroka == nStroki - 1)&&(whiteShashksStolbec == nStolbca+1)) {
					white_shashks[i].style.display = 'none';
					
					white_shashks[i].style.left = '10000px';
					black_shashks[cur_shashka].style.top = (52*nStroki+1)+'px';
					black_shashks[cur_shashka].style.left = (52*nStolbca+1)+'px';
					black_shashks[cur_shashka].className = 'small';
					cur_shashka = -1;
					
					var wins = true;
					
					for (var i=0; i < white_shashks.length; ++i) {
						if (white_shashks[i].style.display != 'none')
							wins = false;
							}
					if (wins == true) { 
						alert ('black win!!!')
						var white_lefts=[
							1, 105, 209, 313, 53, 157, 261, 365, 1, 105, 209, 313
						];
						
						var white_tops=[
							365, 365, 365, 365, 313, 313, 313, 313, 261, 261, 261, 261
						];
						
						
						for (var i=0; i < white_lefts.length; ++i) {		
							white_shashks[i].style.left = white_lefts[i];
							white_shashks[i].style.top = white_tops[i];	
							white_shashks[i].style.display = 'block';
						}
						
						var black_lefts=[
							53, 157, 261, 365, 1, 105, 209, 313, 53, 157, 261, 365
						];
	
						var black_tops=[
							1, 1, 1, 1, 53, 53, 53, 53, 105, 105, 105, 105
						];
	
						for (var i=0; i < black_lefts.length; ++i) {
							black_shashks[i].style.left = black_lefts[i];
							black_shashks[i].style.top = black_tops[i];
							black_shashks[i].style.display = 'block';
						};
						
					}
					
					cur_shashka = -1;
					whiteTurn = true;
					return;
				}
			}
		}
		
}
}

function OnWhiteClick(n) {//функция нажать на белую
	if (whiteTurn == false)//если белые не ходят
		return;//повторить
	else {//иначе
		if (cur_shashka != -1)//если шашка выбрана
			white_shashks[cur_shashka].className = 'small';//имя класса белых шашек
		cur_shashka = n;//номер шашки
		white_shashks[n].className += ' selected';//к классу белых шашек прибавить класс
	}
	
}

function OnBlackClick(n) {//функция нажать на белую
	if (whiteTurn == true)//если белые ходят
		return;//иначе
	else {//иначе
		if (cur_shashka != -1)//если шашка выбрана
			black_shashks[cur_shashka].className = 'small';//имя класса черных шашек
		cur_shashka = n;//номер шашки
		black_shashks[n].className += ' selected';//к классу черных шашек прибавить класс
	}
}

function InitAll() {//функция вывести всё

	var e2 = document.getElementById('div');//найти элемент див
	e2.style.position = 'absolute';//присвоить к диву позиционирование
	for(var f = 0; f<4; ++f){//создать цикл 
		var str = document.createElement('div');//2*f//создать элемент див
		str.className = 'stroka';//присвоить класс
		e2.appendChild(str);//открыть дочерний элемент
		
		for(var i=0; i<4; ++i){//создать цикл
			var e = document.createElement('div');//создать элемент див
			e.className = 'kletka belaya';//имя класса	
			str.appendChild(e);//открыть дочерний элемент
			
			e.onmousedown = (function (nStroki, nStolbca) {//нажать на кнопку мыши функция номер строки номер столбца
				return function () {//повторить функцию
					OnKletkaClick(nStroki, nStolbca);//2*i//нажатие на клетку номер строки номер столбца
				}
			})(2*f, 2*i);
			
			var a = document.createElement('div');//создать элемент див
			a.className = 'kletka chernaya';//имя класса
			str.appendChild(a);//открыть дочерний элемент
			
			a.onmousedown = (function (nStroki, nStolbca) {//нажать на кнопку мыши функция номер строки номер столбца
				return function () {//повторить функцию
					OnKletkaClick(nStroki, nStolbca);//2*i+1//нажатие на клетку номер строки номер столбца
				}
			})(2*f, 2*i+1);
			
		}
		
		var str2 = document.createElement('div');//2*f+1//создать элемент див
		str2.className = 'stroka';//имя класса
		e2.appendChild(str2);//открыть дочерний элемент
		
		for(var i=0; i<4; ++i){//создать цикл
			var a = document.createElement('div');//создать элемент див
			a.className = 'kletka chernaya';//имя класса	
			str2.appendChild(a);//открыть дочерний элемент
			
			a.onmousedown = (function (nStroki, nStolbca) {//нажать на кнопку мыши функция номер строки номер столбца
				return function () {//повторить функцию
					OnKletkaClick(nStroki, nStolbca);//нажатие на клетку номер строки номер столбца
				}
			})(2*f+1, 2*i);
			
			var a = document.createElement('div');//создать элемент див
			a.className = 'kletka belaya';//имя класса
			str2.appendChild(a);//открыть дочерний элемент
			
			a.onmousedown = (function (nStroki, nStolbca) {//нажать на кнопку мыши функция номер строки номер столбца
				return function () {//повторить функцию
					OnKletkaClick(nStroki, nStolbca);//нажатие на клетку номер строки номер столбца
				}
			}) (2*f+1, 2*i+1);//2*i+1
		}
	}
	
	var white_lefts=[//создать цикл координаты белых шашек слева
		1, 105, 209, 313, 53, 157, 261, 365, 1, 105, 209, 313//координаты
	];
	
	var white_tops=[//создать цикл координаты белых шашек сверху
		365, 365, 365, 365, 313, 313, 313, 313, 261, 261, 261, 261//координаты
	];
	
	for (var i=0; i < white_lefts.length; ++i) {//создать цикл создания белых шашек длина
		white_shashks[i] = document.createElement('div');//создать элемент див
		white_shashks[i].className = 'small';//имя класса
		white_shashks[i].style.left = white_lefts[i];//параметры белых шашек слева
		white_shashks[i].style.top = white_tops[i];//параметры белых шашек сверху
		var shImg = document.createElement('img');//создать элемент картинка
		shImg.className = 'img';//имя класса
		shImg.src='check2.png';//расположение картинки на компьютере
		white_shashks[i].appendChild(shImg);//открыть дочерний элемент
		e2.appendChild(white_shashks[i]);//открыть дочерний элемент белых шашек
		white_shashks[i].onmousedown = (function (N) {//нажатие на кнопку мыши функция Н
			return function (ctx) {//повторить функцию
				OnWhiteClick(N);//нажать на белую номер
			};
		})(i);
	}
	
	var black_lefts=[//создать цикл координаты черных шашек слева
		53, 157, 261, 365, 1, 105, 209, 313, 53, 157, 261, 365//координаты
	];
	
	var black_tops=[//создать цикл координаты черных шашек сверху
		1, 1, 1, 1, 53, 53, 53, 53, 105, 105, 105, 105//координаты
	];
	
	for (var i=0; i < black_lefts.length; ++i) {//создать цикл создания черных шашек длина
		black_shashks[i] = document.createElement('div');//создать элемент див
		black_shashks[i].className = 'small';//имя класса
		black_shashks[i].style.left = black_lefts[i];//параметры черных шашек слева
		black_shashks[i].style.top = black_tops[i];//параметры черных шашек сверху
		var shImg = document.createElement('img');//создать элемент картинка
		shImg.className = 'img';//имя класса
		shImg.src='check1.png';//расположение картинки на компьютере
		black_shashks[i].appendChild(shImg);//открыть дочерний элемент
		e2.appendChild(black_shashks[i]);//открыть дочерний элемент черных шашек
		black_shashks[i].onmousedown = (function (N) {//нажатие на кнопку мыши функция Н
			return function (ctx) {//повторить функцию
				OnBlackClick(N);//нажать на черную номер
			};
		})(i);
	}
}
window.onload = InitAll;//при окончании загрузки интернет страницы вывести всё