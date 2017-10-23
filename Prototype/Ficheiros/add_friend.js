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
}

function changeLinkAddFriend(){
	/*if (actual == 0)	
		return false;*/
	var zero = 0;
	setCookie("actual",zero,1);
	faz_stay('add_friend_list.html');	
}

function goUp(){
	var zero = 0;
	faz_subir('friendsHub.html');
}

function apagarBuddy(){
	if (apagar != amigos){
		setCookie("amigo"+apagar,getCookie("amigo"+amigos),1);
	}
	setCookie("amigos",amigos-1,1);
	goUp();
}
