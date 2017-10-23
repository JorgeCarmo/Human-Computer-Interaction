function confirm(){
    directoLoja=parseInt(getCookie('directoLoja'));
    if (directoLoja){
        add_drone(getCookie('actual_'+'imagem'),getCookie('actual_'+'nome'),getCookie('actual_'+'quantidade'),getCookie('actual_'+'preco'),getCookie('actual_'+'loja'),'',getCookie('actual_'+'tipo'),'./imagens/takeaway.png');
        faz_descer('confirmado.html');
    }
    else
    {
        faz_descer("drone_or_hand.html");	
    }
}
function onLoad2Confirm(){
	
    _('Quantidade_txt').innerHTML = getCookie("actual_quantidade");
    if (getCookie("actual_quantidade") == '1') 
        _('uni').innerHTML = 'und';
    _('texto_cima').innerHTML = getCookie("actual_nome");
    if (getCookie('actual_loja') == 'Loja Oficial Rock in Rio')
			_('img_confirm').src =  "./imagens/" + "Lembrancas"+"/"+getCookie('actual_tipo') +"/"+ getCookie('actual_imagem'); 
    else
    _('img_confirm').src = "./imagens/"+ getCookie('actual_loja')+'/'+ getCookie('actual_tipo') + '/' + getCookie('actual_imagem');
	/*
	sglm[0] = getCookie("nome_producto");
	if (sglm[0].length < 13)
		bpause = 500000;
	else
		bpause = 500;*/
	preco_base = parseFloat(getCookie("preco_tot"));
	_("Preco").innerHTML = preco_base.toString() + "€";
}

function goUp(){
	faz_subir('produto.html');
}
