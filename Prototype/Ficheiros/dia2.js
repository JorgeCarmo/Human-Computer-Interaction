var storedA2 = [];
var num = 0;
var num1 = 0;

function onLoadDia2(){
	if(getCookie("act2")=="[]"){
		setCookie("act2","");
		
	}
	if (getCookie("act2")!=""){
		storedA2 = JSON.parse(getCookie("act2"))
		
		_('semA').style.display = 'none';
		_('semA2').style.display = 'none';
		_("listaAct").style.display = "none";
		_('noneAct').style.display = 'none';
		_("listaAct2").style.display = "initial";
		
		$('.center2').slick({
		centerMode: true,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		centerPadding: '3px'
		});
		
		for (i = 0; i < storedA2.length; i++) {
			if (storedA2[i] == 1){
				$('.center2').slick('slickAdd','<div><img class="img" src="./imagens/Remove.png" onClick = "remover(1)"></img><p style="position:relative;top:0%" >Concerto Muse 20:30 - 00:30</div>');
			}
			if (storedA2[i] == 2){
				$('.center2').slick('slickAdd','<div><img class="img" src="./imagens/Remove.png" onClick = "remover(2)"></img><p style="position:relative;top:0%">Escalada 13:00 - 15:30</div>');
			}
			if (storedA2[i] == 3){
				$('.center2').slick('slickAdd','<div><img class="img" src="./imagens/Remove.png" onClick = "remover(3)"></img><p style="position:relative;top:0%">Facepainting 10:00 - 11:00</div>');
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
	
	for(var i = storedA2.length - 1; i >= 0; i--) {
		if(storedA2[i] === num) {
		   storedA2.splice(i, 1);
		}
	}
	setCookie("act2", JSON.stringify(storedA2),1);
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
		
			if (!(contains(storedA2,1))){
				$('.center').slick('slickAdd','	<div><p style="position:relative;top:10%" onClick="addActividade(1)">Concerto Muse 20:30 - 00:30</div>');
			}
			if (!(contains(storedA2,2))){
				$('.center').slick('slickAdd','	 <div><p style="position:relative;top:10%" onClick="addActividade(2)">Escalada 13:00 - 15:30 </div>');
			}
			if (!(contains(storedA2,3))){
				$('.center').slick('slickAdd','	 <div><p style="position:relative;top:10%" onClick="addActividade(3)">Facepainting 10:00 - 11:00</div>');
			}
}

function addActividade(numero){
		if (getCookie("act2")!=""){
		storedA2 = JSON.parse(getCookie("act2"))
		}
		if(!(contains(storedA2,numero))){
		storedA2[storedA2.length] = numero;
		}
		
				storedA2.sort(function (a, b) {
		return a > b ? 1 : a < b ? -1 : 0;
		});
		
		setCookie("act2", JSON.stringify(storedA2),1);
		
		_("texto_cima").innerHTML = "Dia 2";
		_('noneAct').style.display = 'initial';
		
		location.reload();
}


function contains(a, obj) {
    var i = a.length;
    while (i--) {
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
