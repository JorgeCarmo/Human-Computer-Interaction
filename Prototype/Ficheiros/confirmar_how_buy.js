function confirm(){
	document.location="drone_or_hand.html";	
}

function onLoad2Confirm(){
	img = getCookie("confirm_image");
	_("img_confirm").src = img;
	txt = getCookie("confirm_txt");
	_("texto_cima").innerHTML = txt;
	
	_('back_button').onclick = function(){fromfunc()};
	_('botao2').onclick = function(){fromfunc()};
	_('botao1').onclick = function(){where2func()};
	
	
}

function fromfunc(){
	var from = getCookie("from");
	faz_subir(from);
}
function where2func(){
	maneira = getCookie("way");
	if (maneira){
		add_drone(getCookie('actual_'+'imagem'),getCookie('actual_'+'nome'),getCookie('actual_'+'quantidade'),getCookie('actual_'+'preco'),getCookie('actual_'+'loja'),'',getCookie('actual_'+'tipo'),maneira);
	}
	var where2 = getCookie("where2");
	faz_descer(where2);
}
