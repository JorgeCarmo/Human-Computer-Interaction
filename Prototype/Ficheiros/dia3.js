var storedA3 = [];
var num = 0;
var num1 = 0;

function onLoadDia3(){
	if(getCookie("act3")=="[]"){
		setCookie("act3","");
		
	}
	if (getCookie("act3")!=""){
		storedA3 = JSON.parse(getCookie("act3"))
		
		_('semA').style.display = 'none';
		_('semA2').style.display = 'none';
		_("listaAct").style.display = "none";
		_('noneAct').style.display = 'none';
		_("listaAct2").style.display = "initial";
		
		$('.center2').slick({
		centerMode: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		centerPadding: '3px'
		});
		for (i = 0; i <= storedA3.length; i++) {
			if (storedA3[i] == 1){
				$('.center2').slick('slickAdd','<div><img class="img" src="./imagens/Remove.png" onClick = "remover(1)"></img><p style="position:relative;top:0%" >Concurso de Hula Hoop 11:00 - 12:30</div>');
			}
			if (storedA3[i] == 2){
				$('.center2').slick('slickAdd','<div><img class="img" src="./imagens/Remove.png" onClick = "remover(2)"></img><p style="position:relative;top:0%" >Torneio de Matraquilhos 18:30 - 20:30</div>');
			}
			if (storedA3[i] == 3){
				$('.center2').slick('slickAdd','<div><img class="img" src="./imagens/Remove.png" onClick = "remover(3)"></img><p style="position:relative;top:0%" >Concurso de Limbo 13:00 - 15:00</div>');
			}
		}
		
	}
}

function remover(num1){
	_('SimBut').onclick = function(){ removerS(num1); } ;
	_("listaAct2").style.display = "none";
	_("remove").style.display = "initial";
	_("texto_cima").style.display = "none";
	
	_("rem").innerHTML = "Remover Actividade ";
	
	
}
	
function removerS(num){
	
	for(var i = storedA3.length - 1; i >= 0; i--) {
		if(storedA3[i] === num) {
		   storedA3.splice(i, 1);
		}
	}
	setCookie("act3", JSON.stringify(storedA3),1);
	location.reload();
	
}	

function removerN(num){
	
	location.reload();
	
}	

function escolherAct(){
		_("texto_cima").innerHTML = "Escolher Act.";
		_('noneAct').style.display = 'none';
		_("listaAct").style.display = "initial";
		_("back_button").onClick = "";
		
		$('.center').slick({
		centerMode: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		centerPadding: '3px',
		});
		
		if (!(storedA3.contains(1))){
				$('.center').slick('slickAdd','	<div><p style="position:relative;top:10%" onClick="addActividade(1)">Concurso de Hula Hoop 11:00 - 12:30</div>');
			}
		if (!(storedA3.contains(2))){
				$('.center').slick('slickAdd','	<div><p style="position:relative;top:10%" onClick="addActividade(2)">Torneio de Matraquilhos 18:30 : 20:30</div>');
			}	
		if (!(storedA3.contains(3))){
				$('.center').slick('slickAdd','	 <div><p style="position:relative;top:10%" onClick="addActividade(3)">Concurso de Limbo 13:00 - 15:00</div>');
			}
}


function addActividade(numero){
		if (getCookie("act3")!=""){
		storedA3 = JSON.parse(getCookie("act3"))
		}
		if(!(contains(storedA3,numero))){
		storedA3[storedA3.length] = numero;
		}
		
				storedA3.sort(function (a, b) {
		return a > b ? 1 : a < b ? -1 : 0;
		});
		
		setCookie("act3", JSON.stringify(storedA3),1);
		
		_("texto_cima").innerHTML = "Dia 3";
		_('noneAct').style.display = 'initial';
		
		location.reload();
}

Array.prototype.contains = function (v) {
    return this.indexOf(v) > -1;
}



function contains(a, obj) {
    for (i=0; i<=a.length; i++) {
       if (a[i] === obj) {
           return true;
       }
    }
    return false;
}


function goUp(){
	setCookie('actual', 0, 1);
	
	document.location='agenda.html';	
}
