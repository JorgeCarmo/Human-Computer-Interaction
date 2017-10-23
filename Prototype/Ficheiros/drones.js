var num_drones;
var info=["imagem","nome","quantidade","preco","loja","time","tipo","way"];
function add_drone(imagem,nome,quantidade,preco,loja,time,tipo,way){
	acerta_drones();
	num_drones = num_drones + 1;
	setCookie("drones",num_drones,1);
	setCookie("drone_"+num_drones+"imagem",imagem,1);
	setCookie("drone_"+num_drones+"nome",nome,1);
	setCookie("drone_"+num_drones+"quantidade",quantidade,1);
	setCookie("drone_"+num_drones+"preco",preco,1);
	setCookie("drone_"+num_drones+"loja",loja,1);
	setCookie("drone_"+num_drones+"time",time,1);
	setCookie("drone_"+num_drones+"tipo",tipo,1);
	setCookie("drone_"+num_drones+"way",way,1);
}
function real_remove(num){
	var i = 0;
	max = info.length;
	if (num != num_drones){
		while( i < max){
			vari = info[i];
			setCookie("drone_"+num+vari,getCookie("drone_"+num_drones+vari),1);
			i = i + 1; 
		}
	}
	
}
function remove_drone(num){
	if (num < num_drones)
		{
/*			alert("rem_starts" + " num: "+num +"; drones: " + num_drones +"; check: " +check_due_time(num_drones));*/

			if (check_due_time(num_drones)){
				real_remove(num);
				num_drones = num_drones -1;
				setCookie("drones",num_drones,1);
				
			}
			else{
				num_drones = num_drones -1;
				setCookie("drones",num_drones,1);
				remove_drone(num);
			}
		}
	else {
		num_drones = num_drones -1;
		setCookie("drones",num_drones,1);
		}
}
function acerta_drones(){
	num_drones = parseInt(getCookie("drones"));
	var tempo;
	var i = 1;
	while (i <= num_drones){
		tempo = getCookie("drone_"+i+"time");
		var currentTime = new Date();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();

		var drone_hora = parseInt(tempo.substr(0, 2));
		var drone_minu = parseInt(tempo.substr(2, 4));
		var drone_segu = parseInt(tempo.substr(5, 5));	
		var due_time = false;
		if (drone_hora - parseInt(hours) < 0){
			due_time = true;
		}
		else if (drone_hora - parseInt(hours) == 0){
			if (drone_minu < parseInt(minutes)){
				due_time = true;
			}
			else if (drone_minu == parseInt(minutes)){
				if(drone_segu < seconds){
					due_time = true;
				}
			}
		}

		if(due_time){
			remove_drone(i);
		}
		i = i + 1;
	}
}
function check_due_time(num){
				
	var tempo = getCookie("drone_"+num+"time");
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();

	var drone_hora = parseInt(tempo.substr(0, 2));
	var drone_minu = parseInt(tempo.substr(2, 4));
	var drone_segu = parseInt(tempo.substr(5, 5));	
	var due_time = true;
	if (drone_hora - parseInt(hours) < 0){
		due_time = false;
	}
	else if (drone_hora - parseInt(hours) == 0){
		if (drone_minu < parseInt(minutes)){
			due_time = false;
		}
		else if (drone_minu == parseInt(minutes)){
			if(drone_segu < seconds){
				due_time = false;
			}
		}
	}
	
	return due_time;

}