var num = 0;
var num1 = 0;
var dia = 0;
var sim = 0;

storedA = [[],[],[]];
var actividades = [["Rappel","Escalada", "Futebol", "Yoga", "Luta de balões de água", "Concurso de tartes", "Dodgeball", "The Rolling Stones", "Linkin Park", "Ed Sheeran"],["Rappel","Escalada", "Futebol", "Yoga", "Luta de balões de água", "Concurso de tartes", "Dodgeball", "Justin Timberlake", "Jessie J", "Arcade Fire"],["Rappel","Escalada", "Futebol", "Yoga", "Luta de balões de água", "Concurso de tartes", "Dodgeball", "30 Seconds to Mars", "Metallica", "Avenged Sevenfold"]];
var Horas = [["10h00-11h00", "11h00-12h00","12h00-13h00","13h00-14h00","14h00-15h00","15h00-16h00","16h00-17h00","17h00-18h00", "18h00-19h00", "19h00-20h00", "20h00-21h00"],["10h00-11h00", "11h00-12h00","12h00-13h00","13h00-14h00","14h00-15h00","15h00-16h00","16h00-17h00","17h00-18h00", "18h00-19h00", "19h00-20h00", "20h00-21h00"],["10h00-11h00", "11h00-12h00","12h00-13h00","13h00-14h00","14h00-15h00","15h00-16h00","16h00-17h00","17h00-18h00", "18h00-19h00", "19h00-20h00", "20h00-21h00"]];
var imgs = [["rappel.png", "escalada.png", "soccer.png", "yoga.png", "balao.png" , "pie.png", "dodge.png", "rls.jpg", "lp.png", "ed.jpg"],["rappel.png", "escalada.png", "soccer.png", "yoga.png", "balao.png" , "pie.png", "dodge.png", "jt.jpg", "jj.jpg", "af.jpg"],["rappel.png", "escalada.png", "soccer.png", "yoga.png", "balao.png" , "pie.png", "dodge.png", "30.jpg", "me.jpg", "A7x.jpg"]]
function onLoadDia(){
	var owl = $('.owl-carousel');
	owl.owlCarousel();
	dia = (parseInt(getCookie("diaCorrecto")) - 15);
	var storedA = JSON.parse(getCookie("actAdicionadas"));
	if (storedA == ""){
		storedA= [[],[],[]];
	};
	_("texto_cima").innerHTML = "Dia " + dia;
	if (storedA[dia-1]!=""){
		_('semA').style.display = 'none';
		_('semA2').style.display = 'none';
		$('.owl-carousel')
        owl.trigger('add', ['<div><p onmousedown="foi_abaixo(event)" onmouseup="foi_acima(event)" onclick= "escolherAct();"style="position:relative;top:0%" >Adicionar Actividade<p></div>',0]);
		for (i=0; i < storedA[dia-1].length; i++){
			$('.owl-carousel')
			owl.trigger('add', ['<div><img class="img" id="rem_img" src="./imagens/Remove.png" onClick = "remover(' + storedA[dia-1][i] + ')"></img><img id="act_img" style="height:60%;zIndex:-99;" src="' + "./imagens/Agenda/" + imgs[dia-1][storedA[dia-1][i]] +'"</img><p id="h2" >'+ Horas[dia-1][storedA[dia-1][i]] + '</p></div>',i+1]);
		}
		
	}
	owl.trigger('refresh');
}


function remover(num1){
    _('moving_ecra').className='goingDown';
		
    setTimeout(function(){
        sim=1;
        var owl = $('.owl-carousel');
        owl.owlCarousel();
        _('botao1').onclick = function(){ removerS(num1); } ;
        _("remove").style.display = "initial";
        _("remove").style.zIndex = 99;
        _("texto_cima").style.display = "none";
        for (i=0; i<actividades[dia-1].length; i++){
                $('.owl-carousel')
                owl.trigger('remove', 0)
        }
        _("rem").style.zIndex = 99;
        _("rem_img2").src = "./imagens/Agenda/" + imgs[dia-1][num1];
        _("rem").innerHTML = "Remover " + actividades[dia-1][num1] + "?";	
        _('moving_ecra').className='gettingDown';
    },300)
}
	
function removerS(num){

        storedA = JSON.parse(getCookie("actAdicionadas"));
        for(var i = storedA[dia-1].length - 1; i >= 0; i--) {
            if(storedA[dia-1][i] === num) {
               storedA[dia-1].splice(i, 1);
            }
        }

        setCookie("actAdicionadas", JSON.stringify(storedA),1);
        setCookie('actual',0,1);
        faz_subir('dia1.html');
        
	
}	

function removerN(num){
	
	faz_subir('dia1.html');
	
}	

function escolherAct(){
    if (!foi_swipe) 
    {		
        sim = 1;
			_('semA').style.display = 'none';
		_('semA2').style.display = 'none';
		_("texto_cima").innerHTML = "Escolher Act.";

		_("back_button").onClick = "";

		var owl = $('.owl-carousel');
		owl.owlCarousel();
		var storedA = JSON.parse(getCookie("actAdicionadas"));
		dia = (parseInt(getCookie("diaCorrecto")) - 15);
    
		 _('moving_ecra').className='goingDown';
        setTimeout(function(){
            if (storedA[dia-1].length == actividades[dia-1].length){
                owl.trigger('remove');
				_('semA').style.left = "3%";
                _('semA').style.display = 'initial';
                _('semA2').style.display = 'initial';
                _('semA').innerHTML = 'Sem Actividades por adicionar';
                _('semA2').innerHTML = '';


            } else {
                if (((storedA[dia-1].length - actividades[dia-1].length)) == -1){
                    i=0;
                    while (contains(storedA[dia-1], i)){
                        i++;
                    }
                    owl.trigger('remove');
                    _("texto_cima2").style.visibility = "hidden";
                    _("img_central").style.visibility = "hidden";
                    _("button_1").style.visibility = "hidden";


                    _("texto_cima3").style.visibility = "initial";
                    _("img_central2").style.visibility = "initial";
                    _("texto_baixo2").style.visibility = "initial";

                    _("img_central2").src = "./imagens/Agenda/" + imgs[dia-1][i];
                    _('texto_cima3').innerHTML = actividades[dia-1][i];
                    _("texto_baixo2").innerHTML = Horas[dia-1][i];
                    _("img_central2").onclick = function(){ addActividade(i); } ;

                } else {
                i=0;
                while (contains(storedA[dia-1], i)){
                    i++;
                }
                $('.owl-carousel')
                        owl.trigger('replace', ['<div><img id="actimg" onmousedown="foi_abaixo(event)" onmouseup="foi_acima(event)" onClick="addActividade(' + i + ')" src="' + "./imagens/Agenda/" + imgs[dia-1][i] +'"</img><p id="h">'+ Horas[dia-1][i] + '</p></div>',i-1]);
                i++
                w = i;
                for (i; i < actividades[dia-1].length; i++){
                    if (!(contains(storedA[dia-1], i))){
                        $('.owl-carousel')
                        owl.trigger('add', ['<div><img id="actimg" onmousedown="foi_abaixo(event)" onmouseup="foi_acima(event)" onClick="addActividade(' + i + ')" src="' + "./imagens/Agenda/" + imgs[dia-1][i] +'"</img><p id="h">'+ Horas[dia-1][i] + '</p></div>',w-1]);
                    w++;
                    }
                }
                owl.trigger('refresh');

                }
            }
            _('moving_ecra').className='gettingDown';
        },300)
    }
}

function addActividade(numero){
    if (!foi_swipe) 
    {	
        var owl = $('.owl-carousel');
		owl.owlCarousel();
		var storedA = JSON.parse(getCookie("actAdicionadas"));
		if(!(contains(storedA[dia-1],numero))){
			storedA[dia-1][(storedA[dia-1].length)] = numero;
		}
		storedA[dia-1].sort(function (a, b) {
			return a > b ? 1 : a < b ? -1 : 0;
		});
		
		setCookie("actAdicionadas", JSON.stringify(storedA),1);
		owl.trigger('remove');
    
    
        _('moving_ecra').className='goingDown';
		
        setTimeout(function(){
            _("texto_cima").innerHTML = "";
            _("texto_cima3").style.visibility = "hidden";
            _("img_central2").style.visibility = "hidden";
            _("texto_baixo2").style.visibility = "hidden";

            _("texto_cima2").style.visibility = "initial";
            _("img_central").style.visibility = "initial";
            _("button_1").style.visibility = "initial";
            _('moving_ecra').className='gettingDown';
        },300)
    }
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
	if(sim == 1){
		faz_subir('dia1.html');	
	} else {
	faz_subir('agenda.html');}	
}