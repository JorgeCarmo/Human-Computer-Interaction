var actual = 0;
var amigos_true = 0;
var maximo = 0;
var str_imagens = "./imagens/FriendsHub/";
var imgs= [];
var nomes = [];
var amigos;
function desaparecer_popup_friend(){
	_('popup_friend').style.zIndex = '-99';
	_('popup_friend').className = '';
	_('popup_cima_friend').style.zIndex = '-99';
	_('popup_confirm_friend').style.visibility = 'hidden';
}
function triggerPopupAmigo(){
	_('popup_friend').style.zIndex = '99';
	_('popup_friend').className = 'pop_out';
	_('popup_img_friend').src = "./imagens/FriendsHub/" + getCookie("amigo"+amigos);
	
	setTimeout(function(){	_('popup_cima_friend').style.zIndex = '99';
							_('popup_confirm_friend').style.visibility = 'visible';
							}	,850);
	console.log(getCookie("amigo"+amigos))
}
/*
function swipe_right(){
	/*actual = (actual+1)%maximo;
	setCookie("actual",actual,1);
	document.location='type_of_buy.html';*/
/*	actual = (actual+1)%maximo;
	if (actual == 0)
		anterior = maximo-1;
	else 
		anterior = actual -1 ;
	_("img_left").src = str_imagens  + imgs[anterior];
	_("img_central").src = str_imagens + imgs[actual];
	_("img_right").src = str_imagens + imgs[(actual+1)%maximo];
	_("texto_baixo").innerHTML = nomes[actual];
}
function swipe_left(){
	if (actual == 0)
		actual = maximo;
	actual = (actual-1)%maximo;
	if (actual == 0)
		anterior = maximo-1;
	else 
		anterior = actual -1; 
	_("img_left").src = str_imagens  + imgs[anterior];
	_("img_central").src = str_imagens + imgs[actual];
	_("img_right").src = str_imagens + imgs[(actual+1)%maximo];
	_("texto_baixo").innerHTML = nomes[actual];
}
*/
function onLoadFriendsHub(){}

function changeLinkTipoAvatarHomem(numero){
	if (!foi_swipe) 
    {   
        setup = parseInt(getCookie('NoSetup'));
        setCookie('imagem_self','./imagens/Avatar/boy'+numero+'.png',1);
        setCookie('confirm_image','./imagens/Avatar/boy'+numero+'.png',1);
            faz_descer('confirmar_imagem.html');
        /*if (setup)
        else
            faz_descer('friendsHub.html');*/

    }
}

function goUp(){
	var zero = 0;
	setCookie("actual",zero,1);	
	faz_subir('escolher_tipo_avatar.html');
}
