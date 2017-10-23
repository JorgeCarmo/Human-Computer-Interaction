var fiveMinutes = 60 * 5;
var sglm=new Array();
var bpause = 500;
var minu = 0;
var hora = 0;
function done(){
	faz_descer("estado_encomendas.html");
}
function onLoadConfirmed(){
	preco_base = parseFloat(getCookie("preco_tot"));
	_("Preco").innerHTML = preco_base.toString() + "€";
	
	

	var fiveMinutes = 60 * 5,
	display = document.querySelector('#timer');
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();	
	startTimer(fiveMinutes, display);
	
	if (minutes > 54){
		minu = minutes%5;
		hora = hours + 1 ;	
	}
	else
	{
		hora = hours;	
		minu = minutes + 5;
}
	var str_h = '';
	var str_m = '';
	var str_s = '';
	
	if (hora < 10)
		str_h = '0' + hora.toString();
	else
		str_h = hora.toString();
	if (minu < 10)
		str_m = '0' + minu.toString();
	else
		str_m = minu.toString();
	if (seconds < 10)
		str_s = '0' + seconds.toString();
	else
		str_s =  seconds.toString();		
	var tempo = str_h+" "+str_m+" "+str_s;	
	num_drones = getCookie("drones");
	setCookie("drone_"+num_drones+"time",tempo,1);
    
    _('texto_drone').innerHTML = getCookie('drone_'+getCookie("drones")+'way') == "./imagens/takeaway.png" ? 'Pronto em:' : "Drone chega em:";
/*	sglm[0] = "Tempo estimado para chegada do Drone";
	if (sglm[0].length < 13)
		bpause = 50;
	else
		bpause = 50;	*/
}


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
