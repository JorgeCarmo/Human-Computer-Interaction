var nome_da_clase;
var x_ini_swipe = 0;
var x_fin_swipe = 0;
var x_ini_para_click = 0;
var x_fim_para_click= 0;
var quanto_deslizou = 0;
var foi_swipe = false;
function _(obj){
	return document.getElementById(obj);
}


document.ondragstart = function(){return false};
function goLock(){
	if (typeof actual !== 'undefined') {
		// variable is undefined
		setCookie("actual",actual,1);
	}	
	setCookie("pagina_antiga",document.location,1);
	document.location='main_watch.html';
}
function goMainMenu(){
    jajao=true;
	_('back_button').style.border = '2px solid grey';
    _('back_button').onmouseout=function(){_('back_button').style.border = '2px solid white';jajao=false;}
	t = setTimeout(function(){if(jajao) faz_subir("main_menu.html")},1000);
}

function load_animation(){
    nome_da_classe = getCookie("what to do");
    _("moving_ecra").className = nome_da_classe;
}
function load_tuturial(){
    nome_da_classe = getCookie("tut what to do");
    _("onde_escrevemos").className = nome_da_classe;
}

function faz_descer(nome_site){
    _('moving_ecra').className='goingDown';
    setCookie('what to do',"gettingDown",1);
    setTimeout(function(){
                            document.location=nome_site
                         },300)

}
function faz_subir(nome_site){
    _('moving_ecra').className='goingUp';
    setCookie('what to do',"gettingUp",1);
    setTimeout(function(){
                            document.location=nome_site
                         },300)

}
function faz_esquerda(nome_site){
    _('onde_escrevemos').className='goingRight';
    setCookie('tut what to do',"gettingRight",1);
    setTimeout(function(){
                            document.location=nome_site
                         },300)

}
function faz_direita(nome_site){
    _('onde_escrevemos').className='goingLeft';
    setCookie('tut what to do',"gettingLeft",1);
    setTimeout(function(){
                            document.location=nome_site
                         },300)

}
function faz_stay(nome_site){
    _('moving_ecra').className='';
    setCookie('what to do',"",1);
    setTimeout(function(){
                            document.location=nome_site
                         },300)

}
function foi_abaixo(event){
    x_ini_para_click = event.clientX;
}
function foi_acima(event){
    x_fim_para_click = event.clientX;
    quanto_deslizou = Math.abs(x_fim_para_click - x_ini_para_click);
    if (quanto_deslizou > 2)
        foi_swipe = true;
    else
        foi_swipe = false;
}   