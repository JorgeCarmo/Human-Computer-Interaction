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
function onLoadFriendsHub(){
    amigos = parseInt(getCookie("amigos"));
	ad_friend_weird = parseInt(getCookie("adicionar_amigos"));
	if (ad_friend_weird == 1){

		setCookie("adicionar_amigos",0,1);
		amigos = amigos + 1;
		setCookie("amigos",amigos,1);
		triggerPopupAmigo();
		}
	else if (ad_friend_weird == 3){
		amigos = amigos + 1;
		setCookie("amigos",amigos,1);
		setCookie("adicionar_amigos",1,1);
		triggerPopupAmigo();
	}	
	else if (ad_friend_weird == 2){
		setCookie("adicionar_amigos",1,1);
	}
	var owl = $('.owl-carousel');
	owl.owlCarousel();
	owl.trigger('refresh');
	if (amigos != 0){
		amigos_true = 1;
		$('.owl-carousel')
		owl.trigger('add', ['<div> <img onmousedown="foi_abaixo(event)" onmouseup="foi_acima(event)" onClick="changeLinkHub(\'remove_friend.html\')" class="img" id="img_swipe" src="./imagens/FriendsHub/remove_friend.png"> <div  style="overflow: hidden; opacity: 1;" id="texto_marquee">Remover</div> </img></div>',2]);
		}
	owl.trigger('refresh');


			
	}
	
	if (amigos != 0){
		imgs= ["friend_book.jpeg","add_friend.png","remove_friend.png"];
		nomes = ["Ver Lista Amigos","Adicionar Amigos","Remover Amigos"];
	}
	else{
		imgs= ["friend_book.jpeg","add_friend.png"];
		nomes = ["Ver Lista Amigos","Adicionar Amigos"];
	}
	actual = parseInt(getCookie("actual"));
	maximo =  nomes.length;


function changeLinkHub(site_link){
	if (!foi_swipe) 
    {    
        faz_descer(site_link);
    }
}

function goUp(){
	var zero = 0;
	setCookie("actual",zero,1);	
	faz_subir('main_menu.html');
}
