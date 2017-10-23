var a = [];
var ordem = [];

var actual = 0;
var maximo = 0;
var anterior = 0;
var next = 0;

var	nome = [];
var	imgs = [];
var quant =[];
var preco =[];
var loja = [];
var time = [];
var way  = [];
var flag_popup_on = true;
var tipo ="";
var imgs  = [];
var nomes = [];
/*para dois drones corre mal*/
function bubbleSort(a)
{
	var i = 0;
	while (i < a.length){
		ordem[i] = i;
		i = i + 1;
	}
		
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                var temp2 = ordem[i];
				a[i] = a[i+1];
				ordem[i] = ordem[i+1];
                a[i+1] = temp;
				ordem[i+1] = temp2;
                swapped = true;
            }
        }
    } while (swapped);
	return a;
}
 function transform_time(final){
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();

	var drone_hora = parseInt(final.substr(0, 2));
	var drone_minu = parseInt(final.substr(2, 4));
	var drone_segu = parseInt(final.substr(5, 5));	
	var tempo_ok = false;
	if (drone_hora - parseInt(hours) == 1){
		drone_minu = drone_minu + 60;
		tempo_ok = true;
		if (drone_segu<seconds){
			drone_segu = drone_segu + 60;
			drone_minu = drone_minu -1;
		}
	}
 	else if (drone_hora - parseInt(hours) == 0){
		if (drone_minu - parseInt(minutes) > 0){
			tempo_ok = true;
			if (drone_segu < seconds){
				drone_segu = drone_segu + 60;
				drone_minu = drone_minu -1;
			}
		}
		else if (drone_minu - parseInt(minutes) == 0){
			if (drone_segu > seconds){
				tempo_ok = true;
			}	
		
		}
	}
	if (tempo_ok){
		missing_min = drone_minu - minutes; 
		missing_sec = drone_segu - seconds;
		if (missing_min < 10)
			missing_min = "0" + missing_min; 
		if (missing_sec < 10)
			missing_sec = "0" + missing_sec;
		return missing_min + ":" + missing_sec;
	}
}

function onLoadEncomendas(){
    primeiravez=parseInt(getCookie("primeira_vez"));
    if (!primeiravez){
        setCookie("primeira_vez",1,1);
        _('tuturial').style.visibility='visible';
        _('onde_escrevemos').style.visibility='visible';
    }
    else{
        _('tuturial').style.visibility='hidden';
        _('onde_escrevemos').style.visibility='hidden';
    }
	var owl = $('.owl-carousel');
	owl.owlCarousel();
   /* _('ecra-edge').onmousedown = function(event){
            x_ini_swipe = event.clientX;
    };

    _('ecra-edge').onmouseup = function(event){
        x_fin_swipe = event.clientX;
        variacao = x_fin_swipe - x_ini_swipe;
        if (variacao > 10)
            swipe_right();
        if (variacao < -10)
            swipe_left();
    };*/
    acerta_drones();
	
	drones = getCookie("drones");
	var i = 1;
	while ( i <= drones){
		a[i-1] = getCookie("drone_"+i+"time") 
		i = i + 1;
	}
	bubbleSort(a);
	
	
	
	actual = 0;
	num = ordem[0] + 1;
	maximo =  ordem.length;
	anterior = maximo-1;
	next =  1;
	var i = 1;
	while (i <= maximo){
		num = ordem[i-1] +1;
		nome[i-1] =	 getCookie("drone_"+num+"nome");
		loja[i-1] =  getCookie("drone_"+num+"loja"); 
		if (loja[i -1] == 'Loja Oficial Rock in Rio'){
			imgs[i-1] =  "./imagens/" + "Lembrancas"+"/"+ getCookie("drone_"+num+"tipo") +"/"+ getCookie("drone_"+num+"imagem"); }
		else{
			imgs[i-1] =  "./imagens/" + getCookie("drone_"+num+"loja")+ "/" + getCookie("drone_"+num+"tipo") +"/"+ getCookie("drone_"+num+"imagem"); }
        quant[i-1]=  getCookie("drone_"+num+"quantidade"); 
		preco[i-1]=  getCookie("drone_"+num+"preco"); 
		time[i-1] =  getCookie("drone_"+num+"time");
		time[i-1] =  transform_time(time[i-1]);
		way[i-1] = getCookie("drone_"+num+"way"); 
		
		i = i+1;
	}
    
	if (drones == 1){
		_("nome_txt").style.opacity = "1";
		_("nome_txt").style.visibility = "visible";
		_("nome_txt").style.width = "75%";
		_("img_central").style.visibility = "visible";
		_("img_central").style.width = "40%";
		_("time_miss0").style.visibility = "visible";
		_("img_way_drone").style.visibility = "visible";

		_("nome_txt").innerHTML = nome[0];
		_("img_central").src = imgs[0];
		_("time_miss0").innerHTML = time[0];
		_("img_way_drone").src = way[0];
		_("ecra-edge").onclick=function(){zoom_encomenda(0);};
	} else if (drones>1){
		for(i=0; i<drones; i++){
			$('.owl-carousel')
			owl.trigger('add', ['<div  onmousedown="foi_abaixo(event)" onmouseup="foi_acima(event)" onClick="zoom_encomenda('+i+')"><img id="img_way_drone" src='+ way[i] +'></img><img id="img_central"   src="'+ imgs[i] +'"></img>	<marquee id="nome_txt">' + nome[i] +'</marquee><div id="time_miss' + i +'" class="time_miss time_miss'+i+'">'+  time[i] +'</div></div>',i]);	}
	}
		
	$('.owl-carousel')
	owl.trigger('refresh')
	
	if (drones != 0)
		activate_time();
	else
		faz_subir('main_menu.html');
}
function chamaPopupDrone(imagem,texto,way){
	flag_popup_on = false;
	_('popup_drone').style.zIndex = '99';
	_('popup_drone').className = 'pop_out';
	_('popup_img_drone').src = imagem;
	_('imagem_drone_way').src = way;
	if (way == './imagens/takeaway.png'){
		_('popup_cima_drone').innerHTML = 'Encomenda pronta, já pode levantá-la na loja';}

    _('popup_baixo_drone').innerHTML = texto;
	_('popup_baixo_drone').behavior = 'scroll';
	_('popup_baixo_drone').scrollamount="4";
	_('popup_baixo_drone').direction="LEFT";
	setTimeout(function(){	_('popup_cima_drone').style.zIndex = '99';
							_('popup_baixo_drone').style.zIndex = '99';
							_('popup_confirm_drone').style.visibility = 'visible';
							}	,850);
}
function activate_time(){
	var  i =0;
	while (i<maximo){
		tempo = time[i];
		missing_min = parseInt(tempo.toString().substr(0,2));
		missing_sec = parseInt(tempo.toString().substr(3,2));
		if (missing_sec == "0"){
			missing_sec = 59;
			missing_min = missing_min - 1;
		}
		else
			missing_sec = missing_sec - 1;
		

		
		if (missing_min < 10 ){
			if(missing_min.toString().substr(0, 1) != '0'){
				missing_min = "0" + missing_min;}
			else if (missing_min.toString() == '0')
				missing_min = '00';
		}
		if (missing_sec < 10 ){
			if(missing_sec.toString().substr(0, 1) != '0'){
				missing_sec = "0" + missing_sec;}
		else if (missing_sec.toString() == '0')
				missing_sec = '00';
		}
		if (missing_min == '00'){
			if (missing_sec == '00')
				chamaPopupDrone(imgs[0],nome[0],way[0]);
		}
		
		time[i] = missing_min+":"+missing_sec;
        var x = document.getElementsByClassName("time_miss"+i.toString());
        var n;
        for (n = 0; n < x.length; n++) {
            x[n].innerHTML= time[i];
        }
		i = i+1;
	}
	console.log(time);
	t = setTimeout(function(){ activate_time() }, 1000);
}
/*
function swipe_right(){
	if (actual == 0)
		actual = maximo;
	actual = (actual-1)%maximo;
	_("nome_txt").innerHTML = nome[actual];
	_("img_central").src = imgs[actual];
	_("time_miss").innerHTML = time[actual];	
	_("img_way_drone").src = way[actual];
	if (maximo > 1){
		_('img_left').src = imgs[(actual + 1)%maximo];
		if (actual == 0)
			_('img_right').src = imgs[maximo-1];
		else
			_('img_right').src = imgs[actual-1];
	}
	_("time_miss").innerHTML = time[actual];
	
}

function swipe_left(){
	actual = (actual+1)%maximo;
	_("nome_txt").innerHTML = nome[actual];
	_("img_central").src = imgs[actual];
	_("time_miss").innerHTML = time[actual];	
	_("img_way_drone").src = way[actual];
	if (maximo > 1){
		_('img_left').src = imgs[(actual + 1)%maximo];
		if (actual == 0)
			_('img_right').src = imgs[maximo-1];
		else
			_('img_right').src = imgs[actual-1];
	}
	_("time_miss").innerHTML = time[actual];
}*/

function zoom_encomenda(x){
	if (!foi_swipe) 
    {
        if (flag_popup_on){
            setCookie("drone_escolhido",ordem[x]+1,1);
            faz_descer("estado_encomendas_individual.html");
        }
    }
}
function goUp(){
	setCookie('actual', 0, 1);
	
	faz_subir('main_menu.html');	
}
