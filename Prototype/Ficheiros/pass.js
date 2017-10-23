var actual = 0;
var amigos_true = 0;
var maximo = 0;
var str_imagens = "./imagens/FriendsHub/";
var imgs= [];
var nomes = [];
var amigos;

function onLoadMail(){
    txt_m = getCookie('texto_baixo_pa');
    num = txt_m.length;
    asteriscos = "";
    for(var i =0 ; i<num;i++){
        asteriscos = asteriscos + "*";
    }
    _('texto_baixo').innerHTML = asteriscos;

}
function changeMail(letra){
    if (!foi_swipe) 
    { 
        if (letra=='OK'){
            setCookie('texto_baixo_pa',_('texto_baixo').innerHTML,1); 
            faz_descer('login.html');
        }
        else if (letra=='del'){
            _('texto_baixo').innerHTML = _('texto_baixo').innerHTML.slice(0, -1);
        }
        else{
            _('texto_baixo').innerHTML = _('texto_baixo').innerHTML + letra;
            setCookie('texto_baixo_pa',_('texto_baixo').innerHTML,1); 
            faz_stay('pass.html');
        } 
    }
}

function changeLinkFinancas(escolhido){
	if (!foi_swipe) 
    {   
        if (escolhido=='loja'){
            faz_descer('warning_loja.html');
        }
        else{
            setCookie('pagamento',escolhido,1);
            faz_descer('login.html');
        }
    }
}

function goUp(){
	var zero = 0;
	setCookie("actual",zero,1);	
	changeMail('OK');
}
