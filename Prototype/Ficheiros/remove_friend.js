var actual = 0;
var maximo = 0;
var str_imagens = "./imagens/FriendsHub/";
var imgs= [];

function swipe_right(){
	/*actual = (actual+1)%maximo;
	setCookie("actual",actual,1);
	document.location='type_of_buy.html';*/
	if (amigos >= 2){	
		actual = (actual+1)%maximo;
		if (actual == 0)
			anterior = maximo-1;
		else 
			anterior = actual -1 ;
		_("img_left").src = str_imagens  + imgs[anterior];
		_("img_central").src = str_imagens + imgs[actual];
		_("img_right").src = str_imagens + imgs[(actual+1)%maximo];
	}
}
function swipe_left(){
	if (amigos >= 2){
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
	}
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
function desaparecer_popup_friend(){
	_('popup_friend').style.zIndex = '-99';
	_('popup_friend').className = '';
	_('popup_cima_friend').style.zIndex = '-99';
	_('popup_confirm_friend').style.visibility = 'hidden';
}
function onLoadRemove_friend(){
	var owl = $('.owl-carousel');
	owl.owlCarousel();
	/*setCookie("amigos",2,1);
	setCookie("amigo1","amigo_1.jpg",1);
	setCookie("amigo2","amigo_2.jpg",1);*/
	actual = 0;
	amigos = parseInt(getCookie("amigos")); /*numero de amigos*/
	ad_friend_weird = parseInt(getCookie("adicionar_amigos"));
	if (ad_friend_weird == 1){

		setCookie("adicionar_amigos",0,1);
		amigos = amigos + 1;
		setCookie("amigos",amigos,1);
		triggerPopupAmigo();
		}

		
	if (amigos >= 2){
		for(i=1; i<=amigos; i++){
			var buddy = [getCookie("amigo"+i)];
			imgs = imgs.concat(buddy)
		}
		maximo =  imgs.length;
		if (actual == 0)
			anterior = maximo-1;
		else 
			anterior = actual -1 ;
			
		for(i=1; i<=maximo; i++){
		$('.owl-carousel')
			owl.trigger('add', ['<div> <img onmousedown="foi_abaixo(event)" onmouseup="foi_acima(event)"  onClick="changeLinkRemoveFriend('+ (i-1) +');" class="img" id="img_swipe" src="' + "./imagens/FriendsHub/" + imgs[(i-1)%maximo] +'"> </img></div>',i-1]);
		}
		_("texto_baixo").innerHTML = "";
		_("texto_cima").innerHTML = "Escolha o amigo que quer remover";
		}
	else if(amigos == 1){
		var buddy = [getCookie("amigo1")];
		imgs = imgs.concat(buddy)
		maximo = 1;
		_('img-central').style.zIndex = 99;
		_("img-central").src = str_imagens + imgs[actual];
		_("texto_cima").innerHTML = "Escolha o amigo que quer remover";
		_("texto_baixo").innerHTML = "";
	}
	else{
		_('img-central').style.zIndex = 99;
		_("img-central").src = str_imagens + "amigos_cheios.png";
		_("texto_cima").innerHTML = "Não existe amigos para remover";
		document.location = 'friendsHub.html'
		maximo = 0;
		
	/*sglm[0] = nomes[actual];
	if (nomes[actual].length < 13)
		bpause = 500000;
	else
		bpause = 500;*/
	}
		owl.trigger('refresh');
}

function changeLinkRemoveFriend(a){
	/*if (actual == 0)	
		return false;*/
    if (!foi_swipe) 
    {
        var zero = 0;
        setCookie("actual",zero,1);


        if (amigos){	
            setCookie("toRemove",a,1);
            faz_descer('confirm_remove.html');	
            }
        else
            faz_descer('add_friend.html');	
    }
}

function goUp(){
	var zero = 0;
	faz_subir('friendsHub.html');
}
