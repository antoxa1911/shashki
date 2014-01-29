var whiteTurn = true; //���� true, �� ��� �����, ����� - ��� ������

var white_shashks=[];//������� ������ ��� ����� �����
var black_shashks=[];//������� ������ ��� ������ �����

var cur_shashka = -1; // ���� -1, �� ����� �� �������. ����� - ����� ����� ���� � white_shashks, ���� � black_shashks

function OnKletkaClick(nStroki, nStolbca) {//������� ������ �� ������
	if (cur_shashka == -1)//���� ����� �� �������
		return;//���������
	if (whiteTurn == true) {//���� ����� ����� �����
		var shashkStyle = getComputedStyle(white_shashks[cur_shashka]);//������� ���������� ��� ���������� �����
		var posX = Math.floor((parseInt(shashkStyle.top)-1)/52);//������� ���������� ������ ����� �� ����������� ������
		var posY = Math.floor((parseInt(shashkStyle.left)-1)/52);//������� ���������� ������ ����� �� ��������� �����
	
		if (((posX == nStroki+1) && (posY == nStolbca-1))||//���� ������� �� ���������� +1 � �� ��������� -1 ���
		   ((posX == nStroki+1) && (posY == nStolbca+1))){//������� �� ����������� +1 � �� ��������� -1
		
		white_shashks[cur_shashka].style.left=(52*nStolbca+1)+'px';//��������� ����� ����� � ������ �������
		white_shashks[cur_shashka].style.top=(52*nStroki+1)+'px';//��������� ����� ����� ������ ����� ������ +1
		white_shashks[cur_shashka].className = 'small';//��� ������ ����� �����
		cur_shashka = -1;//����� �� �������
		whiteTurn = false;//����� ����� �� �����
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
		
	
	}else {//�����
		var shashkStyle = getComputedStyle(black_shashks[cur_shashka]);//������� ���������� ��������� �����
		var posX = Math.floor((parseInt(shashkStyle.top)-1)/52);//������� ��������� ��������� ����� ������ -1
		var posY = Math.floor((parseInt(shashkStyle.left)-1)/52);//������� ���������� ��������� ����� ����� -1
		
		if (((posX == nStroki-1) && (posY == nStolbca+1))||//���� ������� �� ���������� -1 � �� ��������� +1 ���
		   ((posX == nStroki-1) && (posY == nStolbca-1))){//������� �� ���������� -1 � �� ��������� -1
		   
		black_shashks[cur_shashka].style.left=(52*nStolbca+1)+'px';//��������� ������ ����� ����� ����� ������� +1
		black_shashks[cur_shashka].style.top=(52*nStroki+1)+'px';//��������� ������ ����� ����� ������ +1
		black_shashks[cur_shashka].className = 'small';//��� ������ ������ �����
		cur_shashka = -1;//����� �� �������
		whiteTurn = true;//����� ����� �����
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

function OnWhiteClick(n) {//������� ������ �� �����
	if (whiteTurn == false)//���� ����� �� �����
		return;//���������
	else {//�����
		if (cur_shashka != -1)//���� ����� �������
			white_shashks[cur_shashka].className = 'small';//��� ������ ����� �����
		cur_shashka = n;//����� �����
		white_shashks[n].className += ' selected';//� ������ ����� ����� ��������� �����
	}
	
}

function OnBlackClick(n) {//������� ������ �� �����
	if (whiteTurn == true)//���� ����� �����
		return;//�����
	else {//�����
		if (cur_shashka != -1)//���� ����� �������
			black_shashks[cur_shashka].className = 'small';//��� ������ ������ �����
		cur_shashka = n;//����� �����
		black_shashks[n].className += ' selected';//� ������ ������ ����� ��������� �����
	}
}

function InitAll() {//������� ������� ��

	var e2 = document.getElementById('div');//����� ������� ���
	e2.style.position = 'absolute';//��������� � ���� ����������������
	for(var f = 0; f<4; ++f){//������� ���� 
		var str = document.createElement('div');//2*f//������� ������� ���
		str.className = 'stroka';//��������� �����
		e2.appendChild(str);//������� �������� �������
		
		for(var i=0; i<4; ++i){//������� ����
			var e = document.createElement('div');//������� ������� ���
			e.className = 'kletka belaya';//��� ������	
			str.appendChild(e);//������� �������� �������
			
			e.onmousedown = (function (nStroki, nStolbca) {//������ �� ������ ���� ������� ����� ������ ����� �������
				return function () {//��������� �������
					OnKletkaClick(nStroki, nStolbca);//2*i//������� �� ������ ����� ������ ����� �������
				}
			})(2*f, 2*i);
			
			var a = document.createElement('div');//������� ������� ���
			a.className = 'kletka chernaya';//��� ������
			str.appendChild(a);//������� �������� �������
			
			a.onmousedown = (function (nStroki, nStolbca) {//������ �� ������ ���� ������� ����� ������ ����� �������
				return function () {//��������� �������
					OnKletkaClick(nStroki, nStolbca);//2*i+1//������� �� ������ ����� ������ ����� �������
				}
			})(2*f, 2*i+1);
			
		}
		
		var str2 = document.createElement('div');//2*f+1//������� ������� ���
		str2.className = 'stroka';//��� ������
		e2.appendChild(str2);//������� �������� �������
		
		for(var i=0; i<4; ++i){//������� ����
			var a = document.createElement('div');//������� ������� ���
			a.className = 'kletka chernaya';//��� ������	
			str2.appendChild(a);//������� �������� �������
			
			a.onmousedown = (function (nStroki, nStolbca) {//������ �� ������ ���� ������� ����� ������ ����� �������
				return function () {//��������� �������
					OnKletkaClick(nStroki, nStolbca);//������� �� ������ ����� ������ ����� �������
				}
			})(2*f+1, 2*i);
			
			var a = document.createElement('div');//������� ������� ���
			a.className = 'kletka belaya';//��� ������
			str2.appendChild(a);//������� �������� �������
			
			a.onmousedown = (function (nStroki, nStolbca) {//������ �� ������ ���� ������� ����� ������ ����� �������
				return function () {//��������� �������
					OnKletkaClick(nStroki, nStolbca);//������� �� ������ ����� ������ ����� �������
				}
			}) (2*f+1, 2*i+1);//2*i+1
		}
	}
	
	var white_lefts=[//������� ���� ���������� ����� ����� �����
		1, 105, 209, 313, 53, 157, 261, 365, 1, 105, 209, 313//����������
	];
	
	var white_tops=[//������� ���� ���������� ����� ����� ������
		365, 365, 365, 365, 313, 313, 313, 313, 261, 261, 261, 261//����������
	];
	
	for (var i=0; i < white_lefts.length; ++i) {//������� ���� �������� ����� ����� �����
		white_shashks[i] = document.createElement('div');//������� ������� ���
		white_shashks[i].className = 'small';//��� ������
		white_shashks[i].style.left = white_lefts[i];//��������� ����� ����� �����
		white_shashks[i].style.top = white_tops[i];//��������� ����� ����� ������
		var shImg = document.createElement('img');//������� ������� ��������
		shImg.className = 'img';//��� ������
		shImg.src='check2.png';//������������ �������� �� ����������
		white_shashks[i].appendChild(shImg);//������� �������� �������
		e2.appendChild(white_shashks[i]);//������� �������� ������� ����� �����
		white_shashks[i].onmousedown = (function (N) {//������� �� ������ ���� ������� �
			return function (ctx) {//��������� �������
				OnWhiteClick(N);//������ �� ����� �����
			};
		})(i);
	}
	
	var black_lefts=[//������� ���� ���������� ������ ����� �����
		53, 157, 261, 365, 1, 105, 209, 313, 53, 157, 261, 365//����������
	];
	
	var black_tops=[//������� ���� ���������� ������ ����� ������
		1, 1, 1, 1, 53, 53, 53, 53, 105, 105, 105, 105//����������
	];
	
	for (var i=0; i < black_lefts.length; ++i) {//������� ���� �������� ������ ����� �����
		black_shashks[i] = document.createElement('div');//������� ������� ���
		black_shashks[i].className = 'small';//��� ������
		black_shashks[i].style.left = black_lefts[i];//��������� ������ ����� �����
		black_shashks[i].style.top = black_tops[i];//��������� ������ ����� ������
		var shImg = document.createElement('img');//������� ������� ��������
		shImg.className = 'img';//��� ������
		shImg.src='check1.png';//������������ �������� �� ����������
		black_shashks[i].appendChild(shImg);//������� �������� �������
		e2.appendChild(black_shashks[i]);//������� �������� ������� ������ �����
		black_shashks[i].onmousedown = (function (N) {//������� �� ������ ���� ������� �
			return function (ctx) {//��������� �������
				OnBlackClick(N);//������ �� ������ �����
			};
		})(i);
	}
}
window.onload = InitAll;//��� ��������� �������� �������� �������� ������� ��