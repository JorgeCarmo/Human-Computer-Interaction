function confirm(){
	document.location="drone_or_hand.html";	
}

function onLoad2Confirm(){
	img = getCookie("confirm_image");
	_("img_confirm").src = img;

	
	_('back_button').onclick = function(){fromfunc()};
	_('botao2').onclick = function(){fromfunc()};
	_('botao1').onclick = function(){where2func()};
	
	
}

function fromfunc(){
	var from = getCookie("from");
	faz_subir(from);
}
function where2func(){
	/*if (maneira){
	maneira = "tratar_financas.html"
		add_drone(getCookie('actual_'+'imagem'),getCookie('actual_'+'nome'),getCookie('actual_'+'quantidade'),getCookie('actual_'+'preco'),getCookie('actual_'+'loja'),'',getCookie('actual_'+'tipo'),maneira);
	}*/
	var where2 = "tratar_financas.html";
	faz_descer(where2);
}
