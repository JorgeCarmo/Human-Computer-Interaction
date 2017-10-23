var	drone_nome = []; 
var	drone_imgs = []; 
var drone_quant =[];
var drone_preco =[]; 
var drone_loja = []; 
var drone_time = [];
var drone_way  = [];
var a = [];
var ordem = [];
var shit;
var t;
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
function activate_time(){
	if (shit == true){
		var  i =0;
		while (i<drone_maximo){
			tempo = drone_time[i];
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
				if (missing_sec == '00'){	
					shit = false;
					
					chamaPopupDrone(drone_imgs[0],drone_nome[0],drone_way[0]);
					drone_maximo = drone_maximo - 1;
					drone_imgs.splice(0,1);
					drone_nome.splice(0,1);
					drone_way.splice(0,1);
					drone_time.splice(0,1);
				}
			}

			drone_time[i] = missing_min+":"+missing_sec;
			i = i+1;
		}
		console.log(drone_time);
		if (shit == true)
			t = setTimeout(function(){ activate_time() }, 1000);
		if (_("time_miss"))
			_("time_miss").innerHTML = drone_time[drone_actual];
	}
}
function chamaPopupDrone(imagem,texto,drone_way){
	_('popup_drone').style.zIndex = '99';
	_('popup_drone').className = 'pop_out';
	_('popup_img_drone').src = imagem;
	_('popup_baixo_drone').innerHTML = texto;
	_('popup_baixo_drone').behavior = 'scroll';
	_('popup_baixo_drone').scrollamount="4";
	_('popup_baixo_drone').direction="LEFT";
	if (drone_way == './imagens/takeaway.png')
		_('popup_cima_drone').innerHTML = 'Encomenda pronta, já pode levantá-la na loja';
	setTimeout(function(){	_('popup_cima_drone').style.zIndex = '99';
							_('popup_baixo_drone').style.zIndex = '99';
							_('popup_confirm_drone').style.visibility = 'visible';
							}	,850);
	_('imagem_drone_way').src = drone_way;
}
function desaparecer_popup_drone(){
	var cenas;
	_('popup_drone').style.zIndex = '-99';
	_('popup_drone').className = '';
	_('popup_cima_drone').style.zIndex = '-99';
	_('popup_baixo_drone').style.zIndex = '-99';
	_('popup_confirm_drone').style.visibility = 'hidden';
	cenas = dronesEverywhere();
}
function dronesEverywhere(){
    /*_('ecra-edge').onmousedown = function(event){
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

	clearInterval(t);
	clearInterval(t);
	clearInterval(t);
	console.log("recomecei");
	acerta_drones();
	drone_imgs = [];
	drone_nome = []
	drone_way = [];
	drone_time = [];
	drone_loja = [];
	a = [];
	ordem = [];
	drones = getCookie("drones");
	var i = 1;
	while ( i <= drones){
		a[i-1] = getCookie("drone_"+i+"time") 
		i = i + 1;
	}
	a = bubbleSort(a);
	drone_actual = 0;
	num = ordem[0] + 1;
	drone_maximo =  ordem.length;
	var i = 1;
	while (i <= drone_maximo){
		num = ordem[i-1] +1;
		drone_nome[i-1] =	 getCookie("drone_"+num+"nome");
		drone_loja[i-1] =  getCookie("drone_"+num+"loja"); 
		if (drone_loja[i -1] == 'Loja Oficial Rock in Rio')
			drone_imgs[i-1] =  "./imagens/" + "Lembrancas"+"/"+getCookie("drone_"+num+"tipo") +"/"+ getCookie("drone_"+num+"imagem"); 
		else
			drone_imgs[i-1] =  "./imagens/" + getCookie("drone_"+num+"loja")+"/"+getCookie("drone_"+num+"tipo") +"/"+ getCookie("drone_"+num+"imagem"); 
		drone_time[i-1] =  getCookie("drone_"+num+"time");
		drone_time[i-1] =  transform_time(drone_time[i-1]);
		drone_way[i-1] = getCookie("drone_"+num+"way"); 
		
		i = i+1;
	}
	if (drones != 0){
		shit = true;
		activate_time();}
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
		function criaDrones(){
		var currentTime = new Date();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		setCookie("drones",4,1);
		setCookie("drone_1time",hours + " " + minutes + " 15",1);
		setCookie("drone_2time",hours + " " + minutes + " 30",1);
		setCookie("drone_3time",hours + " " + minutes + " 45",1);
		setCookie("drone_4time",hours + " " + minutes + " 59",1);}