var sglm=new Array();
var bpause = 500;
var num_drones;
var drones = [];
var missing_min;
var missing_sec;
var dia = 1;
var final;
var actividades = [["Rappel","Escalada", "Futebol", "Yoga", "Luta de balões de água", "Concurso de tartes", "Dodgeball", "The Rolling Stones", "Linkin Park", "Ed Sheeran"],["Rappel","Escalada", "Futebol", "Yoga", "Luta de balões de água", "Concurso de tartes", "Dodgeball", "Justin Timberlake", "Jessie J", "Arcade Fire"],["Rappel","Escalada", "Futebol", "Yoga", "Luta de balões de água", "Concurso de tartes", "Dodgeball", "30 Seconds to Mars", "Metallica", "Avenged Sevenfold"]];
var Horas = [["10h00-11h00", "11h00-12h00","12h00-13h00","13h00-14h00","14h00-15h00","15h00-16h00","16h00-17h00","17h00-18h00", "18h00-19h00", "19h00-20h00", "20h00-21h00"],["10h00-11h00", "11h00-12h00","12h00-13h00","13h00-14h00","14h00-15h00","15h00-16h00","16h00-17h00","17h00-18h00", "18h00-19h00", "19h00-20h00", "20h00-21h00"],["10h00-11h00", "11h00-12h00","12h00-13h00","13h00-14h00","14h00-15h00","15h00-16h00","16h00-17h00","17h00-18h00", "18h00-19h00", "19h00-20h00", "20h00-21h00"]];

function goUnLock(){
	if (getCookie("pagina_antiga") == "")
		document.location='main_menu.html';
	else
		document.location=getCookie("pagina_antiga");
}

function verHoras(){
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();

	if (hours < 10)
		hours = "0" + hours;
	if (minutes < 10)
		minutes = "0" + minutes;
	_("hour").innerHTML = hours;
	_("minute").innerHTML = minutes;
	 t = setTimeout(function(){ verHoras() }, 5000);
}
	
function ativar_counter_drone(){
	if (missing_min < 10 ){
		if(missing_min.toString().substr(0, 1) != '0'){
			missing_min = "0" + missing_min;}}
	if (missing_sec < 10 ){
		if(missing_sec.toString().substr(0, 1) != '0'){
			missing_sec = "0" + missing_sec;}}
	_("drone_min").innerHTML = missing_min;
	_("drone_seg").innerHTML = missing_sec;
	if (missing_sec == "00"){
		missing_sec = 59;
		missing_min = missing_min - 1;
	}
	else
		missing_sec = missing_sec - 1;
	if (missing_min == -1){
		num_drones = num_drones - 1;
		if (num_drones){
			drones.splice(0,1);
			final = drones[0];
			verDrone();
		}
		else
		{
			_("drone_h").style.visibility = 'hidden';
			_("drone_min").style.visibility = 'hidden';
			_("drone_seg").style.visibility = 'hidden';
		}
	}
	else {	
		t = setTimeout(function(){ ativar_counter_drone() }, 1000);
	}
}
function bubbleSort(a) {
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
				a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
	return a;
}
function verDrone(){

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
		_("drone_h").style.visibility = 'visible';
		_("drone_min").style.visibility = 'visible';
		_("drone_seg").style.visibility = 'visible';


		missing_min = drone_minu - minutes; 
		missing_sec = drone_segu - seconds;
		ativar_counter_drone();		
	}
}

function onLoadLock(){
    _('ecra-edge').onmousedown = function(event){
            x_ini_swipe = event.clientX;
    };

    _('ecra-edge').onmouseup = function(event){
        x_fin_swipe = event.clientX;
        variacao = x_fin_swipe - x_ini_swipe;
        if (variacao > 10)
            goUnLock();
        else if (variacao < -10)
            goUnLock();
    };
	num_drones = parseInt(getCookie("drones"));
	if (num_drones){
		var i = 1;
		while (i <= num_drones){
			drones[i-1] = getCookie("drone_"+i+"time");
			i = i+1;
		}
		drones = bubbleSort(drones);
		final = drones[0];
		verDrone();
	}
	dia = JSON.parse(getCookie("dia")) - 15;
	var actADD = JSON.parse(getCookie("actAdicionadas"));
	var currentTime = new Date();
	var hours = currentTime.getHours();
	if(hours>=10 && hours<=(10 + (actividades[dia-1].length))){
		if (isInArray(actADD[dia-1], hours-10)){
			_("evento3").style.visibility = "hidden";
			_("evento1").style.visibility = "initial";
			_("evento1").style.left = "18%";
			_("evento2").style.left = "14%";
			_("evento1").innerHTML = actividades[dia-1][hours - 10];
			_("evento2").innerHTML = Horas[dia-1][hours - 10];
		/*_("evento2").innerHTML = actividades[dia-1][hours - 9];*/
		}
	} else {
		if (actADD[dia-1]!=[] && actADD[dia-1]!=""){
			_("evento3").style.visibility = "hidden";
			_("evento1").style.visibility = "initial";
			_("evento1").style.left = "18%";
			_("evento2").style.left = "14%";
			_("evento1").innerHTML = actividades[dia-1][actADD[dia-1][0]];
			_("evento2").innerHTML = Horas[dia-1][actADD[dia-1][0]];
		/*_("evento2").innerHTML = actividades[dia-1][hours - 9];*/
		}
	}
	
	if (actADD[dia-1]!=[] && actADD[dia-1]!=""){
			_("evento3").style.visibility = "hidden";
			_("evento1").style.visibility = "initial";
			_("evento1").style.left = "18%";
			_("evento2").style.left = "14%";
			_("evento1").innerHTML = actividades[dia-1][actADD[dia-1][0]];
			_("evento2").innerHTML = Horas[dia-1][actADD[dia-1][0]];
		/*_("evento2").innerHTML = actividades[dia-1][hours - 9];*/
		}
	

}

function isInArray(array, search)
{
    return array.indexOf(search) >= 0;
}
