var actual = 0;
var maximo = 1;
var anterior = 0;
var next = 0;

var	nome_d = [];
var	imgs_d = [];
var quant_d =[];
var preco_d =[];
var loja_d = [];
var time_d = [];
var way_d  = [];

var tipo ="";
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

    acerta_drones();
	drones = parseInt(getCookie("drones"));
    if (drones){

	actual = 0;
	num = parseInt(getCookie("drone_escolhido"));

    nome_d[0] =	 getCookie("drone_"+num+"nome");
    loja_d[0] =  getCookie("drone_"+num+"loja"); 
    if (loja_d[0] == 'Loja Oficial Rock in Rio')
        imgs_d[0] =  "./imagens/" + "Lembrancas"+"/"+getCookie("drone_"+num+"tipo") +"/"+ getCookie("drone_"+num+"imagem"); 
    else
        imgs_d[0] =  "./imagens/" + getCookie("drone_"+num+"loja")+"/"+getCookie("drone_"+num+"tipo") +"/"+ getCookie("drone_"+num+"imagem"); 
    quant_d[0]=  getCookie("drone_"+num+"quantidade"); 
    preco_d[0]=  getCookie("drone_"+num+"preco"); 
    time_d[0] =  getCookie("drone_"+num+"time");
    time_d[0] =  transform_time(time_d[0]);
    way_d[0] = getCookie("drone_"+num+"way"); 

	
	_("texto_cima").innerHTML = nome_d[0];
	_("img_central").src = imgs_d[0];
	_("quant_txt").innerHTML = quant_d[0];
	_("tot_txt").innerHTML = preco_d[0];
	_("loja_txt").innerHTML =loja_d[0];
	_("time_miss_d").innerHTML = time_d[0];
	_("way_drone_img").src = way_d[0];
		activate_time_d();}
    else   
        goUp();
	/*if (drones != 0)
	else
		document.location = 'main_menu.html'*/
}

function chamaPopupDroneLoc(imagem,texto,way){
    _('popup_drone').style.zIndex = '99';
	_('popup_drone').className = 'pop_out';
	_('popup_img_drone').src = imagem;
	_('popup_baixo_drone').innerHTML = texto;
	_('popup_baixo_drone').behavior = 'scroll';
	_('popup_baixo_drone').scrollamount="4";
	_('popup_baixo_drone').direction="LEFT";
	if (way == './images/takeaway.png')
		_('popup_cima_drone').innerHTML = 'A sua encomenda está pronta, já pode levantá-la na loja';
	faz_subir('estado_encomendas.html');
    setTimeout(function(){	_('popup_cima_drone').style.zIndex = '99';
							_('popup_baixo_drone').style.zIndex = '99';
							_('popup_confirm_drone').style.visibility = 'visible';
							}	,850);
}
function activate_time_d(){
	var  i =0;
	while (i<maximo){
		tempo = time_d[i];
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
				chamaPopupDroneLoc(imgs_d[0],nome_d[0],way_d[0]);
		}
		
		time_d[i] = missing_min+":"+missing_sec;
		i = i+1;
	}
	console.log(time_d);
	t_d = setTimeout(function(){ activate_time_d() }, 1000);
	_("time_miss_d").innerHTML = time_d[actual];
}
function swipe_right(){
}

function swipe_left(){
}



function goUp(){
	setCookie('actual', 0, 1);
	
	faz_subir('estado_encomendas.html');	
}
