var actual = 0;
var amigos_true = 0;
var maximo = 0;
var str_imagens = "./imagens/FriendsHub/";
var imgs= [];
var nomes = [];
var amigos;

function onLoadLogin(){
    var pagamento = getCookie("pagamento");
    if (pagamento=='Paypal'){
        _('fundo').style.background = "url(./imagens/Paypal.png)";
        _('fundo').style.backgroundSize =  "cover";
        _('texto_cima').innerHTML = pagamento;
    }
    else if (pagamento=='Google'){
        _('fundo').style.background = "url(./imagens/google_wallet.png)";
        _('fundo').style.backgroundSize =  "cover";
        _('texto_cima').innerHTML = pagamento;
        _('log_in').style.background ="green";
    }
    else if (pagamento=='Apple'){
        _('fundo').style.background = "url(./imagens/Applepay.png)";
        _('fundo').style.backgroundSize =  "cover";
        _('texto_cima').innerHTML = 'Applepay';
        _('log_in').style.background ="#06F";
    }
    else if (pagamento=='Amazon'){
        _('fundo').style.background = "url(./imagens/amazon_payments.jpg)";
        _('fundo').style.backgroundSize =  "cover";
        _('fundo').style.opacity =  "0.1";
        _('texto_cima').innerHTML = pagamento;
        _('log_in').style.background ="#FFEA00 ";
    }
    txt_m = getCookie('texto_baixo');
    if (txt_m){
        _('mail').innerHTML = txt_m;
    }
    txt_pa = getCookie('texto_baixo_pa');
    if (txt_pa){
        _('pass').innerHTML = txt_pa;
        if (txt_m){
            var tentativa = true;
        }
    }
    if (tentativa)
        _('log_in').style.visibility ="visible ";
}
function enterMail(){
    faz_descer('mail.html');
}
function enterPass(){
    setCookie('texto_baixo_pa','',1);
    faz_descer('pass.html');
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
	faz_subir('tratar_financas.html');
}
