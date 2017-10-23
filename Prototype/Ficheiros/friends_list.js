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
function onLoadFriends_list(){
	/*setCookie("amigos",0,1);
	setCookie("amigo1","amigo_1.jpg",1);
	setCookie("amigo2","amigo_2.jpg",1);*/
	actual = parseInt(getCookie("actual"));
	amigos = parseInt(getCookie("amigos")); /*numero de amigos*/
    console.log(amigos);
	var owl = $('.owl-carousel');
		owl.owlCarousel();
	
		for(i=1; i<=amigos; i++){
			var buddy = [getCookie("amigo"+i)];
			imgs = imgs.concat(buddy)
		}
	if (amigos>1){
		
		
		_("texto_baixo").innerHTML = "Toque para ver no mapa";
		_("texto_cima").innerHTML = "Escolher amigo a ver no mapa";
			
		maximo =  imgs.length;
        for(i=1; i<=amigos; i++){
            $('.owl-carousel')
            owl.trigger('add', ['<div> <img onmousedown="foi_abaixo(event)" onmouseup="foi_acima(event)" onClick="if (!foi_swipe){setCookie(\'pagina de voltar atras\',\'friends_list.html\',1);setCookie(\'mapa_imagem\',this.src,1);faz_descer(\'mapa.html\')}" class="img" id="img_swipe" src="' + "./imagens/FriendsHub/" + imgs[(i-1)%maximo] +'"> </img></div>',i-1]);
        }       
	} else {
		_('img-central').style.zIndex = 99;
		if (amigos == 1){
            _('img-central').onclick=function(){setCookie('pagina de voltar atras','friends_list.html',1);setCookie('mapa_imagem',this.src,1);faz_descer('mapa.html');}
			_('img-central').src = "./imagens/FriendsHub/" + imgs[0];
            _("texto_baixo").innerHTML = "Toque para ver localização no mapa";
            _("texto_cima").innerHTML = "";}
	}
/*	
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
		_("img_left").src = str_imagens  + imgs[anterior];
		_("img_central").src = str_imagens + imgs[actual];
		_("img_right").src = str_imagens + imgs[(actual+1)%maximo];
		_("texto_baixo").innerHTML = "";
		_("texto_cima").innerHTML = "Escolha o amigo que quer ver no mapa";}
	else if(amigos == 1){
		var buddy = [getCookie("amigo1")];
		imgs = imgs.concat(buddy)
		maximo = 1;
		_("img_central").src = str_imagens + imgs[actual];
		_("img_left").style.zIndex = -1;
		_("img_right").style.zIndex = -1;
		_("texto_baixo").innerHTML = "Clique para ver no mapa";
		_("texto_cima").innerHTML = "";}
	}
	else{
		maximo = 0;
		_("img_left").style.zIndex = -1;
		_("img_right").style.zIndex = -1;}
		
	/*sglm[0] = nomes[actual];
	if (nomes[actual].length < 13)
		bpause = 500000;
	else
		bpause = 500;*/
		
		owl.trigger('refresh');
		
		
}

function changeLinkList(){
	/*if (actual == 0)	
		return false;*/
	var zero = 0;
	setCookie("actual",zero,1);

	/*if (nomes[actual] == "Lembranças")
	{
		setCookie('tipo', "Lembrancas", 1); 
		setCookie('loja', "Lembrancas", 1);
		document.location='products.html';
		return;
	}
	else	
		setCookie('tipo', nomes[actual], 1); */
		
	if (maximo > 0){	
		setCookie('mapa_imagem',imgs[actual],1);
		document.location='mapa.html';
		}	
	else
		document.location='add_friend.html';	
}

function goUp(){
	var zero = 0;
	faz_subir('friendsHub.html');
}
