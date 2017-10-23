var actual = 0;
var maximo = 0;
var str_imagens = "./imagens/FriendsHub/";
var imgs= [];

function swipe_right(){

}
function swipe_left(){

}
/*

	*/
function onLoadConfirm_Remove(){
	/*setCookie("amigos",2,1);
	setCookie("amigo1","amigo_1.jpg",1);
	setCookie("amigo2","amigo_2.jpg",1);*/
	actual = 0;
	apagar = parseInt(getCookie("toRemove")) + 1;
	amigos = parseInt(getCookie("amigos")); /*numero de amigos*/
	
	var buddy = [getCookie("amigo"+apagar)];
	imgs = imgs.concat(buddy)
	

	_("img_central").src = str_imagens + imgs[actual];

	_("texto_cima").innerHTML = "Tem a certeza que quer remover da sua lista de amigos?";
		
	/*sglm[0] = nomes[actual];
	if (nomes[actual].length < 13)
		bpause = 500000;
	else
		bpause = 500;*/
}
/*
function changeLinkRemoveFriend(){
	/*if (actual == 0)	
		return false;
	var zero = 0;
	setCookie("actual",zero,1);

		
	if (amigos){	
		setCookie("toRemove",actual,1);
		document.location='confirm_remove.html';	
		}
	else
		document.location='add_friend.html';	
}*/

function goUp(){
	var zero = 0;
	faz_subir('remove_friend.html');
}

function apagarBuddy(){
	if (apagar != amigos){
		setCookie("amigo"+apagar,getCookie("amigo"+amigos),1);
	}
	setCookie("amigos",amigos-1,1);
    setCookie("sucess","Amigo Removido",1);
	setCookie("pagina_antiga","remove_friend.html",1);
	faz_descer('great_sucess.html');	
	
}
