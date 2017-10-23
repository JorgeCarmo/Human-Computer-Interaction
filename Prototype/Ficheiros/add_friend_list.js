var actual = 0;
var maximo = 0;
var str_imagens = "./imagens/FriendsHub/";
var imgs= [];

function swipe_right(){
	/*actual = (actual+1)%maximo;
	setCookie("actual",actual,1);
	document.location='type_of_buy.html';*/
	if (maximo >= 2){	
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
	if (maximo >= 2){
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
function onLoadAddFriends_list(){
	/*setCookie("amigos",0,1);
	setCookie("amigo1","amigo_1.png",1);
	setCookie("amigo2","amigo_2.png",1);*/
	var owl = $('.owl-carousel');
	owl.owlCarousel();
	actual = parseInt(getCookie("actual"));
	amigos = parseInt(getCookie("amigos")); /*numero de amigos*/
	botao = parseInt(getCookie("botao")); /*numero de amigos*/
	lista = [["amigo_1.png","amigo_2.png","amigo_3.png","amigo_4.png"],["amigo_5.png","amigo_6.png","amigo_7.png","amigo_8.png"],["amigo_9.png","amigo_10.png","amigo_11.png","amigo_12.png"]]; 
	imgs = lista[botao-1];
	
    num_maximo_ciclo = amigos;
	ad_friend_weird = parseInt(getCookie("adicionar_amigos"));
	if (ad_friend_weird==1)
		num_maximo_ciclo = num_maximo_ciclo + 1;
	else if (ad_friend_weird==2)
		num_maximo_ciclo = num_maximo_ciclo + 1;
	else if (ad_friend_weird==3)
		num_maximo_ciclo = num_maximo_ciclo + 2;
	for(i=1; i<=num_maximo_ciclo; i++){
		var buddy = getCookie("amigo"+i);
		index = imgs.indexOf(buddy);
		if (index > -1) 
			imgs.splice(index, 1);
	}
	maximo =  imgs.length;
	if (maximo >= 2 ){
		if (actual == 0)
			anterior = maximo-1;
		else 
			anterior = actual -1 ;
		for(i=1; i<=maximo; i++){
		$('.owl-carousel')
			owl.trigger('add', ['<div> <img onmousedown="foi_abaixo(event)" onmouseup="foi_acima(event)"  onClick="changeLinkList('+ (i-1) +');" class="img" id="img_swipe" src="' + "./imagens/FriendsHub/" + imgs[(i-1)%maximo] +'"> </img></div>',i-1]);
			
		}
		_("texto_cima").innerHTML = "Escolha o amigo que quer ver no mapa";
	}
	else if(maximo == 1){
		_('img-central').style.zIndex = 99;
		_("img-central").src = str_imagens + imgs[actual];
		_("img-central").onclick = changeLinkList(actual);
	}
	else{
		_("texto_cima").innerHTML = "Nos 10m à sua volta já todos são seus amigos";
		_("texto_baixo").innerHTML = "";
        _('img-central').src = "./imagens/Remove.png";
        _('img-central').onClick = function(){goUp();} ;
        _('img-central').style.visibility ="visible";
        _('img-central').style.zIndex ="1";
        
        _('butao_de_ok').style.visibility ="visible";
        _('butao_de_ok').style.zIndex ="1";
		maximo = 0;
	}
		
	/*sglm[0] = nomes[actual];
	if (nomes[actual].length < 13)
		bpause = 500000;
	else
		bpause = 500;*/
		
		
		owl.trigger('refresh');
		
}

function changeLinkList(a){
	/*if (actual == 0)	
		return false;*/
    if (!foi_swipe) 
    {
        setCookie("actual",actual,1);

        if (maximo > 0){
            setCookie("imagem_addfriend",imgs[a],1);
            faz_descer('confirm_add.html');
        }		
        else
            document.location='add_friend.html';	
    }
}

function goUp(){
	var zero = 0;
	faz_subir('friendsHub.html');
}
