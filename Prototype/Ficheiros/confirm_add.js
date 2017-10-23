var actual = 0;
var maximo = 0;
var str_imagens = "./imagens/FriendsHub/";
var imgs= [];

function swipe_right(){
}
function swipe_left(){
}
function onLoadConfirm_Add(){

	actual = 0;
	adicionar = getCookie("imagem_addfriend");
	imgs = [adicionar];
	amigos = parseInt(getCookie("amigos")); /*numero de amigos*/

	if (isNaN(amigos))
		amigos = 0;

	_("img_central").src = str_imagens + imgs[actual];

	_("texto_cima").innerHTML = "Adicionar amigo?";
		
}

function changeLinkAddFriend(){
}

function goUp(){
	faz_subir('add_friend_list.html');
}

function addBuddy(){
	setCookie("sucess","Pedido Amizade enviado",1);
	setCookie("pagina_antiga","friendsHub.html",1);
	ad_friend_weird = parseInt(getCookie("adicionar_amigos"));
	if (ad_friend_weird == 1){
		setCookie("amigo"+(amigos+2),imgs[0],1);
		setCookie("adicionar_amigos",3,1);}
	else{
		setCookie("amigo"+(amigos+1),imgs[0],1);
		setCookie("adicionar_amigos",2,1);}
	/*
	setCookie("amigos",amigos+1,1);
	*/
	faz_descer('great_sucess.html');	
}
